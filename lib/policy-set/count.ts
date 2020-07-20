import { Contract } from 'web3-eth-contract/types'
import { execute } from '../utils/execute'
import { always } from 'ramda'

export type CreateCountCaller = (contract: Contract) => () => Promise<string>

export const createCountCaller: CreateCountCaller = (contract: Contract) =>
	always(
		execute({
			contract,
			method: 'count',
		})
	)