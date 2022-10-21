import { StoryObj, Meta } from '@storybook/react'
import { TooltipComponent, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: TooltipComponent,
  args: {
    open: true,
    content: '21 of October - Unavailable',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
