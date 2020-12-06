import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {  
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(HelloWorld, {
            propsData: { msg: '' }
        });
    });

    describe('template', () => {
        it('should not find h1 tag', () => {
            expect(wrapper.find('h1').exists()).toBe(false)
        });
    
        it('should find h1 tag', async () => {
            wrapper.setProps({msg: 'test'})
            await wrapper.vm.$nextTick()
            expect(wrapper.find('h1').text()).toBe('test')
        }); 
    });

    describe('sumArray()', () => {
        it('should sum all of the elements of the array', async () => {
            wrapper.setProps({array: [5,5]})
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.sumArray).toBe(10)
        });
    });
});