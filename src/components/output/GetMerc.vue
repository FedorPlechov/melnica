<template>
<div>
  <div class="nameSup">Контрагент {{ objSup.supplier }}</div>
  <div class="table_output">
    <div class="title">Дата</div>
    <div class="title">БГ</div>
    <div class="title">кг</div>
    <div class="title">кор</div>
    <div class="title">СГ</div>
    <div class="title">кг</div>
    <div class="title">кор</div>
    <div class="title">Гол</div>
    <div class="title">кг</div>
    <div class="title">кор</div>
    {{getProductsForMerc}}
    <MercOneDate v-for="item of getProductsForMerc" :productsOneDate="item" :key="item.date"/>
  </div>
</div>
</template>

<script>
import MercOneDate from "./MercOneDate.vue";
export default {
  name: "GetMerc",
  props: ['objSup'],
  components: {MercOneDate},
  data(){
    return {
      setDate: new Set,
    }
  },
  computed: {
  getProductsForMerc() {
    const output = [];
    this.objSup.arr.forEach(el => {
      this.setDate.add(el.date)
    });
    for (let date of this.setDate) {
      const products = this.objSup.arr.filter(el => el.date === date);
      const obj = {
        date: date,
        arr: products
      }
      output.push(obj);
    }
    return output;
  }
  }
}
</script>

<style scoped>
.table_output {
  display: grid;
  grid-template-columns: repeat(10,10%);
  grid-template-rows: auto;
  border: 2px solid red;
  padding: 2rem 0;
  /*font-size: 0.8rem;*/
}
</style>