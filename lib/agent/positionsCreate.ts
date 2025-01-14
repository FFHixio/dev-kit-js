import { FallbackableOverrides } from '../common/utils/execute'
import { Provider } from '@ethersproject/abstract-provider'
import { clientsLockup } from './common/clients/clientsLockup'
import {
	approveIfNeeded as _approveIfNeeded,
	ApproveIfNeededResult,
} from './common/approveIfNeeded'
import { UndefinedOr } from '@devprotocol/util-ts'

type PositionsCreate = (options: {
	readonly provider: Provider
	readonly from: string
	readonly destination: string
	readonly amount: string
	readonly overrides?: FallbackableOverrides
}) => Promise<UndefinedOr<ApproveIfNeededResult>>

export const positionsCreate: PositionsCreate = async (options) => {
	const [l1, l2] = await clientsLockup(options.provider)

	return l1 || l2
		? {
				approveIfNeeded: _approveIfNeeded({
					provider: options.provider,
					requiredAmount: options.amount,
					from: options.from,
					to: ((x) => x?.contract().address)(l1 ?? l2),
					callback: (receipt) =>
						l1
							? l1.depositToProperty(
									options.destination,
									options.amount,
									options.overrides
							  )
							: l2
							? l2.depositToProperty(
									options.destination,
									options.amount,
									options.overrides
							  )
							: (undefined as never),
				}),
		  }
		: undefined
}
