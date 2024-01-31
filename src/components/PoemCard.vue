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
        <div v-for="book in data.books" :key="book" class="text-caption">
          {{ book }}
        </div>
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
