import { ethers } from 'ethers'
import { execute, QueryOption } from '../utils/ethers-execute'
import { always } from 'ramda'

export type CreateAllocatorStorageCaller = (
	contract: ethers.Contract
) => () => Promise<string>

export const createAllocatorStorageCaller: CreateAllocatorStorageCaller = (
	contract: ethers.Contract
) =>
	always(
		execute<QueryOption>({
			contract,
			method: 'allocatorStorage',
			mutation: false,
		})
	)
