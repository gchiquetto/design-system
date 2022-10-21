import * as Toast from '@radix-ui/react-toast'
import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastContainer = styled(Toast.Root, {
  height: '$20',
  width: '$80',
  background: '$gray800',
  borderRadius: '$sm',
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$3 $5',
  fontFamily: '$default',
  color: '$gray200',

  '&::marker': {
    content: '',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$1',

  svg: {
    cursor: 'pointer',
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: 1.6,
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$md',
  lineHeight: 1.6,
})
