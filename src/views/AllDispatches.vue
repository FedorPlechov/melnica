<template>
  <h1>Все отгрузки</h1>
  <div class="container">
    <Dispatch v-for="dispatch of dispatches" :key="dispatch._id" :dispatch="dispatch"/>
  </div>
</template>

<script>
import Dispatch from "@/components/dispatches/Dispatch";

export default {
  name: "Dispatches",
  components: {Dispatch},
  data() {
    return {
      dispatches: []
    }
  },
  methods: {
    async getData() {
      const response = await fetch('http://192.168.1.104:3000/allDispatches', {
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to send request.');
      }
      this.dispatches = responseData;
    }
  },
  created() {
    this.getData();
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
}

</style>