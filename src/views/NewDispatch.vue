<template>
  <div class="container">
    <h4>Отгрузка {{ curDate }}</h4>
    <InsertProduct @addProduct="addProduct"/>
    <ListOfProducts :products="this.products"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import InsertProduct from "@/components/products/InsertNewProduct.vue";
import ListOfProducts from "@/components/products/ListOfProducts.vue"; // @ is an alias to /src

export default defineComponent({
  name: "NewProduct",
  components: {
    ListOfProducts,
    InsertProduct,
  },
  emits: ["addProduct"],
  data() {
    return {
      curDate: new Date(),
      products: [] as any[]
    }
  },
  methods: {
    addProduct(product: any) {
      product.date = this.curDate;
      this.products.unshift(product);
    },
  }

});
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  border: 2px solid black;
  flex-flow: column;

  h4 {
    display: flex;

    height: 3rem;
    margin: 0 auto 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
}
</style>