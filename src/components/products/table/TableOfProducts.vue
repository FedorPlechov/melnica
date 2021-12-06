<template>
  <div class="table_inputs">
    <TitleOfProducts/>
    <OneProduct v-for="product of products" :key="product.id" :product="product" :isOutput="isOutput"/>
  </div>
  <ButtonSave v-if="products.length > 0" :products="products" :isOutput="isOutput"/>
</template>

<script>
import OneProduct from "@/components/products/table/OneProduct";
import TitleOfProducts from "@/components/products/table/TitleOfProducts";
import ButtonSave from "@/components/products/ButtonSave";

export default {
  name: "TableOfProducts",
  props: {
    products: {
      type: Array,
      require: true
    },
    isOutput: {
      type: Boolean,
      default: false
    }
  },
  components: {ButtonSave, TitleOfProducts, OneProduct},
}
</script>

<style lang="scss" scoped>
.table_inputs {
  display: grid;
  width: 100%;
  grid-template-columns:7% 25% 25% 10% 15% 10% 7%;
  grid-template-rows: 4rem;
  grid-auto-rows: min-content;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1px;
  margin: 0;
  //column-gap: 8px;
}


</style>
