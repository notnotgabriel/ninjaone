import { Button, Group, Stack, Title } from '@mantine/core'
import { Filter } from './Filter'
import { DeviceList } from './DeviceList'

export function DevicesPage() {
  return (
    <Stack>
      <Group justify='space-between'>
        <Title order={3}>Devices</Title>
        <Button>+ Add device</Button>
      </Group>
      <Filter />
      <DeviceList />
    </Stack>
  )
}
