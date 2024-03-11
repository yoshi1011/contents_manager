import { type Component, createApp } from 'vue'
import MainHeader from '../../components/headers/MainHeader.vue'
import { registerPlugins } from '../../plugins'
import { getDataJson } from '../../lib/utils.ts'

const header = registerPlugins(createApp((MainHeader as Component), getDataJson('header')))
header.mount('#header')
