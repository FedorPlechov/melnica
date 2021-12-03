<template>
  <div class="cell">{{ product.counter }}</div>
  <div class="cell">{{ getDate }}</div>
  <div class="cell">{{ getProduct }}</div>
  <div class="cell">{{ getSupplier }}</div>
  <div class="cell">{{ getWeight }}</div>
  <div class="cell">{{ product.quantity }}</div>
  <div class="cell" @click="deleteProduct(product.id)">
    <div class="cross"></div>
  </div>
</template>

<script>
export default {
  name: "OneProduct",
  props: ["product"],
  inject: ['deleteProduct'],
  computed: {
    getWeight() {
      const int = this.slice(20, 23);
      const float = this.slice(23, 25);
      return +`${int}.${float}`;
    },
    getDate() {
      const day = this.slice(32, 34);
      const month = this.slice(30, 32);
      const year = this.slice(28, 30);
      return `${day}.${month}.${year}`;
    },
    getSupplier() {
      return this.slice(36, 38);
    },
    getProduct() {
      const numOfProduct = this.slice(14, 16);
      let productName;
      switch (numOfProduct) {
        case "28" :
          productName = "бг 1.8-2.7";
          break;
        case "22" :
          productName = "бг 1.4-1.8";
          break;
        case "29" :
          productName = "бг 2.7-3.6";
          break;
        case "27" :
          productName = "бг 3.6+";
          break;
        case "36" :
          productName = "сг 1-1.5";
          break;
        case "34" :
          productName = "сг 1.5-2";
          break;
        case "32" :
          productName = "сг 2-3";
          break;
        case "33" :
          productName = "сг 3-4";
          break;
        case "80" :
          productName = "икра";
          break;
        case "60" :
          productName = "головы";
          break;
        default :
          productName = 'нет в списке'
          break;

      }
      return productName;
    }
  },
  methods: {
    slice(start, end) {
      return this.product.inform.split("").slice(start, end).join("");
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  padding: 5px 0 5px 0;
  border-bottom: 2px solid black;
}

.cross {
  position: relative;
  border-bottom: 2px solid red;
  transform: rotateZ(45deg) translateY(2px) translateX(8px);
}

.cross:before {
  display: block;
  content: "";
  position: relative;
  border-bottom: 2px solid red;
  transform: rotateZ(90deg) translateY(0) translateX(3px);
}
</style>