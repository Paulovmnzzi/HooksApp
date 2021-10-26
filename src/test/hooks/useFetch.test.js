import useFetch from "../../hooks/useFetch"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en useFetch', () => {

    test('Debe retornar los valores por defecto', () => {
        
        const { result } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"))

        const { data,loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });
    
    
    test('Debe tener la info desiada', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"))

        await waitForNextUpdate({timeout:5000});
        
        const { data,loading, error } = result.current;

        expect(data).toBeTruthy();
        expect(loading).toBe(false);
        expect(error).toBe(null);
    })

    test('Debe retornar error', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetch("https://reqres.in/apisdsx/users?page=2"))

        await waitForNextUpdate({timeout:5000});

        const { data,loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBeTruthy();

    })
    
    


})
