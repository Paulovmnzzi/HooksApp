import { act } from "@testing-library/react"
import { shallow } from "enzyme"
import RealExampleRef from "../../../components/04-useRef/RealExampleRef"

describe('Pruebas en RealExampleRef', () => {
    
    test('Debe mostrarse correctamente', () => {
        //snapshot
        const wrapper = shallow(<RealExampleRef />)
        expect(wrapper).toMatchSnapshot();


    })

    test('Debe mostrar el componente MultipleCustomHook', () => {
        //
        const wrapper = shallow(<RealExampleRef />)

        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
    })
    
    

})
