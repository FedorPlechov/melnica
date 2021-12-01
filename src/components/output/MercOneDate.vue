<template>
  <div class="title">{{ getDate }}</div>
  <div class="title">БГ</div>
  <div class="title">кг</div>
  <div class="title">кор</div>
  <div class="title">СГ</div>
  <div class="title">кг</div>
  <div class="title">кор</div>
  <div class="title">Гол</div>
  <div class="title">кг</div>
  <div class="title">кор</div>
</template>

<script>
export default {
  name: "MercOneDate",
  props: ['productsOneDate'],
  computed: {
    getDate(){
      return this.productsOneDate[0].date;
    },
  }
}
</script>

<style scoped>

</style>