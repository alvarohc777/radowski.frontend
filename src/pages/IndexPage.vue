<template>
  <q-page class="column flex row flex-center justify-around">
    <div class="section-container">
      <div class="q-pa-md row justify-center q-gutter-md">
        <div v-for="entry in data" :key="entry">
          <poem-card :data="entry"></poem-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

import PoemCard from 'src/components/PoemCard.vue'

const $q = useQuasar()
const data = ref(null)

onMounted(() => {
  loadData()
})
function loadData () {
  api
    .get('api/poem/')
    .then(response => {
      data.value = response.data
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
