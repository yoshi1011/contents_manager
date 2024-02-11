<template>
  <Header :logged-in="props.loggedIn" />

  <!-- eslint-disable-next-line vue/require-component-is -->
  <Component />
</template>

<script setup lang="ts">
import Header from '../headers/MainHeader.vue'

const props = defineProps<
{
  loggedIn: boolean
}
>()
</script>
