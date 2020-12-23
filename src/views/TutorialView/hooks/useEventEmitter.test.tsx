import { renderHook, act } from '@testing-library/react-hooks'
import { EventProvider, useEventEmitter } from './useEventEmitter'

describe('useEventEmitter tests', () => {

    const render = () => {
        const wrapper = ({ children }: any) => <EventProvider>{children}</EventProvider>
        const { result } = renderHook(() => useEventEmitter(), { wrapper })
        return {
            result
        }
    }

    test('onCollateralDeployed', () => {
        const { result } = render()

        const callback = jest.fn()

        act(() => {
            result.current.subscribe('onCollateralDeployed', callback)
            result.current.emit('onCollateralDeployed', {})
        })

        expect(callback).toHaveBeenCalled()
        expect(callback).toHaveBeenCalledTimes(1)
    })

    test.skip('onPriceIdentifierDeployed', () => {
    })
})