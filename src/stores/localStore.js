import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStepForm = defineStore('step-form', {
  state: () => {
    return {
      step: 0,
      typeForm: 'text'
    }
  },
  actions: {
    nextStep(step, type) {
      this.$state.step = step
      this.$state.typeForm = type
    }
  },
  persist: true
})
