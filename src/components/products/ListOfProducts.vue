<template>
  <div class="table_inputs">
    <div>
      <h5>№</h5>
    </div>
    <div>
      <h5>Дата</h5>
    </div>
    <div>
      <h5>Продукт</h5>
    </div>
    <div>
      <h5>Пост</h5>
    </div>
    <div>
      <h5>Вес</h5>
    </div>
    <div>
      <h5>Кор</h5>
    </div>
    <OneProduct v-for="product of products" :key="product.counter" :product="product"/>
  </div>
</template>

<script>
import OneProduct from "@/components/products/OneProduct";
export default {
  name: "ListOfProducts",
  props: ["products"],
  components: {OneProduct}
}
</script>

<style lang="scss" scoped>
.table_inputs {
  display: grid;
  width: 100%;
  grid-template-columns:7% 25% 25% 10% 15% 10%;
  grid-template-rows: 4rem 4rem;
  border: 1px solid blue;
  padding: 1px;
  margin: 0;
  column-gap: 8px;

  div {
    width: 100%;

    input {
      padding: 0;
      margin: 0;
      width: 100%;
    }
  }
}
.counter {
  grid-column-start: 2;
  grid-column-end: 3;
  width: 100%;
  padding: 0;
}
.submit {
  display: flex;
  flex-flow: column;
  justify-content: center;
  grid-column-start: 3;
  grid-column-end: 5;
}

</style>
