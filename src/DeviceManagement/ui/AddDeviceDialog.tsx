import { Modal, type ModalProps } from '@mantine/core'

import { type NewDevice } from '../domain/device'
import { useAddDevice } from './hooks/useAddDevice'
import { DeviceForm } from './DeviceForm'

export function AddDeviceDialog({ opened, onClose }: ModalProps) {
  const { mutate, isPending } = useAddDevice({ onSuccess: onClose })

  function handleFormSubmit(data: NewDevice) {
    mutate(data)
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title='Add device'
      centered
      removeScrollProps={{ removeScrollBar: false }}
    >
      <Modal.Body p={0}>
        <DeviceForm
          onSubmit={handleFormSubmit}
          onClose={onClose}
          isPending={isPending}
        />
      </Modal.Body>
    </Modal>
  )
}
