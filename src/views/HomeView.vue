<script setup>
import axios from 'axios'
import {computed, onBeforeMount, ref} from 'vue'
import { useStepForm } from '@/stores/localStore.js'
import {storeToRefs} from "pinia";

const stepStore = useStepForm()
const { step, typeForm } = storeToRefs(stepStore)
const typeInput = computed(() => {
  switch (typeForm.value) {
    case 'int': return 'number'
    case 'string': return 'text'
    case 'email': return 'email'
    case 'phone': return 'tel'
    default: return 'text'
  }
})
const inputValue = ref('')

onBeforeMount(() => {
  sendForm()
})
const sendForm = async function() {
  await axios.post('form', {
    step: step.value,
    value: inputValue.value
  })
    .then(response => {
      inputValue.value = ''
      stepStore.nextStep(response.data.next_step, response.data.type)
    })
    .catch((err) => {
      console.log(err.data)
    })
}
</script>

<template>
  <main>
    <form @submit.prevent="sendForm">
      <label for="form">
        <input id="form" :type="typeInput" required>
      </label>
      <button type="submit" >Отправить</button>
    </form>
  </main>
</template>
