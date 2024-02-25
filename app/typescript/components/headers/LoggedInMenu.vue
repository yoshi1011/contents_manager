<template>
  <v-btn href="/dashboards">
    ダッシュボード
  </v-btn>
  <v-btn>
    アカウント
    <v-menu activator="parent">
      <v-list>
        <v-list-item
          v-for="(item, index) in accountMenuItems"
          :key="index"
          :value="index"
          >
          <v-list-item-title @click="item.action">{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
  <input type="hidden" name="authenticity_token" :value="authenticityToken" />
</template>

<script setup lang="ts">
import axios from 'axios'

const authenticityToken = document.head.querySelector('[name=csrf-token]')?.getAttribute('content') ?? ''

const logout = (): void => {
  void axios.delete('/providers/sign_out', { params: { authenticity_token: authenticityToken } }).then(() => {
    location.href = '/'
  })
}

const accessOrganizationPage = (): void => {
  location.href = '/organization'
}

interface MenuItem {
  name: string
  action: string
}

const accountMenuItems: MenuItem[] = [
  {
    name: 'ログアウト',
    action: logout
  },
  {
    name: '組織情報',
    action: accessOrganizationPage
  }
]
</script>
