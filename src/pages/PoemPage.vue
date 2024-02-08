<template>
  <q-page class="column flex row flex-center justify-around">
    <div class="section-container">
      <div class="q-pa-md column flex-center justify-center q-gutter-md">
        <div>
          <poem-card :data="poemData" :key="poemData"></poem-card>
        </div>

        <div v-for="content in poemData.content_list" :key="content">
          <router-link
            :to="{ name: 'poemContentId', params: { id: content.id } }"
            style="text-decoration: none; color: inherit"
          >
            {{ content.title }}
          </router-link>
        </div>
        <div>{{ poemData }}</div>
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
