import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  ZoraModuleManager,
  ZoraModuleManagerMethodNames,
  ZoraModuleManagerEventsContext,
  ZoraModuleManagerEvents
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
export type ZoraModuleManagerEvents =
  | 'ModuleApprovalSet'
  | 'ModuleRegistered'
  | 'RegistrarChanged';
export interface ZoraModuleManagerEventsContext {
  ModuleApprovalSet(...parameters: any): EventFilter;
  ModuleRegistered(...parameters: any): EventFilter;
  RegistrarChanged(...parameters: any): EventFilter;
}
export type ZoraModuleManagerMethodNames =
  | 'new'
  | 'isModuleApproved'
  | 'moduleFeeToken'
  | 'moduleRegistered'
  | 'registerModule'
  | 'registrar'
  | 'setApprovalForModule'
  | 'setApprovalForModuleBySig'
  | 'setBatchApprovalForModules'
  | 'setRegistrar'
  | 'sigNonces'
  | 'userApprovals';
export interface ModuleApprovalSetEventEmittedResponse {
  user: string;
  module: string;
  approved: boolean;
}
export interface ModuleRegisteredEventEmittedResponse {
  module: string;
}
export interface RegistrarChangedEventEmittedResponse {
  newRegistrar: string;
}
export interface ZoraModuleManager {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _registrar Type: address, Indexed: false
   * @param _feeToken Type: address, Indexed: false
   */
  'new'(
    _registrar: string,
    _feeToken: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _user Type: address, Indexed: false
   * @param _module Type: address, Indexed: false
   */
  isModuleApproved(
    _user: string,
    _module: string,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  moduleFeeToken(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  moduleRegistered(
    parameter0: string,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _module Type: address, Indexed: false
   */
  registerModule(
    _module: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
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
   * @param _module Type: address, Indexed: false
   * @param _approved Type: bool, Indexed: false
   */
  setApprovalForModule(
    _module: string,
    _approved: boolean,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _module Type: address, Indexed: false
   * @param _user Type: address, Indexed: false
   * @param _approved Type: bool, Indexed: false
   * @param _deadline Type: uint256, Indexed: false
   * @param _v Type: uint8, Indexed: false
   * @param _r Type: bytes32, Indexed: false
   * @param _s Type: bytes32, Indexed: false
   */
  setApprovalForModuleBySig(
    _module: string,
    _user: string,
    _approved: boolean,
    _deadline: BigNumberish,
    _v: BigNumberish,
    _r: Arrayish,
    _s: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _modules Type: address[], Indexed: false
   * @param _approved Type: bool, Indexed: false
   */
  setBatchApprovalForModules(
    _modules: string[],
    _approved: boolean,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _registrar Type: address, Indexed: false
   */
  setRegistrar(
    _registrar: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  sigNonces(
    parameter0: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  userApprovals(
    parameter0: string,
    parameter1: string,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>;
}
