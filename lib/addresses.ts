export const addresses = {
	eth: {
		main: {
			registry: '0x1D415aa39D647834786EB9B5a333A50e9935b796',
			sTokens: '0x50489Ff5f879A44C87bBA85287729D663b18CeD5',
		},
		ropsten: {
			registry: '0xD6D07f1c048bDF2B3d5d9B6c25eD1FC5348D0A70',
			sTokens: '0x7224e918923984b430eA4B96C4C523Da6e8d7F9D',
		},
	},
	arbitrum: {
		one: {
			token: '0x91F5dC90979b058eBA3be6B7B7e523df7e84e137',
			lockup: '0x1A2B49e10013C40AAC9b6f9e785837bfd329e5e0',
			marketFactory: '0xaF490bA3EaFf9495f01407EC22027bD90eaFABb1',
			metricsFactory: '0xEdCF7765B7Be6415D02173e4645604bB1A377929',
			policyFactory: '0x2ef61A14284A0f45813e492b3696F4BD2cc51B6f',
			propertyFactory: '0xa4C8A1E3012E8fBE21f2936DEab6dD50A0A05774',
			registry: '0xbeF4DeEA3AE863739Bd402E025c749536f491ffa',
			sTokens: '0x40d999931f7055F670511860e24624939e71a96a',
			withdraw: '0x1c2699e43F0Bc47b45F27BFc84e99c64851A4BF0',
		},
		rinkeby: {
			token: '0xc28BBE3B5ec1b06FDe258864f12c1577DaDFadDC',
			lockup: '0x4944CA0423f42DF7c77ad8Cd53F30f31A097F4fa',
			marketFactory: '0x6EA7a231dc747fBEf931639B15908625f31287bf',
			metricsFactory: '0x650663aD898A018cca44Ac224Be2286D14B7421d',
			policyFactory: '0x485085f157dD7Ba451f0AB6Fa2ca42421CBA1d3c',
			propertyFactory: '0x66446E01c5a2fdA8FC5Af640a12E66c078903487',
			registry: '0x519d5e729fbE6B3e4607260413Fb684759612465',
			sTokens: '0xe45d65c6d6aA3e2a4c8aAcc0C8153778663fe794',
			withdraw: '0xFBfB9aD095f906d7E354F7ee31d88F0ca517A9C0',
		},
	},
	polygon: {
		mainnet: {
			token: '0xA5577D1cec2583058A6Bd6d5DEAC44797c205701',
			lockup: '0x42767B12d3f07bE0D951a64eE6573B40Ff165C4e',
			marketFactory: '0xEA518Ab9551d3cD9Ec4C74df1fa6946B18212178',
			metricsFactory: '0xD18f2eB75cE3a6A35586115b2f2c63d907536CDE',
			policyFactory: '0xD42c04179410a38BE95737e663480a7CC42B9C05',
			propertyFactory: '0x8bB6a34afBD34663cEeEFA697918c647Da22a352',
			registry: '0xbeF4DeEA3AE863739Bd402E025c749536f491ffa',
			sTokens: '0x89904De861CDEd2567695271A511B3556659FfA2',
			withdraw: '0x60d1743fc6791aEDB833E4aED604eccb9EC838DE',
		},
		mumbai: {
			token: '0xcbc698ed514dF6e54932a22515d6D0C27E4DA091',
			lockup: '0xfDC5FF1F07871A247eafE14eEB134eeFcbCf1ceA',
			marketFactory: '0x953992D325d8A9Bab35406C2E34c0d5535fa5206',
			metricsFactory: '0x02d107567020bCE1Eb524D80C44f899Fa9993E5f',
			policyFactory: '0x0f85eC41980E86847Ba57eA763E9c5f88f829554',
			propertyFactory: '0xcCB7e1454d66fc3c2053694D323c127D2a4b39BA',
			registry: '0xe2C16936413D74c667aeF0D040c920BF639067d4',
			sTokens: '0xe0af15141ABd0B31Fb15e250971936Fe8837230a',
			withdraw: '0x5f9d9f40f4d7d8A350745D69e94E20339Df17b83',
		},
	},
} as const
