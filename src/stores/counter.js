import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },

  getters: {
    doubleCount: (state) => {
      return state.count * 2
    },
    doublePlusOne() {
      return this.doubleCount + 1
    }
  },
  mutations: {},
  actions: {
    increment(value = 1) {
      this.count += value
    }
  }
})

export default useCounterStore
