import { act, renderHook } from '@testing-library/react-hooks'
import useCounter from '../../hooks/useCounter'


describe('Prubeas en use Counter', () => {
    test('Debe retornar los valores por defecto', () => {


        const { result } = renderHook(() => useCounter())

        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');

    })

    test('Debe retornar el valor indicado', () => {

        const { result } = renderHook(() => useCounter(100))

        expect(result.current.counter).toBe(100);

    })

    test('Probando el incremental con ACT', () => {

        const { result } = renderHook(() => useCounter(10));
        const { increment } = result.current;

        act(() => {

            increment(); //como acá incremento el valor en 1, y el useCounter se inicializó en 10, debería esperar un 11

        });

        const { counter } = result.current; //Es importante extraer el counter DESPUÉS DEL INCREMENT, si no, no se incrementará.
        expect(counter).toBe(11);


    })

    test('Probando decrement con ACT', () => {

        const { result } = renderHook(() => useCounter(10));
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        const { counter } = result.current;
        expect(counter).toBe(9);

    });

    test('Probando reset ', () => {

        const { result } = renderHook(() => useCounter(10));
        const { reset } = result.current;

        act(() => {
            reset();
        })

        const {counter} = result.current;

        expect(counter).toBe(1); //espera 1, porque es el valor por defecto.


    })





})
