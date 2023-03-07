import { useAuth } from '@/hooks';
import {
  Address,
  erc721ABI,
  readContract,
  readContracts,
  fetchBalance,
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from '@wagmi/core';
import { BigNumber } from 'ethers';
import { parseEther } from 'ethers/lib/utils.js';
import { PIXELATED, MINT_PRICE, REPLENISH_PRICE } from '@/utils/web3/env-vars';
import { pixelatedABI } from '@/abis/generated';

export const getOwner = async (id: string) => {
  return await getNftOwner(id);
};

const pixelatedContract = {
  address: PIXELATED as Address,
  abi: pixelatedABI,
};

export async function getNftOwner(id: string): Promise<string> {
  const data = await readContract({
    address: PIXELATED as Address,
    abi: erc721ABI,
    functionName: 'ownerOf',
    args: [BigNumber.from(id)],
  });

  return data.toString();
}

export async function getPixelsData(id: string): Promise<string> {
  const pixeldata = await readContract({
    ...pixelatedContract,
    functionName: 'pixels_data',
    args: [BigNumber.from(id)],
  });

  const calcData = await readContracts({
    contracts: [
      {
        ...pixelatedContract,
        functionName: 'calcLostPixels',
        args: [pixeldata.nextReplenishment, pixeldata.lostPixels],
      },
      {
        ...pixelatedContract,
        functionName: 'colorMapsNames',
        args: [BigNumber.from(pixeldata.colormap_idx)],
      },
      {
        address: PIXELATED as Address,
        abi: erc721ABI,
        functionName: 'ownerOf',
        args: [BigNumber.from(id)],
      },
    ],
  });

  const d: Date = new Date(pixeldata.nextReplenishment.toNumber() * 1000);

  // @todo map color fingerprint to hex rgbs
  const output = `\t ===================================================== \n
    \t **Pixelated ID: ${id}** \n
    \t\t Owner: ${calcData[2].toString()} \n
    \t\t Number of lost pixels: ${calcData[0].toString()} \n
    \t\t Last replenishment date: ${d.toLocaleDateString()} ${d.toLocaleTimeString()} UTC${
    d.getTimezoneOffset() < 0 ? '+' : '-'
  }${(-d.getTimezoneOffset() / 60).toString()} \n
    \t\t Pays royalties: ${pixeldata.payRoyalties ? 'true' : 'false'} \n
    \t\t Colormap: ${calcData[1]} \n
    \t\t Color fingerprint: ${pixeldata.ring_colors.toString()} \n
    =====================================================`;

  return output;
}

export async function getHasAccepted(address: `0x${string}`): Promise<boolean> {
  const data = await readContract({
    ...pixelatedContract,
    functionName: 'hasAccepted',
    args: [address],
  });

  return data;
}

export async function acceptNft(terms: string): Promise<string> {
  const config = await prepareWriteContract({
    ...pixelatedContract,
    functionName: 'accept',
    args: [terms],
    chainId: 7700,
  });

  const { hash } = await writeContract(config);
  const data = await waitForTransaction({
    hash: hash,
  });

  return `acceptance completed: <a href="https://tuber.build/tx/${hash.toString()}">view on tuber.build</a>`;
}

export async function mintNft(address: `0x${string}`): Promise<string> {
  // check the balance or return error
  const balance = await fetchBalance({
    address: address as Address,
  });

  if (balance.value < parseEther(MINT_PRICE!)) {
    return 'error: insufficient user balance.';
  }

  const config = await prepareWriteContract({
    ...pixelatedContract,
    functionName: 'mint',
    chainId: 7700,
    overrides: {
      from: address as Address,
      value: parseEther(MINT_PRICE!),
    },
  });

  const { hash } = await writeContract(config);
  const data = await waitForTransaction({
    hash: hash,
  });

  return `minting completed: <a href="https://tuber.build/tx/${hash.toString()}">view on tuber.build</a>`;
}

export async function replenishNft(
  address: `0x${string}`,
  id: string,
  days: string,
): Promise<string> {
  // check the balance or return error
  const balance = await fetchBalance({
    address: address as Address,
  });

  if (Number(days) < 1) {
    return 'error: mininum of 1 day.';
  }

  const replenishVal = parseEther(
    (Number(days) * Number(REPLENISH_PRICE)).toString(),
  );

  if (balance.value < replenishVal) {
    return 'error: insufficient user balance.';
  }

  const owner = await readContract({
    address: PIXELATED as Address,
    abi: erc721ABI,
    functionName: 'ownerOf',
    args: [BigNumber.from(id)],
  });

  if (owner != address) {
    return `error: not Pixelated owner for ID: ${id}.`;
  }

  const config = await prepareWriteContract({
    ...pixelatedContract,
    functionName: 'replenish',
    args: [BigNumber.from(id)],
    chainId: 7700,
    overrides: {
      from: address as Address,
      value: replenishVal,
    },
  });

  const { hash } = await writeContract(config);
  const data = await waitForTransaction({
    hash: hash,
  });

  return `replenishment completed: <a href="https://tuber.build/tx/${hash.toString()}">view on tuber.build</a>`;
}
