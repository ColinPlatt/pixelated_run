import {
	ContractTransaction,
	BigNumber,
	BigNumberish,
} from "ethers"
import { EthersContractContextV5 } from "ethereum-abi-types-generator"

export type ContractContext = EthersContractContextV5<
	OffersV1,
	OffersV1MethodNames,
	OffersV1EventsContext,
	OffersV1Events
>;

export declare type EventFilter = {
	address?: string;
	topics?: Array<string>;
	fromBlock?: string | number;
	toBlock?: string | number;
};

export type OfferRequest = {
	maker: string,
	currency: string,
	findersFeeBps: BigNumber,
	amount: BigNumber
}

export type ARequest = {
	tokenContract: string,
	tokenId: BigNumber,
	amount: BigNumber
}
export type BRequest = {
	tokenContract: string,
	tokenId: BigNumber,
	amount: BigNumber
}

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
export type OffersV1Events =
	| "ExchangeExecuted"
	| "OfferCanceled"
	| "OfferCreated"
	| "OfferFilled"
	| "OfferUpdated"
	| "RoyaltyPayout";
export interface OffersV1EventsContext {
	ExchangeExecuted(...parameters: any): EventFilter;
	OfferCanceled(...parameters: any): EventFilter;
	OfferCreated(...parameters: any): EventFilter;
	OfferFilled(...parameters: any): EventFilter;
	OfferUpdated(...parameters: any): EventFilter;
	RoyaltyPayout(...parameters: any): EventFilter;
}
export type OffersV1MethodNames =
	| "new"
	| "_handleRoyaltyEnginePayout"
	| "cancelOffer"
	| "createOffer"
	| "erc20TransferHelper"
	| "erc721TransferHelper"
	| "fillOffer"
	| "name"
	| "offerCount"
	| "offers"
	| "offersForNFT"
	| "registrar"
	| "setOfferAmount"
	| "setRoyaltyEngineAddress";
export interface ExchangeExecutedEventEmittedResponse {
	userA: string;
	userB: string;
	a: ARequest;
	b: BRequest;
}
export interface OfferCanceledEventEmittedResponse {
	tokenContract: string;
	tokenId: BigNumberish;
	id: BigNumberish;
	offer: OfferRequest;
}
export interface OfferCreatedEventEmittedResponse {
	tokenContract: string;
	tokenId: BigNumberish;
	id: BigNumberish;
	offer: OfferRequest;
}
export interface OfferFilledEventEmittedResponse {
	tokenContract: string;
	tokenId: BigNumberish;
	id: BigNumberish;
	taker: string;
	finder: string;
	offer: OfferRequest;
}
export interface OfferUpdatedEventEmittedResponse {
	tokenContract: string;
	tokenId: BigNumberish;
	id: BigNumberish;
	offer: OfferRequest;
}
export interface RoyaltyPayoutEventEmittedResponse {
	tokenContract: string;
	tokenId: BigNumberish;
	recipient: string;
	amount: BigNumberish;
}
export interface OffersResponse {
	maker: string;
	0: string;
	currency: string;
	1: string;
	findersFeeBps: number;
	2: number;
	amount: BigNumber;
	3: BigNumber;
	length: 4;
}
export interface OffersV1 {
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
	"new"(
		_erc20TransferHelper: string,
		_erc721TransferHelper: string,
		_royaltyEngine: string,
		_protocolFeeSettings: string,
		_wethAddress: string,
		overrides?: ContractTransactionOverrides
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
		overrides?: ContractTransactionOverrides
	): Promise<ContractTransaction>;
	/**
		* Payable: false
		* Constant: false
		* StateMutability: nonpayable
		* Type: function
		* @param _tokenContract Type: address, Indexed: false
		* @param _tokenId Type: uint256, Indexed: false
		* @param _offerId Type: uint256, Indexed: false
		*/
	cancelOffer(
		_tokenContract: string,
		_tokenId: BigNumberish,
		_offerId: BigNumberish,
		overrides?: ContractTransactionOverrides
	): Promise<ContractTransaction>;
	/**
		* Payable: true
		* Constant: false
		* StateMutability: payable
		* Type: function
		* @param _tokenContract Type: address, Indexed: false
		* @param _tokenId Type: uint256, Indexed: false
		* @param _currency Type: address, Indexed: false
		* @param _amount Type: uint256, Indexed: false
		* @param _findersFeeBps Type: uint16, Indexed: false
		*/
	createOffer(
		_tokenContract: string,
		_tokenId: BigNumberish,
		_currency: string,
		_amount: BigNumberish,
		_findersFeeBps: BigNumberish,
		overrides?: ContractTransactionOverrides
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
		* Payable: false
		* Constant: false
		* StateMutability: nonpayable
		* Type: function
		* @param _tokenContract Type: address, Indexed: false
		* @param _tokenId Type: uint256, Indexed: false
		* @param _offerId Type: uint256, Indexed: false
		* @param _currency Type: address, Indexed: false
		* @param _amount Type: uint256, Indexed: false
		* @param _finder Type: address, Indexed: false
		*/
	fillOffer(
		_tokenContract: string,
		_tokenId: BigNumberish,
		_offerId: BigNumberish,
		_currency: string,
		_amount: BigNumberish,
		_finder: string,
		overrides?: ContractTransactionOverrides
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
	offerCount(overrides?: ContractCallOverrides): Promise<BigNumber>;
	/**
		* Payable: false
		* Constant: true
		* StateMutability: view
		* Type: function
		* @param parameter0 Type: address, Indexed: false
		* @param parameter1 Type: uint256, Indexed: false
		* @param parameter2 Type: uint256, Indexed: false
		*/
	offers(
		parameter0: string,
		parameter1: BigNumberish,
		parameter2: BigNumberish,
		overrides?: ContractCallOverrides
	): Promise<OffersResponse>;
	/**
		* Payable: false
		* Constant: true
		* StateMutability: view
		* Type: function
		* @param parameter0 Type: address, Indexed: false
		* @param parameter1 Type: uint256, Indexed: false
		* @param parameter2 Type: uint256, Indexed: false
		*/
	offersForNFT(
		parameter0: string,
		parameter1: BigNumberish,
		parameter2: BigNumberish,
		overrides?: ContractCallOverrides
	): Promise<BigNumber>;
	/**
		* Payable: false
		* Constant: true
		* StateMutability: view
		* Type: function
		*/
	registrar(overrides?: ContractCallOverrides): Promise<string>;
	/**
		* Payable: true
		* Constant: false
		* StateMutability: payable
		* Type: function
		* @param _tokenContract Type: address, Indexed: false
		* @param _tokenId Type: uint256, Indexed: false
		* @param _offerId Type: uint256, Indexed: false
		* @param _currency Type: address, Indexed: false
		* @param _amount Type: uint256, Indexed: false
		*/
	setOfferAmount(
		_tokenContract: string,
		_tokenId: BigNumberish,
		_offerId: BigNumberish,
		_currency: string,
		_amount: BigNumberish,
		overrides?: ContractTransactionOverrides
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
		overrides?: ContractTransactionOverrides
	): Promise<ContractTransaction>;
}
