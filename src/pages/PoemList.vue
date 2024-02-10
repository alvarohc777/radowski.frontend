<template>
  <q-page class="column flex row flex-center justify-around">
    <div class="flex row flex-center justify-around">
      <div style="min-width: 150px">
        <q-select
          borderless
          v-model="selectedBook"
          :options="bookOptions"
          label="Books"
        />
      </div>
      <q-space />

      <q-input
        dense
        v-model="title"
        input-class="text-right"
        class="q-ml-md"
        color="grey-3"
      >
        <template v-slot:append>
          <q-icon v-if="title === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="title = ''"
          />
        </template>
      </q-input>
    </div>
    <div class="section-container">
      <q-scroll-area style="height: 80vh; max-width: 100%">
        <div class="q-pa-md row justify-center q-gutter-md">
          <div v-for="entry in poemList" :key="entry">
            <poem-card :data="entry"></poem-card>
          </div>
        </div>
      </q-scroll-area>
      <q-inner-loading :showing="visible">
        <q-spinner-grid size="100px" color="primary" />
      </q-inner-loading>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue'

import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import PoemCard from 'src/components/PoemCard.vue'

const $q = useQuasar()

const data = ref([])
const visible = ref(false)

const books = ref([])
const bookOptions = ref([])
const selectedBook = ref('-')

const title = ref('')
const removeDiacritics = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const poemList = computed(() => {
  const searchTitle = removeDiacritics(title.value.toLowerCase())
  const filteredList = data.value.filter(entry => {
    const entryTitleWithoutDiacritics = removeDiacritics(
      entry.title.toLowerCase()
    )
    return entryTitleWithoutDiacritics.includes(searchTitle)
  })

  if (title.value === '') {
    return data.value
  }
  return filteredList
})

onMounted(() => {
  loadData()
})
const bookRequest = (bookQuery = {}) => {
  visible.value = true
  api
    .get('api/poem/', { params: bookQuery })
    .then(response => {
      data.value = response.data
      visible.value = false
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

// const bookOptions = ref([])
watchEffect(() => {
  if (selectedBook.value === '-') {
    data.value = []
    bookOptions.value.pop()
    bookRequest()
  } else if (selectedBook.value !== '-') {
    data.value = []
    bookRequest({ book: selectedBook.value })
    if (bookOptions.value.indexOf('-') !== -1) {
      bookOptions.value.pop()
    }
    bookOptions.value.push('-')
  }
})
const createBookOptions = array => {
  const options = []
  books.value.forEach(book => {
    options.push(book.title)
  })
  return options
}

function loadData () {
  visible.value = true
  api
    .get('api/poem/')
    .then(response => {
      data.value = response.data
      visible.value = false
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'report_problem'
      })
    })
  api
    .get('api/book/')
    .then(response => {
      books.value = response.data
      bookOptions.value = createBookOptions(response.value)
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
// $q.loading.show({
//   spinner: QSpinnerGrid,
//   spinnerColor: 'grey-10',
//   spinnerSize: 140,
//   backgroundColor: 'brown-4',
//   message: 'Loading Poems',
//   messageColor: 'black'
// })
</script>

<style>
.section-container {
  width: 60%;
  min-width: 350px;
  margin-bottom: 40px;
}
</style>
