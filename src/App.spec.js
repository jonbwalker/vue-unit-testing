import { shallowMount } from '@vue/test-utils';
import App from './App';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    it('should find the component name', () => {
        expect(wrapper.vm.$options.name).toBe('App');
    });

    describe('template', () => {
        it('should find the root section element', () => {
            expect(wrapper.find('div').exists()).toBe(true);
        });
    });
});
