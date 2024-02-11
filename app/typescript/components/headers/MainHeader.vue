<template>
  <v-card>
    <v-toolbar
        color="primary"
        dark
        rounded="0"
    >
      <v-toolbar-title>ContentsManager</v-toolbar-title>

      <v-spacer />

      <v-btn v-if="!props.loggedIn" href="/providers/sign_in">ログイン</v-btn>
      <v-btn v-if="!props.loggedIn" href="/providers/sign_up">新規登録</v-btn>
      <v-btn v-if="props.loggedIn" @click="logout">ログアウト</v-btn>
      <input v-if="props.loggedIn" type="hidden" name="authenticity_token" :value="authenticityToken" />
    </v-toolbar>
  </v-card>
</template>

<script setup lang="ts">
import axios from 'axios'

const props = defineProps<
{
  loggedIn: boolean
}
>()

const authenticityToken = document.head.querySelector('[name=csrf-token]')?.getAttribute('content') ?? ''

const logout = (): void => {
  void axios.delete('/providers/sign_out', { params: { authenticity_token: authenticityToken } }).then(() => {
    location.href = '/'
  })
}
</script>
