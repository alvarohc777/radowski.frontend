<template>
  <div style="max-width: 200px">
    <q-list dense bordered padding class="rounded-borders">
      <q-item v-for="entry in data" :key="entry">
        <router-link
          :to="{ name: 'poemId', params: { poemId: entry.id } }"
          style="text-decoration: none; color: inherit"
        >
          {{ entry.poem }}
        </router-link>
      </q-item>
    </q-list>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps(['data'])
const { data } = toRefs(props)
</script>
