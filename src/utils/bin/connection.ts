import { connect as connectMM, disconnect as disconnectMM } from '@wagmi/core'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { cantoChain } from '@/utils/web3'

export const connect = async (): Promise<string> => {
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

export const disconnect = async (): Promise<string> => {
  await disconnectMM();

  return 'disconnected';
};
