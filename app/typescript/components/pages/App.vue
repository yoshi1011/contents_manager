<template>
  <Header :logged-in="props.loggedIn" />

  <Component />
</template>

<script setup lang="ts">
import Header from "@/components/headers/Header.vue";

const props = defineProps<
    {
      loggedIn: boolean
    }
>()
</script>
