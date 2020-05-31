<template>
  <div>
    <input type="text" v-model.trim="list_value">
    <div>{{list_value}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list_value: 'value'
      }
    },
  }
</script>

<style scoped>

</style>