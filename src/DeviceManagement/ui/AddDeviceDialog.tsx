import {
  Modal,
  Stack,
  TextInput,
  Select,
  Group,
  Button,
  type ModalProps
} from '@mantine/core'

export function AddDeviceDialog({ opened, onClose }: ModalProps) {
  const deviceTypeOptions = ['All', 'React', 'Angular', 'Vue', 'Svelte']
  const hddCapacitySortOptions = ['ascending', 'descending']

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
            <TextInput label='System name *' />
            <Select
              label='Device Type *'
              placeholder='Select type'
              data={deviceTypeOptions}
            />
            <Select label='HDD Capacity (GB) *' data={hddCapacitySortOptions} />
          </Stack>
          <Group gap='xs' justify='end'>
            <Button type='button' variant='outline' onClick={onClose}>
              Cancel
            </Button>
            <Button type='button' variant='filled'>
              Submit
            </Button>
          </Group>
        </Stack>
      </Modal.Body>
    </Modal>
  )
}
