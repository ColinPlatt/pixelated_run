const origin =
  typeof window === 'undefined'
    ? 'http://localhost:3000/'
    : window.location.origin;

export const DEV =
  process.env.NODE_ENV === 'development' ||
  process.env.NEXT_PUBLIC_ENV === 'development';

// APIS AND EXTERNAL SERVICES
export const BLOCK_EXPLORER_BASE_URL =
  process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL || 'https://tuber.build/';

export const DB_CONFIG = {
  host: process.env.NEXT_PUBLIC_COLLECTION_DB_HOST || '',
  port: parseInt(process.env.NEXT_PUBLIC_COLLECTION_DB_PORT || ''),
  database: process.env.NEXT_PUBLIC_COLLECTION_DB_NAME || '',
  user: process.env.NEXT_PUBLIC_COLLECTION_DB_USER || '',
  password: process.env.NEXT_PUBLIC_COLLECTION_DB_PW || '',
};

export const NETWORK_RPC_URL =
  process.env.NEXT_PUBLIC_NETWORK_URL || 'https://canto.gravitychain.io';
export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;

export const MINT_PRICE = process.env.NEXT_PUBLIC_MINT_PRICE;
export const REPLENISH_PRICE = process.env.NEXT_PUBLIC_REPLENISH_PRICE;

// CONTRACTS
export const PIXELATED = process.env.NEXT_PUBLIC_PIXELATED || '';
export const WCANTO = process.env.NEXT_PUBLIC_WCANTO || '';
export const ERC20_TRANSFER_HELPER =
  process.env.NEXT_PUBLIC_ERC20_TRANSFER_HELPER || '';
export const ERC721_TRANSFER_HELPER =
  process.env.NEXT_PUBLIC_ERC721_TRANSFER_HELPER || '';
export const ROYALTY_ENGINE_V1 =
  process.env.NEXT_PUBLIC_ROYALTY_ENGINE_V1 || '';
export const OFFERS_V1 = process.env.NEXT_PUBLIC_OFFERS_V1 || '';
export const ASKS_CSR = process.env.NEXT_PUBLIC_ASKS_CSR || '';
