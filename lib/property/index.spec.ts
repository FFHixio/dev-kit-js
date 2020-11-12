import Web3 from 'web3'
import { createPropertyContract, PropertyContract } from '.'
import { createAuthorCaller } from './author'
import { createTransferCaller } from './transfer'
import { propertyAbi } from './abi'
import { CustomOptions } from '../option'
import { createNameCaller } from './name'
import { createSymbolCaller } from './symbol'

describe('property/index.ts', () => {
	describe('createPropertyContract', () => {
		it('check return object', () => {
			const host = 'localhost'
			const client = new Web3()
			client.setProvider(new Web3.providers.HttpProvider(host))

			const expected: (
				address?: string,
				options?: CustomOptions
			) => PropertyContract = (address?: string, options?: CustomOptions) => {
				const propertyContract = new client.eth.Contract(
					[...propertyAbi],
					address,
					{
						...options,
					}
				)
				return {
					author: createAuthorCaller(propertyContract),
					transfer: createTransferCaller(propertyContract, client),
					name: createNameCaller(propertyContract),
					symbol: createSymbolCaller(propertyContract),
					contract: () => propertyContract,
				}
			}

			const result = createPropertyContract(client)

			expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
			expect(
				JSON.stringify(result('0x0000000000000000000000000000000000000000'))
			).toEqual(
				JSON.stringify(expected('0x0000000000000000000000000000000000000000'))
			)
		})
	})
})
