import { defineStore } from 'pinia'

const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todoList: []
    }
  },
  getters: {
    todoDetail: (state) => state.todoList
  },
  actions: {
    addTodo(todoItem) {
      this.todoList.push(todoItem)
    },
    deleteTodo(todoId) {
      this.todoList = this.todoList.filter((todo) => todo.id != todoId)
    },
    saveTodoList() {
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    getTodo() {
      this.todoList = JSON.parse(localStorage.getItem('todoList'))
    }
  }
})

export default useTodoStore
