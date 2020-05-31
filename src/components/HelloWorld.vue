<template>
  <div class="hello">
    <h1>{{ message1 }}</h1>
    <h1>{{ message2() }}</h1>
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 1
    }
  },
  props: {
    msg: String
  },
  computed: {
    message1() {
      let str 
      str += this.message
      return str
    }
  },
  methods: {
    message2() {
      return this.message++ 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
