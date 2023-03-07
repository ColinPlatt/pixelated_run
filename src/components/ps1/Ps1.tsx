import React, { useEffect, useState } from 'react';
import { useTheme } from '../../utils/themeProvider';
import { useAuth } from '@/hooks';

export const Ps1 = () => {
  const [hostname, setHostname] = useState('');
  const [username, setUsername] = useState('');
  const { theme } = useTheme();
  const { address: connectedAddress } = useAuth();

  useEffect(() => {
    if (typeof window !== undefined) {
      const cleanedName = window.location.hostname.split('www.');
      const cleanHost =
        cleanedName.length > 0 ? cleanedName[1] : cleanedName[0];
      setHostname(cleanHost);
      setUsername(
        connectedAddress
          ? connectedAddress.slice(0, 4) +
              '___' +
              connectedAddress.slice(connectedAddress.length - 4)
          : 'guest',
      );
    }
  }, [connectedAddress]);

  return (
    <div>
      <span
        style={{
          color: theme.yellow,
        }}
      >
        {username}
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        @
      </span>
      <span
        style={{
          color: theme.green,
        }}
      >
        {hostname}
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        :$ ~
      </span>
    </div>
  );
};

export default Ps1;
