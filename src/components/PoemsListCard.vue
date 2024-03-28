<template>
  <div class="my-card">
    <q-scroll-area style="height: 65vh; max-width: 100%; padding: 0px 0 10px 0">
      <q-list
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
    </q-scroll-area>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps(['data'])
const { data } = toRefs(props)
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
