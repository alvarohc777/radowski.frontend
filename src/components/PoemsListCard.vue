<template>
  <div class="row flex flex-center justify-center">
    <q-list
      style="min-width: 350px"
      dense
      bordered
      padding
      class="rounded-borders"
      v-for="content in data"
      :key="content"
    >
      <q-item v-for="entry in content.content" :key="entry.id">
        <router-link
          :to="{ name: 'poemContentId', params: { id: entry.id } }"
          style="text-decoration: none; color: inherit"
        >
          {{ entry.title }}
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
