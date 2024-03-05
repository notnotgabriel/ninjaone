import { Group, TextInput, Select, Image } from '@mantine/core'
import { ActionIcon } from '@mantine/core'

import refreshIcon from '../../core/ui/assets/icons/sync.svg'
import { deviceTypes } from '../domain/device'

type FilterProps = {
  filterByName: (name: string | null) => void
  filterDeviceByType: (type: string | null) => void
}

export function Filter({ filterByName, filterDeviceByType }: FilterProps) {
  const hddCapacitySortOptions = ['ascending', 'descending']

  const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterByName(event.target.value)
  }

  const handleFilterByType = (value: string | null) => {
    filterDeviceByType(value)
  }

  return (
    <Group>
      <TextInput
        label='Search by name'
        placeholder='Search'
        onChange={handleFilterByName}
      />
      <Select
        label='Device Type'
        placeholder='Device Type: All'
        data={deviceTypes}
        onChange={handleFilterByType}
        clearable
      />
      <Select
        label='Sort by: HDD Capacity'
        placeholder='Sort by: HDD Capacity (Descending)'
        data={hddCapacitySortOptions}
        style={{ width: '300px' }}
        clearable
      />
      <ActionIcon
        aria-label='refresh filter'
        variant='transparent'
        ml={'auto'}
        style={{ alignSelf: 'end' }}
      >
        <Image src={refreshIcon} />
      </ActionIcon>
    </Group>
  )
}
