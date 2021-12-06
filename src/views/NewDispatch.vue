<template>
  <h4>Отгрузка {{ curDate }}</h4>
  <div class="container">
    <InsertProduct @addProduct="addProduct"/>
    <TableOfProducts :products="this.products"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import InsertProduct from "@/components/products/InsertNewProduct.vue";
import TableOfProducts from "@/components/products/table/TableOfProducts.vue";

export default defineComponent({
  name: "NewProduct",
  components: {
    TableOfProducts,
    InsertProduct,
  },
  emits: ["addProduct"],
  provide(){
    return {
      deleteProduct: (id:number) => {
        this.products = this.products.filter((el) => id !== el.id)
      }
    }
  },
  data() {
    return {
      date: new Date(),
      products: [] as any[],
    }
  },
  computed:{
    curDate(){
      return `${this.date.getDate()}.${this.date.getUTCMonth()+1}.${this.date.getFullYear()}`
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
}
h4 {
  display: flex;

  height: 3rem;
  margin: 0 auto 0 auto;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>