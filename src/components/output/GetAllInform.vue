<template>
  <div class="cell">{{el.nameProd}}</div>
  <div class="cell">{{el.sumKg.toFixed(2)}}</div>
  <div class="cell">{{el.sumQuantity}}</div>
</template>

<script>
export default {
  name: "getAllInform",
  props: ['el']
}
</script>

<style scoped>

</style>