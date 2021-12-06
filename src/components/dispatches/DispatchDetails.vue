<template>
  <table-of-products v-if="dispatch.length !== 0" :products="dispatch.products" :is-output="true"/>
</template>

<script>
import TableOfProducts from "@/components/products/table/TableOfProducts";
export default {
  name: "DispatchDetails",
  components: {TableOfProducts},
  props: ['id'],
  data(){
    return {
      dispatch:[]
    }
  },
  methods: {
   async fetchProductsById(id){
     const response =  await fetch("http://192.168.1.104:3000/getDispatchById", {
       method: "POST",
       body: JSON.stringify({id: id}),
       headers: {
         "Content-Type": "application/json"
       }
     });
     const responseData = await response.json();
     if (!response.ok) {
       throw new Error(responseData.message || 'Failed to send request.');
     }
     this.dispatch = responseData;
   }
  },
  beforeMount() {
    this.fetchProductsById(this.id);
  }


}
</script>

<style scoped>

</style>