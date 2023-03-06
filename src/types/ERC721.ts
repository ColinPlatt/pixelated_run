import { Ask } from "./AsksBidsOffers"

export type ERC721Token = {
	id: string,
	identifier: string,
	uri: string,
	owner: {
		id: string
	},
	contract?: ERC721CollectionOptional,
	transfers?: ERC721Transfer[],
	traits?: ERC721Trait[],
	ask?: Ask,
	numOffers?: number
}

export type ERC721Trait = {
	trait_type: string,
	value: string | boolean
}

export type ERC721Metadata = {
	id?: string | number,
	name?: string,
	description?: string,
	image: string,
	attributes?: ERC721Trait[]
}

export type ERC721Collection = {
	id: string,
	name: string,
	symbol: string,
	tokens: ERC721Token[]
}

export type ERC721CollectionOptional = {
	id: ERC721Collection[ "id" ],
	name: ERC721Collection[ "name" ],
	symbol?: ERC721Collection[ "symbol" ],
	tokens?: ERC721Collection[ "tokens" ],
}

export type ERC721Transfer = {
	id: string,
	timestamp: string,
	from: {
		id: string
	},
	to: {
		id: string
	},
	transaction: {
		id: string,
		blockNumber: string,
		timestamp: string
	},
	contract: {
		id: string
	},
	token: ERC721Token
}

export type CovalentMetadata = {
	animation_url: string | null,
	attributes: ERC721Trait[],
	description: string,
	external_url: string | null,
	image: string | null,
	image_256: string | null,
	image_512: string | null,
	image_1024: string | null,
	name: string,
	owner: string | null
}