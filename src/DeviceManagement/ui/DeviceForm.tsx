import { Stack, TextInput, Select, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

import { type NewDevice, deviceTypes } from '../domain/device'

type DeviceFormProps = {
  onSubmit: (body: NewDevice) => void
  onClose: () => void
  isPending?: boolean
}

export function DeviceForm({ onSubmit, onClose, isPending }: DeviceFormProps) {
  const form = useForm<NewDevice>({
    initialValues: {
      system_name: '',
      type: 'WINDOWS',
      hdd_capacity: ''
    }
  })

  function handleFormSubmit() {
    onSubmit(form.values)
  }

  return (
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
  )
}
