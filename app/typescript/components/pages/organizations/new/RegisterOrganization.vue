<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4">組織の新規登録</h2>
      </v-col>
    </v-row>

    <SelectOrganizationType
        v-if="registrationSteps == 0"
        v-model:organization-type="registrationData.organizationType"
        :next-button-function="proceedToNextStep"
        :previous-button-function="returnToDetailPage"
    />
    <OrganizationEntryForm
        v-else-if="registrationSteps == 1"
        v-model:organization-name="registrationData.organizationName"
        v-model:domain-name="registrationData.domainName"
        :next-button-function="proceedToNextStep"
        :previous-button-function="returnToPreviousStep"
    />
    <EntryConfirmationView
        v-else
        :organization-type="registrationData.organizationType"
        :organization-name="registrationData.organizationName"
        :domain-name="registrationData.domainName"
        :previous-button-function="returnToPreviousStep"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import SelectOrganizationType from './SelectOrganizationType.vue'
import OrganizationEntryForm from './OrganizationEntryForm.vue'
import EntryConfirmationView from './EntryConfirmationView.vue'

const router = useRouter()

const registrationSteps = ref(0)

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

const returnToDetailPage = (): void => {
  router.push('/organization')
}

const returnToPreviousStep = (): void => {
  if (registrationSteps.value > 0) {
    registrationSteps.value--
  }
}
</script>
