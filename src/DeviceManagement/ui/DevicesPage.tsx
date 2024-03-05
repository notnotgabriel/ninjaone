import { Button, Group, Stack, Title } from '@mantine/core'
import { DeviceList } from './DeviceList'
import { useDisclosure } from '@mantine/hooks'
import { AddDeviceDialog } from './AddDeviceDialog'

export function DevicesPage() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Stack>
      <Group justify='space-between'>
        <Title order={3}>Devices</Title>
        <Button onClick={open}>+ Add device</Button>
      </Group>
      <DeviceList />
      <AddDeviceDialog opened={opened} onClose={close} />
    </Stack>
  )
}
