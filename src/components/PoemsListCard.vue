<template>
  <div class="column flex flex-center justify-around">
    <div style="min-width: 200px">
      <q-list
        dense
        bordered
        padding
        class="rounded-borders"
        v-for="content in data"
        :key="content"
      >
        <q-item v-for="entry in content.content" :key="entry">
          <router-link
            :to="{ name: 'poemId', params: { poemId: entry.id } }"
            style="text-decoration: none; color: inherit"
          >
            {{ entry.title }}
          </router-link>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps(['data'])
const { data } = toRefs(props)
</script>
