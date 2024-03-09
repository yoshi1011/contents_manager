import type { Meta, StoryObj } from '@storybook/vue3'
import MainHeader from './MainHeader.vue'

const meta: Meta<typeof MainHeader> = {
  component: MainHeader
}

export default meta
type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {
  render: (args) => ({
    components: { MainHeader },
    setup () {
      return { args }
    },
    template: '<MainHeader v-bind="args" />'
  }),
  args: {
    loggedIn: false
  }
}

export const LoggedIn: Story = {
  render: (args) => ({
    components: { MainHeader },
    setup () {
      return { args }
    },
    template: '<MainHeader v-bind="args" />'
  }),
  args: {
    loggedIn: true
  }
}
