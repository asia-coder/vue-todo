<template>
  <div id="app">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
  import { Todos, AddTodo } from './components'

  export default {
    name: 'app',
    components: {
      Todos,
      AddTodo
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 20px;
}
</style>
