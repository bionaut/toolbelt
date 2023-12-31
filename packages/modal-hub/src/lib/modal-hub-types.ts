import { FC, ReactElement } from 'react'

export type UseModalHubComponent<TModalProps extends ModalHubProps> = FC<TModalProps>

export interface ModalHubProps {
  onClose: () => void
}

export interface ModalHubState {
  active?: ReactElement
}

export interface ModalHubActions {
  renderModal: (component: ReactElement) => void
  removeModal: () => void
}

export interface UseModalHubResult<TModalProps> {
  open: () => void
  openWithProps: (props?: Partial<TModalProps>) => void
  close: () => void
  isOpen: boolean
}

export interface UseModalHub {
  <TModalProps extends ModalHubProps>(
    modal: UseModalHubComponent<TModalProps>,
    props?: Omit<TModalProps, 'onClose'>,
  ): UseModalHubResult<TModalProps>
}

export type ModalHubContextValue = readonly [ModalHubState, ModalHubActions]
