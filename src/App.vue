<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoList></TodoList>
    <br>
    <TodoItem :toto_items.sync="item_for_todo"></TodoItem>
    <div>app.vue:{{item_for_todo}}</div>
    <input type="text" v-model="item_for_todo"> -->
    <myButton @click="clickMe">click me</myButton>
    <varData :name='name'></varData>
    <div
      :var1="name"
    >
      {{var1}}
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList.vue'
// import TodoItem from './components/TodoItem.vue'
import myButton from './render/myButton'
import varData from './render/varData'
export default {
  name: 'App',
  components: {
    myButton,
    varData,
    // HelloWorld,
    // TodoList,
    // TodoItem
  },
  data() {
    return {
      name: 5,
      item_for_todo: 'item_for_todo'
    }
  },
  methods: {
    clickMe() {
      console.log('clickMe')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
