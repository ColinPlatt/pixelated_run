import { AddressZero } from '@ethersproject/constants';

import {
  AskEvent,
  ERC721Transfer,
  OfferEvent,
  TokenActivity,
  TokenActivityEventType,
} from '../../types';

import { isSameAddress } from './misc';

// TODO: figure out how to reimplement mintAddress check
export const convertTransferToActivity = (
  transfer: ERC721Transfer,
): TokenActivity => ({
  id: transfer.transaction.id,
  eventType: isSameAddress(transfer.from.id, AddressZero)
    ? TokenActivityEventType.MINT
    : TokenActivityEventType.TRANSFER,
  time: parseInt(transfer.timestamp),
  seller: transfer.from.id,
  buyer: transfer.to.id,
  tokenId: transfer.token.identifier,
  tokenContract: transfer.contract.id,
});

export const convertAskEventToActivity = (
  askEvent: AskEvent,
): TokenActivity => ({
  id: askEvent.id,
  eventType: TokenActivityEventType[askEvent.eventType],
  time: parseInt(askEvent.time),
  seller: askEvent.ask.ask_seller,
  buyer: askEvent.eventType === 'ASK_FILLED' ? askEvent.ask.buyer : '--',
  amount: askEvent.ask.ask_askPrice,
  currency: askEvent.ask.ask_askCurrency,
  tokenId: askEvent.ask.tokenId,
  tokenContract: askEvent.ask.tokenContract,
});

export const convertOfferEventToActivity = (
  offerEvent: OfferEvent,
): TokenActivity => ({
  id: offerEvent.id,
  eventType: TokenActivityEventType[offerEvent.eventType],
  time: parseInt(offerEvent.time),
  seller: offerEvent.offer.taker || '',
  buyer: offerEvent.offer.offer_maker,
  amount: offerEvent.offer.offer_amount,
  currency: offerEvent.offer.offer_currency,
  tokenId: offerEvent.offer.tokenId,
  tokenContract: offerEvent.offer.tokenContract,
});
