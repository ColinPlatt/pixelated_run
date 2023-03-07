import { ethers } from 'ethers';

import { NETWORK_RPC_URL } from './env-vars';

export * from './errors';
export * from './misc';
export * from './wallet';

export const defaultProvider = new ethers.providers.JsonRpcProvider(
  NETWORK_RPC_URL,
);
