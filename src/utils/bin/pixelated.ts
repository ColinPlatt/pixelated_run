import {
  getOwner,
  getPixelsData,
  connectWallet,
  mintNft,
  getHasAccepted,
  acceptNft,
} from '@/api';

const mintHelp = async (): Promise<string> => {
  return 'Usage: mint. Example: mint';
};

const acceptHelp = async (): Promise<string> => {
  return 'Usage: accept "I understand that by minting this NFT I have a duty to cherish it. If I fail to do so, it will perish and it will be my fault."';
};

// @todo figure out how to return a response while we await
const asyncResponse = () => {
  return 'Doing something...';
};

const isNumeric = (val: string): boolean => {
  return !isNaN(Number(val));
};

export const info = async (args: string[]): Promise<string> => {
  if (!isNumeric(args[0]) || args.length != 1) {
    return 'Usage: info [id]. Example: info 1';
  }

  const owner = getPixelsData(args[0]);

  asyncResponse();

  return owner;
};

export const accept = async (args: string[]): Promise<string> => {
  if (args[0] == '--help' || args[0] == '-h') return acceptHelp();
  
  if (
    args.join(' ') !=
    '"I understand that by minting this NFT I have a duty to cherish it. If I fail to do so, it will perish and it will be my fault."'
  )
    return acceptHelp();

  const connectedAddress = await connectWallet();

  const cleanedTerms = args.join(' ');

  if (await getHasAccepted(connectedAddress)) {
    return 'you have already accepted terms of Pixelated for this address.';
  } else {
    return acceptNft(cleanedTerms.slice(1, cleanedTerms.length - 1));
  }

  return acceptNft(connectedAddress);
};

// expect args[0] = ID, args[1] = numberOfDays
export const mint = async (args: string[]): Promise<string> => {
  if (args[0] == '--help' || args[0] == '-h') return mintHelp();

  const connectedAddress = await connectWallet();

  if (!(await getHasAccepted(connectedAddress))) {
    return 'error: you must first accept the terms of Pixelated.';
  } else {
    return mintNft(connectedAddress);
  }
};

export const replenish = async (): Promise<string> => {
  return 'disconnected';
};
