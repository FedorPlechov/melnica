<template>
  <div class="title">{{ getDate }}</div>
  <div class="title">{{getKgAndQ.bgKg.toFixed(2)}}</div>
  <div class="title">{{getKgAndQ.bgQ.toFixed(0)}}</div>
  <div class="title">{{getKgAndQ.cgKg.toFixed(2)}}</div>
  <div class="title">{{getKgAndQ.cgQ.toFixed(0)}}</div>
  <div class="title">{{getKgAndQ.golKg.toFixed(2)}}</div>
  <div class="title">{{getKgAndQ.golQ}}</div>
</template>

<script>
export default {
  name: "MercOneDate",
  props: ['productOneDate'],
  computed: {
    getDate(){
      return this.productOneDate.date;
    },
    getKgAndQ(){
      const obj = {
        bgKg:0,
        bgQ:0,
        cgKg:0,
        cgQ:0,
        golKg:0,
        golQ:0
      };
      this.productOneDate.arr.forEach(el => {
        let str  = el.name.split('');
        str = str[0] + str[1];
        if (str === 'бг') {
          obj.bgKg+= el.weight;
          obj.bgQ+= el.quantity;
        }
        if (str === 'сг') {
          obj.cgKg+= el.weight;
          obj.cgQ+= el.quantity;
        }
        if (str === 'го') {
          obj.golKg+= el.weight;
          obj.golQ+= el.quantity;
        }
      });
      return obj;
    }
  }
}
</script>

<style scoped>
</style>