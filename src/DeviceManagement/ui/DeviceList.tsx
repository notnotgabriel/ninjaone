import { Table, Group, Text, Skeleton, Stack } from '@mantine/core'
import { DeviceMenu } from './DeviceMenu'
import { useFetchDeviceList } from './hooks/useFetchDeviceList'
import { Filter } from './Filter'
import { SystemTypeIcon } from './SystemTypeIcon'

export function DeviceList() {
  const { data, isLoading, filterByName, filterDeviceByType } =
    useFetchDeviceList()

  if (isLoading) {
    return (
      <Stack gap='xs' data-testid='loading-device-list'>
        <Skeleton height={8} radius='xl' />
        <Skeleton height={8} mt={6} radius='xl' />
        <Skeleton height={8} mt={6} width='70%' radius='xl' />
      </Stack>
    )
  }

  return (
    <>
      <Filter
        filterByName={filterByName}
        filterDeviceByType={filterDeviceByType}
      />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Device</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {(data || []).map((device) => (
            <Table.Tr key={device.id}>
              <Table.Td>
                <Group>
                  <div>
                    <Group gap={'xs'}>
                      <SystemTypeIcon type={device.type} />
                      <Text>{device.system_name}</Text>
                    </Group>
                    <Text size='sm' c='#6E6D7A'>
                      {device.type} workstation - {device.hdd_capacity} GB
                    </Text>
                  </div>
                  <DeviceMenu />
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  )
}
