import { useReducer } from "react";
import todoReducer from "../../../components/08-useReducer/todoReducer"

import {demoToDo} from '../../fixtures/demoToDo'

describe('Pruebas en todoReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        
        const state = todoReducer(demoToDo, {});
        
        expect(state).toEqual(demoToDo);

    })

    test('Agregar un toDo', () => {
        
        
        const action = {
            type: 'add',
            payload: {
                id: 3,
                descp: 'Lo toi asiendo',
                done: false
            }
        }
        const state = todoReducer(demoToDo, action);
        

        expect(state.length).toBe(3)

    })

    test('Debe de borrar un toDo', () => {
        const action = {
            type: 'delete',
            payload: 1
        }
        const state = todoReducer(demoToDo, action);

        expect(state.length).toBe(1);
    })

    test('Debe cambiar el valor del toDo (toogle)', () => {
        const action = {
            type: 'toogle',
            payload: 1
        }

        const state = todoReducer(demoToDo, action);

        expect(state[0].done).toBeTruthy();


    })
    
    
    
    

})
