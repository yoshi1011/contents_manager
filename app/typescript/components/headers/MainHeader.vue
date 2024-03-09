<template>
  <v-card>
    <v-toolbar
        color="primary"
        dark
        rounded="0"
    >
      <v-toolbar-title>ContentsManager</v-toolbar-title>

      <v-spacer />

      <LoggedInMenu v-if="loggedIn" />
      <LoggedOutMenu v-if="!loggedIn" />
    </v-toolbar>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import LoggedInMenu from './LoggedInMenu.vue'
import LoggedOutMenu from './LoggedOutMenu.vue'

interface MainHeaderProps {
  loggedIn: boolean
}

defineProps<MainHeaderProps>()
</script>
