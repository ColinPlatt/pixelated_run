import config from '../../../config.json';

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://twitter.com/${config.social.twitter}/`);

  return 'Opening Twitter...';
};
