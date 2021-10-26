const { shallow } = require("enzyme")
import MultipleCustomHooks from '../../../components/03-Examples/MultipleCustomHooks'
import useCounter from '../../../hooks/useCounter';
import useFetch from '../../../hooks/useFetch'
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en MutipleCustomHooks', () => {
    
    beforeEach(() => {

        useCounter.mockReturnValue({
            counter: 10
        })
    })

    test('Debe mostrarse correctamente', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Paulo',
                quote: 'A la gilada ni cabida'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('A la gilada ni cabida')
        expect(wrapper.find('footer').text().trim()).toBe('Paulo')


        console.log(wrapper.html());
    })
    

})
