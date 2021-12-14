<template>
  <router-link :to="{name:'DispatchDetails', params: {id : this.dispatch._id}}">
    <div class="div">
      <div class="cell">
        {{ dispatch.date }}
      </div>
      <div class="cell">
        {{ dispatch.sum.sumKg.toFixed(2) }} кг {{ dispatch.sum.sumQ }} кор
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Dispatch",
  props: ['dispatch'],
}
</script>

<style scoped>
.div {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;

}

.del {
  color: red;
}

.cell {
  padding: 0.5rem;
}
</style>