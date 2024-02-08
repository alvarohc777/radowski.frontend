<template>
  <q-page class="column flex row flex-center justify-around">
    <div class="section-container">
      <div class="q-pa-md column flex-center justify-center q-gutter-md">
        <poem-content-card :data="poemData" :key="poemData"></poem-content-card>

        <!-- <div>{{ poemData }}</div> -->
        <div class="q-pa-md column flex-center justify-center q-gutter-md">
          <content-body-card
            :v-if="poemData.body"
            :title="poemData.title"
            :body="body"
          >
          </content-body-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const props = defineProps(['id'])
import { ref, onMounted } from 'vue'

import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

import PoemContentCard from 'src/components/PoemContentCard.vue'
import ContentBodyCard from 'src/components/ContentBodyCard.vue'
const $q = useQuasar()

const poemData = ref([])
const body = ref([])
// const body = computed(() => {
//   return poemData.value.body.split('\n')
// })

onMounted(() => {
  loadData()
})
function loadData () {
  console.log('pops:  ', props.id)
  console.log(`api/book/content/${props.id}`)
  api
    .get(`api/poem/content/${props.id}`)
    .then(response => {
      poemData.value = response.data
      body.value = response.data.body.split('\n')
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
