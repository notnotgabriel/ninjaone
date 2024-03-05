import {
  Modal,
  Stack,
  Text,
  Group,
  Button,
  type ModalProps
} from '@mantine/core'
import { type Device } from '../domain/device'
import { useDeleteDevice } from './hooks/useDeleteDevice'

type DeleteDeviceDialogProps = ModalProps & {
  device: Device
}

export function DeleteDeviceDialog({
  opened,
  onClose,
  device
}: DeleteDeviceDialogProps) {
  const { mutate, isPending } = useDeleteDevice()

  const handleDelete = () => {
    mutate(device.id)
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title='Delete device'
      centered
      removeScrollProps={{ removeScrollBar: false }}
    >
      <Modal.Body p={0}>
        <Stack>
          <Text>
            You are about to delete the device {device.system_name}. This action
            cannot be undone.
          </Text>
          <Group gap='xs' justify='end'>
            <Button type='button' variant='outline' onClick={onClose}>
              Cancel
            </Button>
            <Button
              type='button'
              variant='filled'
              color='red'
              onClick={handleDelete}
              loading={isPending}
            >
              Delete
            </Button>
          </Group>
        </Stack>
      </Modal.Body>
    </Modal>
  )
}
