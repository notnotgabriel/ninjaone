import { Button, Group, Stack, Title } from '@mantine/core'
import { Filter } from './Filter'

export function DevicesPage() {
  return (
    <Stack>
      <Group justify='space-between'>
        <Title order={3}>Devices</Title>
        <Button bg={'#337AB7'}>+ Add device</Button>
      </Group>
      <Filter />
    </Stack>
  )
}
