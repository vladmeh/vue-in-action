import axios from 'axios';

const state = {
    products: {},
};

const getters = {
    products: state => state.products,
};

const actions = {
    initStore: ({commit}) => {
        axios.get('../data/products.json')
            .then((response) => {
                commit('SET_STORE', response.data.products);
            });
    }
};

const mutations = {
    'SET_STORE'(state, products) {
        state.products = products;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
