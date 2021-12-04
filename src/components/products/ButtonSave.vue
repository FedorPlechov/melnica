<template>
  <div>
    <button v-if="!isSave" @click="fetchProducts" type="button">Сохранить</button>
  </div>
  <div>
    <h5>Всего наименований{{ setNames }}</h5>
    <h5>Всего поставщиков{{ setSup }}</h5>
    <h5>Всего {{ sum.sumKg.toFixed(2) }} кг и кор {{ sum.sumQ.toFixed(0) }}</h5>
  </div>
  <h3>Все Контрагенты</h3>
  <div class="table_output">
    <div class="title">Продукция</div>
    <div class="title">кг</div>
    <div class="title">коробки</div>
    <get-all-inform v-for="el of stat" :key="el.name" :el="el"/>
  </div>
  <get-merc v-for="item of getSupArrays" :key="item.val" :objSup="item" />
</template>

<script>
import GetAllInform from "@/components/output/GetAllInform";
import GetMerc from "@/components/output/GetMerc";

export default {
  name: "ButtonSave",
  components: {GetMerc, GetAllInform},
  props: ["products"],
  data() {
    return {
      setNames: new Set,
      setSup: new Set,
      sum: {
        sumKg: 0,
        sumQ: 0
      },
      isSave: false,
    }
  },
  watch: {
    $props: {
      handler() {
        this.sum.sumKg = 0;
        this.sum.sumQ = 0;
        this.isSave = 0;
        this.suppliers = [];
        this.changeProducts();
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    stat(){
      return this.getAllStat(this.products);
    },

    getSupArrays() {
      const output = [];
      for (let val of this.setSup) {
        const obj = {};
        obj.arr = this.products.filter(el => el.supplier === val);
        obj.supplier = val;
        output.push(obj);
      }
      return output;
    }
  },
  methods: {
    async fetchProducts() {
      const response = await fetch("http://192.168.1.104:3000/saveProducts", {
        method: "POST",
        body: JSON.stringify({
          products: this.products,
          date: new Date(),
          sum: this.sum,
          }),
        headers: {
          "Content-Type": 'application/json'
        }
      });
      const responseData = await response;

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to send request.');
      }
      if (responseData.status === 200) {
        this.isSave= true;
      }
    },

    slice(start, end, el) {
      return el.inform.split("").slice(start, end).join("");
    },
    getDate(el) {
      const day = this.slice(32, 34, el);
      const month = this.slice(30, 32, el);
      const year = this.slice(28, 30, el);
      return `${day}.${month}.${year}`;
    },
    getWeight(el) {
      const int = this.slice(20, 23, el);
      const float = this.slice(23, 25, el);
      return +`${int}.${float}`;
    },
    getSupplier(el) {
      return this.slice(36, 38, el);
    },
    getProduct(el) {
      const numOfProduct = this.slice(14, 16, el);
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
        case "60" :
          productName = "головы";
          break;
        case "80" :
          productName = "икра";
          break;
        default :
          productName = "Нет в списке";
      }
      return productName;
    },
    changeProducts() {
      this.products.map(el => {
        el.date = this.getDate(el);
        el.weight = +this.getWeight(el);
        el.supplier = +this.getSupplier(el);
        el.name = this.getProduct(el);
        this.setSup.add(el.supplier);
        this.setNames.add(el.name)
        this.sum.sumKg += el.weight;
        this.sum.sumQ += el.quantity;
      })
      return this.products;
    },
    getAllStat(arr){
      const output = [];
      for (let val of this.setNames) {
        const sortProducts = arr.filter(el => el.name === val);
        let obj = {
          nameProd: val,
          sumKg:0,
          sumQuantity : 0
        };
        sortProducts.forEach(el => {
          obj.sumKg += el.weight;
          obj.sumQuantity += el.quantity;
        });
        output.push(obj);
      }
      return output;
    },
  },
  created(){
    this.sum.sumKg = this.products[0].weight;
    this.sum.sumQ= this.products[0].quantity;
  }
}
</script>

<style scoped lang="scss">
button {
  background: rgba(0, 0, 0, 0);
  border-radius: 10px;
  border: 2px solid #42b983;
  margin-top: 2rem;
  font-size: 1.2rem;

  &:hover {
    background: #42b983;
    color: whitesmoke;
  }
}

.table_output {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: auto;
  border: 2px solid red;
  padding: 2rem 0;

}


</style>