import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: '',
    counter:1,
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    },
    get_name(state){
      return state.name;
    }
  },

  actions: {
    increment () {
      this.counter++
    },
    set_name(name){
      this.name = name;
    }
  }
})
