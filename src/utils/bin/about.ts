import { getAbout } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  const aboutText: string = await getAbout();

  return aboutText;
};
