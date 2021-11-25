<template>
  <form @submit.prevent="submitForm">
    <div class="table_inputs">
      <div>
        <label for="date">Информацию о продукте</label>
        <input type="text" id="date" name="inform" v-model.trim="product.inform">
        <p class="valid">{{ validationMessage }}</p>
      </div>
      <div>
        <label for="quantity">Кол-во кор</label>
        <input type="number" name="quantity" id="quantity" v-model="product.quantity">
      </div>
      <div class="counter">
        <h5>Номер поддона {{ getCounter }}</h5>
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
  data() {
    return {

      product: {
        inform: "",
        quantity: null,
        counter: 1
      },
      products: [] as any[],
      validationMessage: ""
    }
  },
  computed: {
    getCounter() {
      return this.product.counter;
    }
  },
  methods: {
    submitForm() {
      if ((this.product.inform.split("").length) != 38) {
        this.validationMessage = "Некорректный ввод информации о товаре";
        return;
      }
      if (this.product.inform && this.product.quantity) {
        const payload = {
          inform: this.product.inform,
          quantity: this.product.quantity,
          counter: this.product.counter
        };
        this.$emit("addProduct", payload);
        this.clearForm();
      } else if (this.product.quantity === null) {
        this.validationMessage = "Введите кол-во коробок"
      }
    },
    clearForm(){
      this.product.inform = "";
      this.product.quantity = null;
      this.product.counter++;
    }
  }

});
</script>
<style lang="scss" scoped>
.table_inputs {
  display: grid;
  width: 100%;
  grid-template-columns: 70% 25%;
  grid-template-rows: 4rem 4rem;
  border: 1px solid blue;
  padding: 1px;
  margin: 0;
  column-gap: 1rem;

  div {
    width: 100%;

    input {
      padding: 0;
      margin: 1rem 0 0 0;
      width: 100%;
      height: 2rem;
    }
  }
}

.counter {

  width: 100%;
  padding: 0;
}

.submit {
  display: flex;
  flex-flow: column;
  justify-content: center;

}

.valid {
  padding-top: 1rem;
}

</style>
