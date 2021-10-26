import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    test('Debe regresar un formulario por defecto', () => {

        const initialState = {
            name: 'Paulo',
            email: 'paulovmnzzi@gmail.com'
        };

        const { result } = renderHook(() => useForm(initialState));
        const [values] = result.current;

        expect(values).toEqual(initialState);
    });
    
    test('Debe cambiar el valor de formulario', () => {
        
        const initialState = {
            name: 'Paulo',
            email: 'paulovmnzzi@gmail.com'
        };

        const { result } = renderHook(() => useForm(initialState));
        const [ , handleInputChange] = result.current;

        act( () => {
            handleInputChange({target: {
                name: 'name',
                value: 'Fernando'
            }});
        })

        const [values] = result.current;

        expect(values).toEqual({...initialState, name: 'Fernando'})

    })
    


})
