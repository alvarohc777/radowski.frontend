<template>
  <div class="my-card">
    <span>{{ test }}</span>
    <q-select
      v-if="languageList.length > 1"
      v-model="languageId"
      :options="languageList"
      map-options
      option-value="id"
      option-label="name"
      label="Language"
      dense
      emit-value
    />
    <q-scroll-area style="height: 65vh; max-width: 100%; padding: 0px 0 10px 0">
      <q-list
        dense
        bordered
        padding
        class="rounded-borders"
        v-for="cont in content"
        :key="cont"
      >
        <q-item v-for="entry in cont.content" :key="entry.id">
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
import { toRefs, ref, computed } from 'vue'
const props = defineProps(['data', 'languageList'])
const { data, languageList } = toRefs(props)
const languageId = ref(1)

const content = computed(() => {
  return data.value.filter(
    contentList => contentList.language_id === languageId.value
  )
})
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
