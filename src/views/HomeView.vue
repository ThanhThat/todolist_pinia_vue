<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-6 offset-md-3">
        <form @submit.prevent="addTodo">
          <h1 class="text-center mt-4">Todo List</h1>
          <div class="mb-3">
            <label for="todo-input" class="form-label">Todo Item</label>
            <input
              type="text"
              v-model="todoContent"
              class="form-control"
              id="todo-input"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Add</button>
        </form>

        <div class="list-group mt-5" v-if="todoList">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="todo in todoList"
            :key="todo.id"
          >
            <span>{{ todo.content }}</span
            ><button class="btn btn-danger" @click="deleteTodo(todo.id)">x</button>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useTodoStore from '../stores/todoStore'
import { mapState, mapStores } from 'pinia'

export default {
  data() {
    return {
      todoContent: ''
    }
  },
  computed: {
    ...mapState(useTodoStore, ['todoList']),
    ...mapStores(useTodoStore)
  },
  created() {
    this.todoStore.getTodo()
    console.log(this.todoList)
  },
  methods: {
    addTodo() {
      const todoItem = {
        id: Date.now().toString(),
        content: this.todoContent
      }

      this.todoStore.addTodo(todoItem)
      this.todoStore.saveTodoList()

      this.todoContent = ''
    },
    deleteTodo(todoId) {
      this.todoStore.deleteTodo(todoId)
      this.todoStore.saveTodoList()
    }
  }
}
</script>

<style lang="scss" scoped></style>
