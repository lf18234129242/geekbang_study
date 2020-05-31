<template>
  <div>
    <input type="number" v-model="toto_items">
    <!-- <div>{{toto_items}}</div> -->
    <button @click="$emit('update:toto_items', '10000000')">sync</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item_value: 'item_value'
      }
    },
    props: {
      toto_items: {
        type: String,
        default() {
          return ''
        }
      },
    },
    methods: {
      handleChangeProp() {
        this.toto_items = 'handleChangeProp'
      }
    },
  }
</script>

<style scoped>

</style>