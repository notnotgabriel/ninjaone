import {
  Modal,
  Stack,
  Text,
  Group,
  Button,
  type ModalProps
} from '@mantine/core'

export function DeleteDeviceDialog({ opened, onClose }: ModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} title='Add device' centered>
      <Modal.Body p={0}>
        <Stack>
          <Text>
            You are about to delete the device DESKTOP-0VCBIFF. This action
            cannot be undone.
          </Text>
          <Group gap='xs' justify='end'>
            <Button type='button' variant='outline' onClick={onClose}>
              Cancel
            </Button>
            <Button type='button' variant='filled' color='red'>
              Delete
            </Button>
          </Group>
        </Stack>
      </Modal.Body>
    </Modal>
  )
}
