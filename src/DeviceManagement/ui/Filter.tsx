import { Group, TextInput, Select, Image } from '@mantine/core'
import { ActionIcon } from '@mantine/core'

import refreshIcon from '../../core/ui/assets/icons/sync.svg'
import { deviceTypes } from '../domain/device'
import { type SortingType, sortingTypes } from '../domain/filter'

type FilterProps = {
  filterByName: (name: string | null) => void
  filterDeviceByType: (type: string | null) => void
  sortByCapacity: (type: SortingType | null) => void
}

export function Filter({
  filterByName,
  filterDeviceByType,
  sortByCapacity
}: FilterProps) {
  const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterByName(event.target.value)
  }

  const handleFilterByType = (value: string | null) => {
    filterDeviceByType(value)
  }

  const handleSortByCapacity = (value: string | null) => {
    sortByCapacity(value as SortingType)
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
        data={sortingTypes}
        style={{ width: '300px' }}
        onChange={handleSortByCapacity}
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
