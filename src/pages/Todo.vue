<template>
  <div>
      <todo-form></todo-form>
      <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'

export default {
  components: { TodoList, TodoForm }
}
</script>

<style scoped>

</style>
