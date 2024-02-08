<template>
  <q-page class="column flex row flex-center justify-around">
    <div class="section-container">
      <div class="q-pa-md row flex-center justify-center q-gutter-md">
        <div>
          <poem-content-card
            :data="poemData"
            :key="poemData"
          ></poem-content-card>
        </div>
        <div class="text-body1">
          Body 1. Lorem ipsum dolor sit amet\n, consectetur adipisicing elit.
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </div>
        <div>{{ poemData }}</div>
        <content-body-card> </content-body-card>
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
