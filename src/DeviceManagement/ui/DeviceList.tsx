import { Table, Image, Group, Text } from '@mantine/core'

import windowsIcon from '../../core/ui/assets/icons/windows.svg'
import { DeviceMenu } from './DeviceMenu'

export function DeviceList() {
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Device</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Group>
                <div>
                  <Group gap={'xs'}>
                    <Image src={windowsIcon} alt='' style={{ width: '14px' }} />
                    <Text>DESKTOP-0VCBIFF</Text>
                  </Group>
                  <Text size='sm' c='#6E6D7A'>
                    Windows workstation - 128 GB
                  </Text>
                </div>
                <DeviceMenu />
              </Group>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  )
}
