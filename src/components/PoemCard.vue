<template>
  <q-card class="my-card">
    <q-img
      :src="coverUrl"
      ratio="1"
      style="width: 250px"
      fit="cover"
      position="0 0"
      placeholder-src="~assets/placeholder.png"
    >
      <div class="absolute-bottom">
        <div class="text-h6">{{ data.title }}</div>
            <router-link
              :to="{ name: 'bookId', params: { id: data.books_ids[idx] } }"
              style="text-decoration: none; color: inherit"
            >
          {{ book }}
            </router-link>
      </div>
    </q-img>
  </q-card>
</template>

<script setup>
import { tokenStore } from 'stores/tokens-store'
const tokenAzure = tokenStore().tokenAzure

import { toRefs } from 'vue'
const props = defineProps(['data'])
const { data } = toRefs(props)

const coverUrl = data.value.cover_url + tokenAzure
</script>

<style>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
