import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(HelloWorld);
    });

    it('should find the component name', () => {
        expect(wrapper.vm.$options.name).toBe('HelloWorld');
    });

    describe('template', () => {
        it('should find the root section element', () => {
            expect(wrapper.find('div').exists()).toBe(true);
        });
    });
});
