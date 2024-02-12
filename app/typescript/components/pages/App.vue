<template>
  <MainHeader :logged-in="loggedIn" />

  <!-- eslint-disable-next-line vue/require-component-is -->
  <CurrentPageComponent />
</template>

<script setup lang="ts">
import MainHeader from '../headers/MainHeader.vue'

defineProps<
{
  loggedIn: boolean
}
>()
</script>
