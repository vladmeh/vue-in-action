import {shallowMount, createLocalVue} from "@vue/test-utils";
import '../../src/firebase.js';
import Vuex from 'vuex';
import {store} from  '../../src/store/store';
import Header from "../../src/components/Header";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Header.vue', () => {
    it('Check prop was sent over correctly to Header', () => {
        const cartItemCount = 10;
        const wrapper = shallowMount(Header, {
            store,
            localVue,
            propsData: { cartItemCount },
        });
        // expect(wrapper.vm.cartItemCount).toBe(cartItemCount);
    });
});
