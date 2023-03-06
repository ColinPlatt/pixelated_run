import { Signer } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import {
  useAccount,
  useDisconnect,
  useNetwork,
  useProvider,
  useSigner,
} from 'wagmi';

import { CHAIN_ID } from '@/utils/web3/env-vars';

export function useAuth() {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const { address, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const [incorrectChain, setIncorrectChain] = useState(false);

  useEffect(() => {
    setIncorrectChain(chain ? chain.id.toString() !== CHAIN_ID : false);
  }, [chain]);

  const signerRef = useRef<Signer | null>();
  signerRef.current = signer;

  return {
    provider,
    incorrectChain,
    signer,
    signerRef,
    address,
    loading: isConnecting,
    logout: disconnect,
  };
}
