<template>
  <div>
    <v-btn variant="outlined" color="primary" @click="count++">Increment</v-btn>

    <p>{{count}}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>
