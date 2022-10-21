import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  color: '$gray100',
  display: 'flex',
  padding: '$3 $4',
  borderRadius: '$xs',
  fontFamily: '$default',
  position: 'relative',
})

export const StyledArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  position: 'absolute',
  bottom: '2.7rem',
  right: '5rem',
  transform: 'rotate(180deg)',
  height: '$2',
  width: '$4',
})
