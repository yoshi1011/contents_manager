<template>
<p>詳細</p>
  <router-link to="/organization/new">新規登録</router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface OrganizationDetailsProps {
  data: {
    organization: string
  }
}

defineProps<OrganizationDetailsProps>()
</script>
