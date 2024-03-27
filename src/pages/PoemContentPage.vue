<template>
  <q-page class="column flex row flex-center justify-around">
    <div class="section-container">
      <div class="q-pa-md column flex-center justify-center q-gutter-md">
        <poem-content-card :data="poemData" :key="poemData"></poem-content-card>

        <!-- <div>{{ poemData }}</div> -->
        <!-- <div class="q-pa-md column flex-center justify-center q-gutter-md">
          <content-body-card
            :v-if="poemData.body"
            :title="poemData.title"
            :body="body"
            :dedication="dedication"
          >
          </content-body-card>
        </div> -->
      </div>
    </div>
    <div class="section-container">
      <div class="q-pa-md column flex-center justify-center q-gutter-md">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <content-body-card
              :v-if="poemData.body"
              :title="poemData.title"
              :body="body"
              :dedication="dedication"
            >
            </content-body-card>

            <q-img
              class="col-5"
              :src="coverUrl"
              :key="coverUrl"
              placeholder-src="~assets/placeholder.png"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs{}">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ poemData.title }}</div>
          <content-body-card
            :v-if="poemData.body"
            :title="poemData.title"
            :body="body"
            :dedication="dedication"
          >
          </content-body-card>
        </q-card-section>

        <q-card-section class="col-4 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat> 7:30PM </q-btn>
        <q-btn flat color="primary"> Reserve </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
const props = defineProps(['id'])
import { ref } from 'vue'

import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

import PoemContentCard from 'src/components/PoemContentCard.vue'
import ContentBodyCard from 'src/components/ContentBodyCard.vue'
const $q = useQuasar()

const poemData = ref([])
const body = ref([])
const dedication = ref('')
const token =
  '?sv=2022-11-02&ss=bfqt&srt=sco&sp=r&se=2024-12-31T12:27:34Z&st=2024-02-12T04:27:34Z&spr=https&sig=fOf%2Fsnurp420W8P%2BPxPcbIR56eLCGJ8pu4OjXiWj8cY%3D'

const coverUrl = ref('')

const createDedication = (dedication, languageId) => {
  if (languageId === 1) {
    return `para ${dedication}`
  }
  if (languageId === 2) {
    return `for ${dedication}`
  }
}

loadData()
function loadData () {
  console.log('pops:  ', props.id)
  console.log(`api/book/content/${props.id}`)
  api
    .get(`api/poem/content/${props.id}`)
    .then(response => {
      poemData.value = response.data
      body.value = response.data.body.split('\n')
      if (poemData.value.dedication) {
        dedication.value = createDedication(
          poemData.value.dedication,
          poemData.value.language_id
        )
      }
      coverUrl.value = poemData.value.cover_url + token
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
