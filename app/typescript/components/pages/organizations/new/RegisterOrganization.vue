<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4">組織の新規登録</h2>
      </v-col>
    </v-row>

    <v-form v-model="isFormValid">
      <SelectOrganizationType
          v-if="registrationSteps == 0"
          v-model:organization-type="registrationData.organizationType"
      />
      <OrganizationEntryForm
          v-else-if="registrationSteps == 1"
          v-model:organization-name="registrationData.organizationName"
          v-model:domain-name="registrationData.domainName"
      />
      <EntryConfirmationView
          v-else
          :organization-type="registrationData.organizationType"
          :organization-name="registrationData.organizationName"
          :domain-name="registrationData.domainName"
      />
    </v-form>

    <v-row class="mt-12 text-center">
      <v-col cols="1" offset="5">
        <v-btn color="normal" @click="returnToPreviousStep">戻る</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn color="primary" :disabled="!isFormValid" @click="proceedToNextStep">次へ</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SelectOrganizationType from './SelectOrganizationType.vue'
import OrganizationEntryForm from './OrganizationEntryForm.vue'
import EntryConfirmationView from './EntryConfirmationView.vue'

const registrationSteps = ref(0)

const isFormValid = ref(false)

const registrationData = ref({
  organizationType: '',
  organizationName: '',
  domainName: ''
})

const proceedToNextStep = (): void => {
  if (registrationSteps.value < 2) {
    registrationSteps.value++
  }
}

const returnToPreviousStep = (): void => {
  if (registrationSteps.value > 0) {
    registrationSteps.value--
  }
}
</script>
