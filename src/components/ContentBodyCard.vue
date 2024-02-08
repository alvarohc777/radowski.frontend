<template>
  <q-card class="my-card">
    <q-card-section class="text-body1 poem">
      <p v-for="line in body" :key="line">{{ line }}</p>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { toRefs } from 'vue'

const props = defineProps(['title', 'body'])

const { body } = toRefs(props)
</script>
<style scoped>
.poem {
  font-family: 'Your preferred font', sans-serif; /* Add your preferred font */
  line-height: 1.5; /* Adjust the line height as needed */
  text-align: center; /* Adjust text alignment as needed */
  /* Adjust margin as needed */
}

.poem p {
  margin: 0; /* Remove default paragraph margin */
}
.my-card {
  width: 100%;
  max-width: 250px;
  margin: 0;
}
</style>
