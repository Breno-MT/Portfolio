// Utilities
import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    valueShowMoreAboutMe: false,
  }),

  getters: {
    showMoreAboutMe(state) {
      return state.valueShowMoreAboutMe;
    }
  }
})

export default useAppStore