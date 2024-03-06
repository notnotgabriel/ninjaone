import { Table, Group, Text, Skeleton, Stack } from '@mantine/core'
import { DeviceMenu } from './DeviceMenu'
import { useFetchDeviceList } from './hooks/useFetchDeviceList'
import { Filter } from './Filter'
import { SystemTypeIcon } from './SystemTypeIcon'
import { DeleteDeviceDialog } from './DeleteDeviceDialog'
import { useState } from 'react'
import { EditDeviceDialog } from './EditDeviceDialog'

export function DeviceList() {
  const { data, isLoading, filterByName, filterDeviceByType, sortByCapacity } =
    useFetchDeviceList()
  const [deleteDeviceID, setDeleteDeviceID] = useState<string | undefined>()
  const [updateDeviceID, setUpdateDeviceID] = useState<string | undefined>()

  function handleOpenDelete(deviceID: string) {
    setDeleteDeviceID(deviceID)
  }

  function handleCloseDelete() {
    setDeleteDeviceID(undefined)
  }

  function handleOpenEdit(deviceID: string) {
    setUpdateDeviceID(deviceID)
  }

  function handleCloseEdit() {
    setUpdateDeviceID(undefined)
  }

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
        sortByCapacity={sortByCapacity}
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
                    <Text
                      size='sm'
                      c='#6E6D7A'
                      data-testid='device-description'
                    >
                      {device.type} workstation - {device.hdd_capacity} GB
                    </Text>
                  </div>
                  <DeviceMenu
                    onDeleteClick={handleOpenDelete}
                    onEditClick={handleOpenEdit}
                    deviceID={device.id}
                  />
                  <DeleteDeviceDialog
                    opened={device.id === deleteDeviceID}
                    onClose={handleCloseDelete}
                    device={device}
                  />
                  <EditDeviceDialog
                    opened={device.id === updateDeviceID}
                    onClose={handleCloseEdit}
                    device={device}
                  />
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  )
}
