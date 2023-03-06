import { getAddress } from 'ethersv5/lib/utils';

export function isSameAddress(address1 = '', address2 = '') {
  try {
    const a1 = getAddress(address1);
    const a2 = getAddress(address2);
    if (a1 && a2) return a1.toLowerCase() === a2.toLowerCase();
    return false;
  } catch (_) {
    return false;
  }
}
