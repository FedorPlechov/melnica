<template>
  <div class="container">
    <div class="nameSup">Контрагент {{ getSup }}</div>
    <div class="table_output">
      <div class="title">Дата</div>
      <div class="title">БГ</div>
      <div class="title">кор</div>
      <div class="title">СГ</div>
      <div class="title">кор</div>
      <div class="title">Гол</div>
      <div class="title">кор</div>
      <MercOneDate v-for="item of getProductsForMerc" :productOneDate="item" :key="item.date"/>
    </div>
  </div>
</template>

<script>
import MercOneDate from "./MercOneDate.vue";

export default {
  name: "GetMerc",
  props: ['objSup'],
  components: {MercOneDate},
  data() {
    return {
      setDate: new Set,
    }
  },
  computed: {
    getSup(){
      return this.switchSupplier(this.objSup.supplier);
    },
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
  },
  methods: {
    switchSupplier(sup) {
      let supplier;
      switch (sup) {
        case 1 :
          supplier = '(1)Парола';
          break;
        case 2 :
          supplier = '(2)Помор';
          break;
        case 3 :
          supplier = '(3)Форель Ладоги';
          break;
        case 8 :
          supplier = '(8)ТерраСевер';
          break;
        case 6 :
          supplier = '(6)КалаЯ';
          break;
        case 7 :
          supplier = '(7)Мельница';
          break;
        case 9 :
          supplier = '(9)Тикша';
          break;
        case 10 :
          supplier = '(10)Юра Весна Москва';
          break;
        default :
          supplier = '(none)Мельница';
          break;
      }
      return supplier;
    }
  }
}
</script>

<style scoped>
.table_output {
  display: grid;
  grid-template-columns: 20% repeat(3, 17% 10%);
  grid-template-rows: auto;
  border: 2px solid red;
  padding: 2rem 0;
  font-size: 0.8rem;
}
.nameSup{
  padding: 1rem;
}
.container {
  margin-bottom: 1rem;
}
</style>