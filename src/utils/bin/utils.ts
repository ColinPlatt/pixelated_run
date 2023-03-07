import packageJson from '../../../package.json';
import * as gen from './index';
import * as connected from './pixelated';

export const help = async (args: string[]): Promise<string> => {
  const commandsGen = Object.keys(gen).sort().join(', ');
  const commandsConnected = Object.keys(connected).sort().join(', ');

  return `All available commands:\n${commandsGen}\n\nPixelated related commands: \n${commandsConnected}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/colinplatt/pixelated_run', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const start = (args?: string[]): string => {
  return `

  ██████╗ ██╗██╗  ██╗███████╗██╗      █████╗ ████████╗███████╗██████╗    ██████╗ ██╗   ██╗███╗   ██╗
  ██╔══██╗██║╚██╗██╔╝██╔════╝██║     ██╔══██╗╚══██╔══╝██╔════╝██╔══██╗   ██╔══██╗██║   ██║████╗  ██║
  ██████╔╝██║ ╚███╔╝ █████╗  ██║     ███████║   ██║   █████╗  ██║  ██║   ██████╔╝██║   ██║██╔██╗ ██║
  ██╔═══╝ ██║ ██╔██╗ ██╔══╝  ██║     ██╔══██║   ██║   ██╔══╝  ██║  ██║   ██╔══██╗██║   ██║██║╚██╗██║
  ██║     ██║██╔╝ ██╗███████╗███████╗██║  ██║   ██║   ███████╗██████╔╝██╗██║  ██║╚██████╔╝██║ ╚████║
  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝ ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ v${packageJson.version}

Type 'help' to see list of available commands.

--
This site is open-source, based on <a href="https://github.com/m4tt72/terminal">m4tt72 terminal</a> 🎉 and <a href="https://www.canto.sh">Canto Shell</a>. Type 'repo' to check out the repository.

Pixelated is a 100% on-chain, generative, living PNG file that evolves over time. Holders can decide to keep pace with their pixelated or let it perish over time.

--
`;
};
