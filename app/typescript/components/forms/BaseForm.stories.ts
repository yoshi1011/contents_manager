import type { Meta, StoryObj } from '@storybook/vue3'
import BaseForm from './BaseForm.vue'

const meta: Meta<typeof BaseForm> = {
  component: BaseForm
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { BaseForm },
    setup () {
      return { args }
    },
    template: '<BaseForm v-bind="args" />'
  }),
  args: {
    title: '新規登録',
    action: 'post'
  }
}
