<template>
  <q-page class="column flex flex-center justify-center">
    <!-- <div class="section-container">
      <div class="q-pa-md row justify-center q-gutter-md">
        <book-card-link :data="bookData" :key="bookData"></book-card-link>
      </div>
    </div>
    <div class="section-container">
      <div class="q-pa-md row justify-center q-gutter-md">
        <poems-list-card
          :data="contentList"
          :key="contentList"
        ></poems-list-card>
      </div>
    </div> -->
    <div class="section-container">
      <div class="q-pa-md column flex-center justify-center q-gutter-md">
        <q-card class="my-card" flat bordered>
          <q-card-section vertical>
            <book-card-link :data="bookData" :key="bookData"></book-card-link>
            <poems-list-card
              :data="contentList"
              :key="contentList"
            ></poems-list-card>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const props = defineProps(['id'])
import { ref, onMounted } from 'vue'

import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

import BookCardLink from 'src/components/BookCardLink.vue'
import PoemsListCard from 'src/components/PoemsListCard.vue'

const $q = useQuasar()

// const contentList = ref(null)
const bookData = ref([])
const contentList = ref([])

onMounted(() => {
  loadData()
})
function loadData () {
  console.log('pops:  ', props.id)
  console.log(`api/book/${props.id}`)
  api
    .get(`api/book/${props.id}`)
    .then(response => {
      bookData.value = response.data
      contentList.value = response.data.content
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

<style scoped>
.section-container {
  width: 60%;
  min-width: 350px;
  margin: 40px 0 40px 0;
}
.my-card {
  width: 100%;
  max-width: 350px;
  margin: 0;
}
</style>
