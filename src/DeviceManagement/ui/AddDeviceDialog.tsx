import {
  Modal,
  Stack,
  TextInput,
  Select,
  Group,
  Button,
  type ModalProps
} from '@mantine/core'
import { useForm } from '@mantine/form'

import { type NewDevice, deviceTypes } from '../domain/device'
import { useAddDevice } from './hooks/useAddDevice'

export function AddDeviceDialog({ opened, onClose }: ModalProps) {
  const { mutate, isPending } = useAddDevice({ onSuccess: onClose })
  const form = useForm<NewDevice>({
    initialValues: {
      system_name: '',
      type: 'WINDOWS',
      hdd_capacity: ''
    }
  })

  function handleFormSubmit() {
    mutate(form.values)
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
        <Stack>
          <Stack gap='sm'>
            <TextInput
              label='System name *'
              {...form.getInputProps('system_name')}
            />
            <Select
              label='Device Type *'
              placeholder='Select type'
              data={deviceTypes}
              {...form.getInputProps('type')}
            />
            <TextInput
              label='HDD capacity (GB) *'
              {...form.getInputProps('hdd_capacity')}
            />
          </Stack>
          <Group gap='xs' justify='end'>
            <Button type='button' variant='outline' onClick={onClose}>
              Cancel
            </Button>
            <Button
              type='button'
              variant='filled'
              onClick={handleFormSubmit}
              loading={isPending}
            >
              Submit
            </Button>
          </Group>
        </Stack>
      </Modal.Body>
    </Modal>
  )
}
