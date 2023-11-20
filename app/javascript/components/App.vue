<template>
  <div>
    <button @click="count++">Increment</button>

    <p>{{count}}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>
