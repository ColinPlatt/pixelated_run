import {
  getAccount,
  disconnect as Disconnect,
  connect as Connect,
  getNetwork,
  getProvider,
  fetchSigner,
  Address,
} from '@wagmi/core';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { cantoChain } from '@/utils/web3';

import { CHAIN_ID } from '@/utils/web3/env-vars';

export async function getAuth() {
  const provider = getProvider();
  const signer = await fetchSigner();
  const { address, isConnecting } = await getAccount();
  const disconnect = await Disconnect();
  const { chain } = getNetwork();
  const incorrectChain = chain ? chain.id.toString() !== CHAIN_ID! : false;

  return {
    provider,
    incorrectChain,
    signer,
    address,
    loading: isConnecting,
    logout: disconnect,
  };
}

export async function connectWallet(): Promise<Address> {
  const { address } = getAccount();

  if (!address) {
    const result = await Connect({
      chainId: cantoChain.id,
      connector: new MetaMaskConnector(),
    });

    return result.account;
  }

  return address;
}
