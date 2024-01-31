<template>
  <q-card class="my-card">
    <q-img
      :src="coverUrl"
      ratio="1"
      style="min-width: 500px"
      fit="cover"
      position="0 0"
      placeholder-src="~assets/placeholder.png"
    >
      <div class="absolute-bottom">
        <div class="text-h6">{{ data.title }}</div>
        <div class="text-caption">
          poems: {{ data.num_poems }} | {{ data.language }}
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
  /* max-width: 350px; */
}
</style>
