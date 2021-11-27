<template>
  <div>
    <button @click="fetchProducts" type="button">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: "ButtonSave",
  props: ["products"],
  methods: {
    async fetchProducts() {
      const response = await fetch("http://192.168.1.104:3000/saveProducts", {
        method: "POST",
        body: JSON.stringify(this.products),
        // body: JSON.stringify({test: "test"}),
        headers: {
          "Content-Type": 'application/json'
        }
      });
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to send request.');
      }
    }
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
</style>