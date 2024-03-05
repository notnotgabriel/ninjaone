import { Modal, type ModalProps } from '@mantine/core'

import { Device, type NewDevice } from '../domain/device'
import { useEditDevice } from './hooks/useEditDevice'
import { DeviceForm } from './DeviceForm'

type EditDeviceDialogProps = ModalProps & {
  device: Device
}

export function EditDeviceDialog({
  opened,
  onClose,
  device
}: EditDeviceDialogProps) {
  const { mutate, isPending } = useEditDevice({ onSuccess: onClose })

  function handleFormSubmit(body: NewDevice) {
    mutate({
      body,
      deviceID: device.id
    })
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={`Edit device ${device.system_name}`}
      centered
      removeScrollProps={{ removeScrollBar: false }}
    >
      <Modal.Body p={0}>
        <DeviceForm
          onSubmit={handleFormSubmit}
          onClose={onClose}
          isPending={isPending}
          initialValues={device}
        />
      </Modal.Body>
    </Modal>
  )
}
