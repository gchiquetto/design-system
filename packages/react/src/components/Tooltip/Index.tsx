import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { StyledArrow, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string
}

export function TooltipComponent({ content, ...props }: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer {...props}>
        <Tooltip.Trigger />
        <Tooltip.Portal>
          <TooltipContent>
            {content}
            <StyledArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </TooltipContainer>
    </Tooltip.Provider>
  )
}
