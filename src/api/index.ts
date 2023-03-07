import axios from 'axios';
import config from '../../config.json';
export * from './nft';
export * from './connection';

import { useAuth } from '@/hooks';

export const getAbout = async () => {
  const data: string =
    'Pixelated is an experimental NFT project that generates 1234 unique living image files that exist only on the Canto blockchain. Owners must accept the terms to mint or receive the NFT and must continue to replenish the the image or it will perish.';

  return data;
};
