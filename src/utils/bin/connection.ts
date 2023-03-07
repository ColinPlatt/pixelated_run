import { connect as connectMM, disconnect as disconnectMM } from '@wagmi/core';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { cantoChain } from '@/utils/web3';

// @todo add other wallets under args

export const connect = async (args?: string[]): Promise<string> => {
  const result = await connectMM({
    chainId: cantoChain.id,
    connector: new MetaMaskConnector(),
  });

  if (result) {
    return 'connected';
  } else {
    return 'not connected';
  }
};

export const disconnect = async (args?: string[]): Promise<string> => {
  await disconnectMM();

  return 'disconnected';
};
