<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <CurrentPageComponent :data="data"/>
</template>

<script setup lang="ts">

// すべてのマウントをApp経由で行っているため、Controllerから渡される多様なdataに対応するためdataという汎用propsを定義
// Headerなどを共通化したいためにこの構成にしているが、各ページコンポーネント単位でマウントする形式に変更した際に修正する
interface AppProps {
  data: any
}

defineProps<AppProps>()
</script>
