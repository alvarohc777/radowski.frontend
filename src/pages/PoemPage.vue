<template>
  <q-page class="row flex flex-start justify-center">
    <div class="section-container">
      <div class="q-pa-xl column flex-center justify-center">
        <poem-card :data="poemData" :key="poemData"></poem-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const props = defineProps(['id'])
import { ref, onMounted } from 'vue'

import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

import PoemCard from 'src/components/PoemCard.vue'

const $q = useQuasar()

const poemData = ref([])

onMounted(() => {
  loadData()
})
function loadData () {
  console.log('pops:  ', props.id)
  console.log(`api/book/${props.id}`)
  api
    .get(`api/poem/${props.id}`)
    .then(response => {
      poemData.value = response.data
      console.log('poemData', poemData.value)
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'report_problem'
      })
    })
}
</script>

<style>
.section-container {
  width: 60%;
  min-width: 350px;
  margin-bottom: 40px;
}
</style>
