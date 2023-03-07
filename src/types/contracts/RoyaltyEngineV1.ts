import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  RoyaltyEngineV1,
  RoyaltyEngineV1MethodNames,
  RoyaltyEngineV1EventsContext,
  RoyaltyEngineV1Events
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
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
export type RoyaltyEngineV1Events = 'OwnershipTransferred';
export interface RoyaltyEngineV1EventsContext {
  OwnershipTransferred(...parameters: any): EventFilter;
}
export type RoyaltyEngineV1MethodNames =
  | '_getRoyaltyAndSpec'
  | 'getCachedRoyaltySpec'
  | 'getRoyalty'
  | 'getRoyaltyView'
  | 'initialize'
  | 'invalidateCachedRoyaltySpec'
  | 'owner'
  | 'renounceOwnership'
  | 'royaltyRegistry'
  | 'supportsInterface'
  | 'transferOwnership';
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface _getRoyaltyAndSpecResponse {
  recipients: string[];
  0: string[];
  amounts: BigNumber[];
  1: BigNumber[];
  spec: number;
  2: number;
  royaltyAddress: string;
  3: string;
  addToCache: boolean;
  4: boolean;
  length: 5;
}
export interface GetRoyaltyViewResponse {
  recipients: string[];
  0: string[];
  amounts: BigNumber[];
  1: BigNumber[];
  length: 2;
}
export interface RoyaltyEngineV1 {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenAddress Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   * @param value Type: uint256, Indexed: false
   */
  _getRoyaltyAndSpec(
    tokenAddress: string,
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<_getRoyaltyAndSpecResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenAddress Type: address, Indexed: false
   */
  getCachedRoyaltySpec(
    tokenAddress: string,
    overrides?: ContractCallOverrides,
  ): Promise<number>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenAddress Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   * @param value Type: uint256, Indexed: false
   */
  getRoyalty(
    tokenAddress: string,
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenAddress Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   * @param value Type: uint256, Indexed: false
   */
  getRoyaltyView(
    tokenAddress: string,
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<GetRoyaltyViewResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param royaltyRegistry_ Type: address, Indexed: false
   */
  initialize(
    royaltyRegistry_: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenAddress Type: address, Indexed: false
   */
  invalidateCachedRoyaltySpec(
    tokenAddress: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  royaltyRegistry(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param interfaceId Type: bytes4, Indexed: false
   */
  supportsInterface(
    interfaceId: Arrayish,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(
    newOwner: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
}
