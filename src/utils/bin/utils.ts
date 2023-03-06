import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
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
