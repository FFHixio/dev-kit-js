import Web3 from 'web3'
import { createLockupContract, LockupContract } from '.'
import { lockupAbi } from './abi'
import { CustomOptions } from '../../common/option'
import { createCalculateCumulativeHoldersRewardAmountCaller } from './calculateCumulativeHoldersRewardAmount'
import { createCalculateCumulativeRewardPricesCaller } from './calculateCumulativeRewardPrices'
import { createCalculateRewardAmountCaller } from './calculateRewardAmount'
import { createCapCaller } from './cap'
import { createDepositToPropertyCaller } from './depositToProperty'
import { createDepositToPositionCaller } from './depositToPosition'
import { createWithdrawByPositionCaller } from './withdrawByPosition'
import { createcalculateWithdrawableInterestAmountByPositionCaller } from './calculateWithdrawableInterestAmountByPosition'
import { createTotalLockedCaller } from './totalLocked'
import { createTotalLockedForPropertyCaller } from './totalLockedForProperty'

describe('lockup/index.ts', () => {
	describe('createLockupContract', () => {
		it('check return object', () => {
			const host = 'localhost'
			const client = new Web3()
			client.setProvider(new Web3.providers.HttpProvider(host))

			const expected: (
				address?: string,
				options?: CustomOptions
			) => LockupContract = (address?: string, options?: CustomOptions) => {
				const lockupContract = new client.eth.Contract(
					[...lockupAbi],
					address,
					{
						...options,
					}
				)
				return {
					withdrawByPosition: createWithdrawByPositionCaller(
						lockupContract,
						client
					),
					calculateWithdrawableInterestAmountByPosition:
						createcalculateWithdrawableInterestAmountByPositionCaller(
							lockupContract
						),
					calculateCumulativeHoldersRewardAmount:
						createCalculateCumulativeHoldersRewardAmountCaller(lockupContract),
					calculateCumulativeRewardPrices:
						createCalculateCumulativeRewardPricesCaller(lockupContract),
					calculateRewardAmount:
						createCalculateRewardAmountCaller(lockupContract),
					cap: createCapCaller(lockupContract),
					depositToProperty: createDepositToPropertyCaller(
						lockupContract,
						client
					),
					depositToPosition: createDepositToPositionCaller(
						lockupContract,
						client
					),
					totalLocked: createTotalLockedCaller(lockupContract),
					totalLockedForProperty:
						createTotalLockedForPropertyCaller(lockupContract),
					contract: () => lockupContract,
				}
			}

			const result = createLockupContract(client)

			expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
			expect(
				JSON.stringify(result('0x0000000000000000000000000000000000000000'))
			).toEqual(
				JSON.stringify(expected('0x0000000000000000000000000000000000000000'))
			)
		})
	})
})
