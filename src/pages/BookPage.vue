<template>
  <q-page class="column flex flex-center justify-around">
    <div class="section-container">
      <div class="q-pa-md row justify-center q-gutter-md">
        <div>
          <book-card :data="bookData" :key="bookData"></book-card>
        </div>
        <div>
          <poems-list-card
            :data="contentList"
            :key="contentList"
          ></poems-list-card>
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

import BookCard from 'src/components/BookCard.vue'
import PoemsListCard from 'src/components/PoemsListCard.vue'

const $q = useQuasar()

// const contentList = ref(null)
const bookData = ref([])
const contentList = ref([])

const listContentId = (content, id) => {
  const contentDict = []
  for (let i = 0; i < content.length; i++) {
    contentDict.push({
      poem: content[i],
      id: id[i]
    })
  }
  return contentDict
}

onMounted(() => {
  loadData()
})
function loadData () {
  console.log('pops:  ', props.id)
  console.log(`api/book/${props.id}`)
  api
    .get(`api/book/${props.id}`)
    .then(response => {
      contentList.value = listContentId(
        response.data.content_list,
        response.data.content_id
      )
      bookData.value = response.data
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
