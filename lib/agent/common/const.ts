import { addresses } from '../../addresses'

export type L1AvailableNetwork = {
	readonly chainId: number
	readonly registry: string
}

export type L2AvailableNetwork = {
	readonly chainId: number
	readonly map: {
		readonly token: string
		readonly lockup: string
		readonly marketFactory: string
		readonly metricsFactory: string
		readonly policyFactory: string
		readonly propertyFactory: string
		readonly registry: string
		readonly sTokens: string
		readonly withdraw: string
	}
}

export const l1AvailableNetworks: readonly L1AvailableNetwork[] = [
	{ chainId: 1, registry: addresses.eth.main.registry },
	{ chainId: 3, registry: addresses.eth.ropsten.registry },
]

export const l2AvailableNetworks: readonly L2AvailableNetwork[] = [
	{
		chainId: 42161,
		map: addresses.arbitrum.one,
	},
	{ chainId: 421611, map: addresses.arbitrum.rinkeby },
	{ chainId: 137, map: addresses.polygon.mainnet },
	{ chainId: 80001, map: addresses.polygon.mumbai },
]