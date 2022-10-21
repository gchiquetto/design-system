import { StoryObj, Meta } from '@storybook/react'
import { ToastComponent, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: ToastComponent,
  args: {
    open: true,
    title: 'Appointment scheduled',
    body: 'Wednesday, 23 of October at 4 pm',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
