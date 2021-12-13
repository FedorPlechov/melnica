<template>
  <form @submit.prevent="submitForm">
    <div class="table_inputs">
      <div>
        <label class="label_date" for="date">Информацию о продукте</label>
        <input type="text" id="date" name="inform" v-model.trim="product.inform" ref="inform">
        <p class="valid">{{ validationMessage }}</p>
      </div>
      <div>
        <label for="quantity">Кор</label>
        <input class="quantity" type="number" name="quantity" id="quantity" v-model="product.quantity" ref="quantity" >
      </div>
      <div class="counter">
        <label>Номер поддона </label>
        <input id="input_order" type="number" v-model="product.counter">
      </div>
      <div class="submit">
        <h5 class="check_weight" v-show="product.inform">{{ getWeight }} кг</h5>
        <button type="submit" hidden>Записать</button>
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
    getWeight() {
      const int = this.product.inform.split("").slice(20,23).join("");
      const float = this.product.inform.split("").slice(23,25).join("");
      return +`${int}.${float}`;
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
          counter: this.product.counter,
          id: new Date().getUTCMilliseconds()
        };
        this.$emit("addProduct", payload);
        this.clearForm();
      } else if (this.product.quantity === null) {
        this.validationMessage = "Введите кол-во коробок"
        const inputQuantity = this.$refs.quantity as HTMLInputElement;
        inputQuantity.focus();
      }
    },
    clearForm() {
      this.product.inform = "";
      this.product.quantity = null;
      this.product.counter++;
      const informInput = this.$refs.inform as HTMLInputElement;
      informInput.focus();
    }
  }

});
</script>
<style lang="scss" scoped>
.table_inputs {
  display: grid;
  width: 100%;
  grid-template-columns: 80% 3rem;
  grid-template-rows: 4rem 4rem;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
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

      &.quantity {
        width: 2rem;
      }
    }
  }
}

.counter {
  display: flex;
  width: 100%;
  padding: 0;
  align-items: flex-start;
  label {
    padding-top: 0.9rem;
    padding-right: 1rem;
  }
}
#input_order {
  width: 2rem;
  height: 1rem;
  border: none;
}

.submit {
  display: flex;
  flex-flow: column;
  justify-content: center;

}

.valid {
  padding-top: 1rem;
}
.check_weight {
  color: red;
  font-size: 1rem;
}


</style>
