import { ethers, Wallet } from 'ethers'
import { Options, positionsCreate } from './positionsCreate'
import { testProviders } from '../common/const'
import { env } from '../common/env'

describe('positionsCreate.ts', () => {
	const propertyAddress = '0x38c4bF6cD20d157EE45553b0fAD13B0c6750b439'
	const amount = '100'
	const overrides = {
		overrides: undefined,
		fallback: undefined,
	}

	it('', async () => {
		const options: Options = {
			provider: testProviders.ropsten,
			propertyAddress,
			amount,
			overrides,
		}
		const tx = await positionsCreate(options).then((result) => result)
		console.log(tx)
	})
	it('return undefined if network is not valid', async () => {
		const options: Options = {
			provider: testProviders.polyMumbai,
			propertyAddress,
			amount,
			overrides,
		}
		const tx = await positionsCreate(options).then((result) => result)
		expect(tx).toEqual(undefined)
	})
})
