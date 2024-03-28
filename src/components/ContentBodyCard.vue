<template>
  <q-card class="my-card">
    <q-card-section class="text-body1 poem">
      <div class="text-overline text-right text-italic" v-if="dedication">
        {{ dedication }}
      </div>
      <q-scroll-area
        style="height: 65vh; max-width: 100%; padding: 0px 0 10px 0"
      >
        <p v-for="line in body" :key="line">
          <br v-if="line === ''" />{{ line }}
        </p>
      </q-scroll-area>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { toRefs } from 'vue'

const props = defineProps(['title', 'body', 'dedication'])

const { body, dedication } = toRefs(props)
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
  max-width: 600px;
  min-width: 300px;
  padding: 0;
  margin: 0;
}
</style>
