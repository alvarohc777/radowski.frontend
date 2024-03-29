<template>
  <q-card class="my-card">
    <a :href="pdfUrl" target="_blank">
      <q-img
        :src="coverUrl"
        :key="coverUrl"
        :alt="data.title"
        ratio="3.2"
        style="width: 100%"
        fit="cover"
        position="0 -40px"
        placeholder-src="~assets/placeholder.png"
      >
        <div class="absolute-bottom-right transparent">
          <q-icon
            name="fa-solid fa-file-arrow-down"
            size="sm"
            color="warning"
          />
        </div>
        <div
          class="absolute-bottom"
          :href="pdfUrl"
          target="_blank"
          style="min-height: 100%"
        >
          <div class="text-h6 text-left">
            {{ data.title }}
          </div>

          <!-- <div class="text-caption text-left">
            poems: {{ data.num_poems }} |
            <li v-for="language in data.language_list" :key="language">
              {{ language.name }}
            </li>
          </div> -->
        </div>
      </q-img>
    </a>
    <q-tooltip class="bg-accent">Get PDF: {{ data.title }}</q-tooltip>
  </q-card>
</template>

<script setup>
import { tokenStore } from 'stores/tokens-store'

const tokenAzure = tokenStore().tokenAzure

import { toRefs } from 'vue'
const props = defineProps(['data'])
const { data } = toRefs(props)

const coverUrl = data.value.cover_url + tokenAzure
const pdfUrl = data.value.pdf_url + tokenAzure

// const downloadPDF = () => {
//   api
//     .get(pdfUrl)
//     .then(response => {})
//     .catch(err => {
//       console.log(err)
//       $q.notify({
//         color: 'negative',
//         position: 'top',
//         message: `Loading failed: ${err.message}`,
//         icon: 'report_problem'
//       })
//     })
// }
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 600px;
  margin-left: 0;
}
</style>
