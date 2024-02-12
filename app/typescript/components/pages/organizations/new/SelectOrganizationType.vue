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
          :rules="[v => !!v || '組織タイプを選択してください']"
          v-model="organizationType"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'

const organizationTypes = ['individual', 'corporation']
const organizationType = defineModel('organizationType', { required: true, type: String })
</script>
