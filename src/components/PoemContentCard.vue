<template>
  <router-link
    :to="{ name: 'poemId', params: { id: data.id } }"
    style="text-decoration: none; color: inherit"
  >
    <q-card class="my-card">
      <q-img
        :src="coverUrl"
        :key="coverUrl"
        :alt="data.title"
        ratio="1"
        style="width: 250px"
        fit="cover"
        position="0 0"
        placeholder-src="~assets/placeholder.png"
      >
        <div class="absolute-bottom">
          <div class="text-h6">{{ data.title }}</div>

          <div v-for="book in data.books" :key="book" class="text-caption">
            <router-link
              :to="{ name: 'bookId', params: { id: book.id } }"
              style="text-decoration: none; color: inherit"
            >
              {{ book.title }}
            </router-link>
          </div>
        </div>
      </q-img>
    </q-card>
  </router-link>
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
