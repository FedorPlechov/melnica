<template>
  <div class="title">
    <h5>№</h5>
  </div>
  <div class="title">
    <h5>Дата</h5>
  </div>
  <div class="title">
    <h5>Продукт</h5>
  </div>
  <div class="title">
    <h5>Пост</h5>
  </div>
  <div class="title">
    <h5>Вес</h5>
  </div>
  <div class="title">
    <h5>Кор</h5>
  </div>
  <div class="title">
    <h5 style="color:red">del</h5>
  </div>
</template>

<script>
export default {
  name: "TitleOfProducts"
}
</script>

<style scoped>
div.title {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  color:#42b983;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
}
div.title:first-of-type {
  border-left:none;
}
</style>