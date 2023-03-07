import { ContractTransaction, BigNumber, BigNumberish } from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  AsksV1_1,
  AsksV1_1MethodNames,
  AsksV1_1EventsContext,
  AsksV1_1Events
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export type AskRequest = {
  seller: string;
  sellerFundsRecipient: string;
  askCurrency: string;
  findersFeeBps: BigNumber;
  askPrice: BigNumber;
};

export type ARequest = {
  tokenContract: string;
  tokenId: BigNumber;
  amount: BigNumber;
};
export type BRequest = {
  tokenContract: string;
  tokenId: BigNumber;
  amount: BigNumber;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type AsksV1_1Events =
  | 'AskCanceled'
  | 'AskCreated'
  | 'AskFilled'
  | 'AskPriceUpdated'
  | 'ExchangeExecuted'
  | 'RoyaltyPayout';
export interface AsksV1_1EventsContext {
  AskCanceled(...parameters: any): EventFilter;
  AskCreated(...parameters: any): EventFilter;
  AskFilled(...parameters: any): EventFilter;
  AskPriceUpdated(...parameters: any): EventFilter;
  ExchangeExecuted(...parameters: any): EventFilter;
  RoyaltyPayout(...parameters: any): EventFilter;
}
export type AsksV1_1MethodNames =
  | 'new'
  | '_handleRoyaltyEnginePayout'
  | 'askForNFT'
  | 'cancelAsk'
  | 'createAsk'
  | 'erc20TransferHelper'
  | 'erc721TransferHelper'
  | 'fillAsk'
  | 'name'
  | 'registrar'
  | 'setAskPrice'
  | 'setRoyaltyEngineAddress';
export interface AskCanceledEventEmittedResponse {
  tokenContract: string;
  tokenId: BigNumberish;
  ask: AskRequest;
}
export interface AskCreatedEventEmittedResponse {
  tokenContract: string;
  tokenId: BigNumberish;
  ask: AskRequest;
}
export interface AskFilledEventEmittedResponse {
  tokenContract: string;
  tokenId: BigNumberish;
  buyer: string;
  finder: string;
  ask: AskRequest;
}
export interface AskPriceUpdatedEventEmittedResponse {
  tokenContract: string;
  tokenId: BigNumberish;
  ask: AskRequest;
}
export interface ExchangeExecutedEventEmittedResponse {
  userA: string;
  userB: string;
  a: ARequest;
  b: BRequest;
}
export interface RoyaltyPayoutEventEmittedResponse {
  tokenContract: string;
  tokenId: BigNumberish;
  recipient: string;
  amount: BigNumberish;
}
export interface AskForNFTResponse {
  seller: string;
  0: string;
  sellerFundsRecipient: string;
  1: string;
  askCurrency: string;
  2: string;
  findersFeeBps: number;
  3: number;
  askPrice: BigNumber;
  4: BigNumber;
  length: 5;
}
export interface AsksV1_1 {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _erc20TransferHelper Type: address, Indexed: false
   * @param _erc721TransferHelper Type: address, Indexed: false
   * @param _royaltyEngine Type: address, Indexed: false
   * @param _protocolFeeSettings Type: address, Indexed: false
   * @param _wethAddress Type: address, Indexed: false
   */
  'new'(
    _erc20TransferHelper: string,
    _erc721TransferHelper: string,
    _royaltyEngine: string,
    _protocolFeeSettings: string,
    _wethAddress: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _tokenContract Type: address, Indexed: false
   * @param _tokenId Type: uint256, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   * @param _payoutCurrency Type: address, Indexed: false
   */
  _handleRoyaltyEnginePayout(
    _tokenContract: string,
    _tokenId: BigNumberish,
    _amount: BigNumberish,
    _payoutCurrency: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: uint256, Indexed: false
   */
  askForNFT(
    parameter0: string,
    parameter1: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<AskForNFTResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenContract Type: address, Indexed: false
   * @param _tokenId Type: uint256, Indexed: false
   */
  cancelAsk(
    _tokenContract: string,
    _tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenContract Type: address, Indexed: false
   * @param _tokenId Type: uint256, Indexed: false
   * @param _askPrice Type: uint256, Indexed: false
   * @param _askCurrency Type: address, Indexed: false
   * @param _sellerFundsRecipient Type: address, Indexed: false
   * @param _findersFeeBps Type: uint16, Indexed: false
   */
  createAsk(
    _tokenContract: string,
    _tokenId: BigNumberish,
    _askPrice: BigNumberish,
    _askCurrency: string,
    _sellerFundsRecipient: string,
    _findersFeeBps: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  erc20TransferHelper(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  erc721TransferHelper(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _tokenContract Type: address, Indexed: false
   * @param _tokenId Type: uint256, Indexed: false
   * @param _fillCurrency Type: address, Indexed: false
   * @param _fillAmount Type: uint256, Indexed: false
   * @param _finder Type: address, Indexed: false
   */
  fillAsk(
    _tokenContract: string,
    _tokenId: BigNumberish,
    _fillCurrency: string,
    _fillAmount: BigNumberish,
    _finder: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  registrar(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenContract Type: address, Indexed: false
   * @param _tokenId Type: uint256, Indexed: false
   * @param _askPrice Type: uint256, Indexed: false
   * @param _askCurrency Type: address, Indexed: false
   */
  setAskPrice(
    _tokenContract: string,
    _tokenId: BigNumberish,
    _askPrice: BigNumberish,
    _askCurrency: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _royaltyEngine Type: address, Indexed: false
   */
  setRoyaltyEngineAddress(
    _royaltyEngine: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
}
