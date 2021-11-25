<template>
  <div class="cell">{{product.counter}}</div>
  <div class="cell">1111</div>
  <div class="cell">1111</div>
  <div class="cell">1111</div>
  <div class="cell">1111</div>
  <div class="cell">{{ product.quantity}}</div>
</template>

<script>
export default {
  name: "OneProduct",
  props: ["product"]
}
</script>

<style scoped>

</style>