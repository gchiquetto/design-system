import * as Toast from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import { ToastContainer, ToastHeader, ToastTitle } from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  body: string
}

export function ToastComponent({ title, body, ...props }: ToastProps) {
  return (
    <Toast.Provider>
      <ToastContainer {...props}>
        <ToastHeader>
          <ToastTitle>{title}</ToastTitle>
          <Toast.Close asChild>
            <X size={20} />
          </Toast.Close>
        </ToastHeader>
        <Toast.Description>{body}</Toast.Description>
      </ToastContainer>
      <Toast.Viewport />
    </Toast.Provider>
  )
}

ToastComponent.displayname = 'Toast'
