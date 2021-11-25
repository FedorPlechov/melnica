<template>
  <form >
    <div class="table_inputs">
      <div>
        <label for="date">Дата</label>
        <input type="date" id="date" name="date">
      </div>
      <div>
        <label for="product">Продукт</label>
        <input type="text" id="product" name="product" autocomplete="product">
      </div>
      <div>
        <label for="supplier">Пост</label>
        <input type="number" id="supplier" name="supplier" autocomplete="supplier">
      </div>
      <div>
        <label for="weight">Вес</label>
        <input type="number" name="weight" id="weight">
      </div>
      <div>
        <label for="quantity">Кор</label>
        <input type="number" name="quantity" id="quantity">
      </div>
      <div class="counter">
        <h5>Номер поддона  {{ getCounter }}</h5>
      </div>
      <div class="submit">
        <button type="submit">Записать</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "table",
  props: {
    msg: String,
  },
  data(){
    return {
      counter:1
    }
  },
  computed: {
    getCounter(){
      return this.counter;
    }
  },
  methods: {}

});
</script>
<style lang="scss">
.table_inputs {
  display: grid;
  width: 100%;
  grid-template-columns: 27% 30% 10% 15% 10%;
  grid-template-rows: 4rem 4rem;
  border: 1px solid blue;
  padding: 1px;
  margin: 0;
  column-gap: 8px;

  div {
    width: 100%;

    input {
      padding: 0;
      margin: 0;
      width: 100%;
    }
  }
}
.counter {
  grid-column-start: 2;
  grid-column-end: 3;
  width: 100%;
  padding: 0;
}
.submit {
  display: flex;
  flex-flow: column;
  justify-content: center;
  grid-column-start: 3;
  grid-column-end: 5;
}

</style>
