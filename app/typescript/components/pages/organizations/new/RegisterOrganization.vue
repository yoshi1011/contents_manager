<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4">組織の新規登録</h2>
      </v-col>
    </v-row>

    <SelectOrganizationType @update-event="changeButtonState" />

    <v-row class="mt-12 text-center">
      <v-col cols="1" offset="5">
        <v-btn color="normal">戻る</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn color="primary" :disabled="nextButtonDisabled" @click="resetButtonState">次へ</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

import SelectOrganizationType from "./SelectOrganizationType.vue";

const nextButtonDisabled = ref(true);

const changeButtonState = () => {
  nextButtonDisabled.value = false;
};

const resetButtonState = () => {
  nextButtonDisabled.value = true;
}
</script>
