import { Stack, TextInput, Select, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

import { type NewDevice, deviceTypes } from '../domain/device'

type DeviceFormProps = {
  onSubmit: (body: NewDevice) => void
  onClose: () => void
  isPending?: boolean
  initialValues?: NewDevice
}

export function DeviceForm({
  onSubmit,
  onClose,
  isPending,
  initialValues
}: DeviceFormProps) {
  const emptyInitialValues = {
    system_name: '',
    type: deviceTypes[0],
    hdd_capacity: ''
  }
  const form = useForm<NewDevice>({
    initialValues: initialValues || emptyInitialValues
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
