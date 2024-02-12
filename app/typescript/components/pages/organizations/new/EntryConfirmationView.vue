<template>
  <v-row class="mt-8">
    <v-col cols="12">
      <h3 class="text-h5">入力内容の確認</h3>
    </v-col>
  </v-row>
  <v-row class="mt-8">
    <v-col cols="12">
      <p class="font-weight-regular">入力内容を確認し問題がなければ登録してください</p>
    </v-col>
  </v-row>
  <v-row class="mt-12">
    <v-col cols="6" offset="3" align-self="start">
      <p>組織タイプ: {{organizationType}}</p>
    </v-col>
  </v-row>
  <v-row class="mt-4">
    <v-col cols="6" offset="3" align-self="start">
      <p>組織名: {{organizationName}}</p>
    </v-col>
  </v-row>
  <v-row class="mt-4">
    <v-col cols="6" offset="3" align-self="start">
      <p>ドメイン名: {{domainName}}</p>
    </v-col>
  </v-row>
  <v-row class="mt-12 text-center">
    <v-col cols="1" offset="5">
      <v-btn color="normal" @click="previousButtonFunction">戻る</v-btn>
    </v-col>
    <v-col cols="2">
      <v-btn color="success" @click="registrationButtonFunction">登録する</v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  organizationType: string
  organizationName: string
  domainName: string
  previousButtonFunction: () => void
  registrationButtonFunction: () => void
}>()
</script>
