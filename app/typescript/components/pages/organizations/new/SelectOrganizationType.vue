<template>
  <v-row class="mt-8">
    <v-col cols="12">
      <h3 class="text-h5">組織タイプの選択</h3>
    </v-col>
  </v-row>
  <v-row class="mt-8">
    <v-col cols="12">
      <p class="font-weight-regular">組織のタイプを選択してください</p>
    </v-col>
  </v-row>
  <v-row class="mt-12">
    <v-col cols="6" offset="3" align-self="start">
      <v-select
          :label="'組織タイプを選択'"
          :items="organizationTypes"
          @update:modelValue="selectedOrganizationType"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
const organizationTypes = ['individual', 'corporation']

const emit = defineEmits(['updateEvent'])

const selectedOrganizationType = (): void => {
  emit('updateEvent')
}
</script>
