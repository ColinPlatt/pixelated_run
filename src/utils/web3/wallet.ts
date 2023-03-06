import { Chain, configureChains, createClient } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet, metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';

import { NETWORK_RPC_URL } from './env-vars';

export const cantoChain: Chain = {
  id: 7_700,
  name: 'Canto',
  network: 'canto',
  nativeCurrency: {
    decimals: 18,
    name: 'Canto',
    symbol: 'CANTO',
  },
  rpcUrls: {
    default: { http: [NETWORK_RPC_URL] },
    public: { http: [NETWORK_RPC_URL] },
  },
  blockExplorers: {
    default: {
      name: 'Canto Explorer',
      url: 'https://evm.explorer.canto.io',
    },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [cantoChain],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== cantoChain.id) return null;
        return { http: NETWORK_RPC_URL };
      },
    }),
  ],
);

/*const { connectors } = getDefaultWallets({
  appName: 'pixelated.run',
  chains,
});
*/

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [injectedWallet({ chains }), metaMaskWallet({ chains })],
  },
]);

export const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export { chains };
