import { shallow } from "enzyme"
import { demoToDo } from '../../fixtures/demoToDo'
import TodoItem from '../../../components/08-useReducer/components/TodoItem'

describe('Pruebas en todoListItem', () => {

    const handleDelete = jest.fn();
    const handleToogle = jest.fn();

    const wrapper = shallow(<TodoItem
        todo={demoToDo[0]}
        i={0}
        handleDelete={handleDelete}
        handleToogle={handleToogle}
    />)

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })
    test('Se debe llamar el handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1);

    })
    test('Se debe llamar a la handleToogle', () => {

        wrapper.find('p').simulate('click');
        expect(handleToogle).toHaveBeenCalledWith(1);

    })
    test('Que el texto coincida', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoToDo[0].desc}`)

    })
    test('Debe tener la clase COMPLETE si el done está es true', () => {
        
        const todo = demoToDo[0];
        todo.done = true;

        const wrap = shallow(<TodoItem  todo={todo} />)
        expect(wrap.find('p').hasClass('complete')).toBeTruthy();

    })
    






})
