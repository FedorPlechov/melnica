import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            date: new Date(),
            products: []
        }
    },
    getters: {
        curDate(state: any) {
            return `${state.date.getDate()}.${state.date.getUTCMonth() + 1}.${state.date.getFullYear()}`
        },
        getProducts(state: any) {
            return state.products;
        }
    },
    mutations: {
        addProduct(state, product: any) {
            state.products.unshift(product);
        },
        deleteProduct(state, id: number){
            state.products = state.products.filter((el:any) => id !== el.id)
        }
    },
    actions: {},
    modules: {},
});
