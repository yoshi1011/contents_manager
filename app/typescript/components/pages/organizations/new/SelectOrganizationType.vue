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
  <v-form v-model="isFormValid">
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
    <v-row class="mt-12 text-center">
      <v-col cols="1" offset="5">
        <v-btn color="normal" @click="previousButtonFunction">戻る</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn color="primary" :disabled="!isFormValid" @click="nextButtonFunction">次へ</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { defineModel, defineProps, ref } from 'vue'

const organizationTypes = ['individual', 'corporation']
const organizationType = defineModel('organizationType', { required: true, type: String })

defineProps<{
  previousButtonFunction: () => void
  nextButtonFunction: () => void
}>()

const isFormValid = ref(false)
</script>
