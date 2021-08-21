import { ethers } from 'ethers'
import { Provider } from '@ethersproject/abstract-provider'
import { Signer } from '@ethersproject/abstract-signer'
import { propertyAbi } from './abi'
import { createAuthorCaller } from './author'
import { createChangeAuthorCaller } from './changeAuthor'
import { createChangeNameCaller } from './changeName'
import { createChangeSymbolCaller } from './changeSymbol'
import { createTransferCaller } from './../erc20/transfer'
import { createNameCaller } from './../erc20/name'
import { createSymbolCaller } from './../erc20/symbol'
import { createTotalSupplyCaller } from './../erc20/totalSupply'
import { createDecimalsCaller } from './../erc20/decimals'
import { createTransferFromCaller } from '../erc20/transferFrom'
import { createBalanceOfCaller } from './../erc20/balanceOf'
import { createApproveCaller } from './../erc20/approve'
import { createAllowanceCaller } from './../erc20/allowance'

export type PropertyContract = {
	readonly totalSupply: () => Promise<string>
	readonly balanceOf: (address: string) => Promise<string>
	readonly transfer: (to: string, value: string) => Promise<boolean>
	readonly allowance: (from: string, to: string) => Promise<string>
	readonly approve: (to: string, value: string) => Promise<boolean>
	readonly transferFrom: (
		from: string,
		to: string,
		value: string
	) => Promise<boolean>
	readonly name: () => Promise<string>
	readonly symbol: () => Promise<string>
	readonly decimals: () => Promise<string>
	readonly author: () => Promise<string>
	readonly changeAuthor: (nextAuthor: string) => Promise<boolean>
	readonly changeName: (nextName: string) => Promise<boolean>
	readonly changeSymbol: (nextSymbol: string) => Promise<boolean>
}

export type CreatePropertyContract = (
	provider: Provider | Signer
) => (address: string) => PropertyContract

export const createPropertyContract: CreatePropertyContract =
	(provider: Provider | Signer) =>
	(address: string): PropertyContract => {
		const contract = new ethers.Contract(address, [...propertyAbi], provider)

		return {
			totalSupply: createTotalSupplyCaller(contract),
			balanceOf: createBalanceOfCaller(contract),
			transfer: createTransferCaller(contract),
			allowance: createAllowanceCaller(contract),
			approve: createApproveCaller(contract),
			transferFrom: createTransferFromCaller(contract),
			name: createNameCaller(contract),
			symbol: createSymbolCaller(contract),
			decimals: createDecimalsCaller(contract),
			author: createAuthorCaller(contract),
			changeAuthor: createChangeAuthorCaller(contract),
			changeName: createChangeNameCaller(contract),
			changeSymbol: createChangeSymbolCaller(contract),
		}
	}
