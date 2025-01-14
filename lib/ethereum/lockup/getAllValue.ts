import { ethers } from 'ethers'
import { execute, QueryOption } from '../../common/utils/execute'
import { always } from 'ramda'

export type CreateGetAllValueCaller = (
	contract: ethers.Contract
) => () => Promise<string>

export const createGetAllValueCaller: CreateGetAllValueCaller = (
	contract: ethers.Contract
) =>
	always(
		execute<QueryOption>({
			contract,
			method: 'getAllValue',
			mutation: false,
		})
	)
