<template>
  <v-row class="mt-8">
    <v-col cols="12">
      <h3 class="text-h5">組織情報の入力</h3>
    </v-col>
  </v-row>
  <v-row class="mt-8">
    <v-col cols="12">
      <p class="font-weight-regular">組織情報を入力してください</p>
    </v-col>
  </v-row>
  <v-form v-model="isFormValid">
    <v-row class="mt-12">
      <v-col cols="6" offset="3" align-self="start">
        <v-text-field
            v-model="organizationName"
            :label="'組織名'"
            :rules="[v => !!v || '組織名を入力してください',
          v => v.length <= 30 || '組織名は30文字以内で入力してください']"
        />
      </v-col>
    </v-row>
    <v-row class="mt-12">
      <v-col cols="6" offset="3" align-self="start">
        <v-text-field
            v-model="domainName"
            :label="'ドメイン名'"
            :rules="[v => !!v || 'ドメイン名を入力してください',
          v => DOMAIN_REGEX_PATTERN.test(v) || 'ドメイン名を正しい形式で入力してください',
          v => v.length <= 253 || 'ドメイン名は253文字以内で入力してください']"
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

const DOMAIN_REGEX_PATTERN = /^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/

const organizationName = defineModel('organizationName', { required: true, type: String })
const domainName = defineModel('domainName', { required: true, type: String })

defineProps<{
  previousButtonFunction: () => void
  nextButtonFunction: () => void
}>()

const isFormValid = ref(false)
</script>
