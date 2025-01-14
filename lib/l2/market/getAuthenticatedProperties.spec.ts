import { createGetAuthenticatedPropertiesCaller } from './getAuthenticatedProperties'

describe('getAuthenticatedProperties.spec.ts', () => {
	describe('createGetAuthenticatedPropertiesCaller', () => {
		it('call success', async () => {
			const value = ['0x0', '0x1', '0x2']

			const marketContract = {
				getAuthenticatedProperties: jest
					.fn()
					.mockImplementation(async () => Promise.resolve(value)),
			}

			const expected = value

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const caller = createGetAuthenticatedPropertiesCaller(
				marketContract as any
			)

			const result = await caller()

			expect(result).toEqual(expected)
		})

		it('call failure', async () => {
			const error = 'error'

			const marketContract = {
				getAuthenticatedProperties: jest
					.fn()
					.mockImplementation(async () => Promise.reject(error)),
			}

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const caller = createGetAuthenticatedPropertiesCaller(
				marketContract as any
			)

			const result = await caller().catch((err) => err)

			expect(result).toEqual(error)
		})
	})
})
