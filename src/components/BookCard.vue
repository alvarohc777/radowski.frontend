<template>
  <q-card class="my-card">
    <router-link
      :to="{ name: 'bookId', params: { id: data.id } }"
      style="text-decoration: none; color: inherit"
    >
      <q-img
        :src="coverUrl"
        :key="coverUrl"
        :alt="data.title"
        ratio="1"
        style="min-width: 350px"
        fit="cover"
        position="0 0"
        placeholder-src="~assets/placeholder.png"
      >
        <div class="absolute-bottom">
          <div class="text-h6">
            {{ data.title }}
          </div>

          <div class="text-caption">
            poems: {{ data.num_poems }} |
            <li v-for="language in data.language_list" :key="language">
              {{ language.name }}
            </li>
          </div>
        </div>
      </q-img>
    </router-link>
  </q-card>
</template>

<script setup>
import { tokenStore } from 'stores/tokens-store'

const tokenAzure = tokenStore().tokenAzure

import { toRefs } from 'vue'
const props = defineProps(['data'])
const { data } = toRefs(props)

const coverUrl = data.value.cover_url + tokenAzure

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

<style>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
