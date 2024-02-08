<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Rada </q-toolbar-title>
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs
            active-color="white"
            style="font-size: 16px"
            separator="|"
          >
            <q-breadcrumbs-el
              label="Poems"
              icon="fa-solid fa-pen-fancy"
              :to="{ name: 'poem' }"
            />
            <q-breadcrumbs-el
              label="books"
              icon="fa-solid fa-book"
              :to="{ name: 'book' }"
            />
          </q-breadcrumbs>
        </div>

        <div>@radowski.7</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered overlay>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Instagram',
    caption: '@radowski.7',
    icon: 'fa-brands fa-instagram',
    link: 'https://www.instagram.com/radowski.7/'
  },
  {
    title: 'VSCO',
    caption: 'vsco.co/alvarohc777',
    icon: 'img:icons8-vsco.svg',
    // icon: 'fa-solid fa-camera',
    link: 'https://vsco.co/alvarohc777/gallery'
  },
  {
    title: 'Link Tree',
    caption: 'linktr.ee/radowski',
    icon: 'fa-solid fa-link',
    link: 'https://linktr.ee/radowski'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
