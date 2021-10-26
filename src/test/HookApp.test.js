const { shallow } = require("enzyme")
import HooksApp from '../HooksApp'

describe('Hook app', () => {
    test('Hook app Snapshot', () => {
        
        const wrapper = shallow(<HooksApp />)
        expect(wrapper).toMatchSnapshot();
        


    })
    

})
