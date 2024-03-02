import { Group, TextInput, Select, Image } from '@mantine/core'
import { ActionIcon } from '@mantine/core'

import refreshIcon from '../../core/ui/assets/icons/sync.svg'

export function Filter() {
  const deviceTypeOptions = ['All', 'React', 'Angular', 'Vue', 'Svelte']
  const hddCapacitySortOptions = ['ascending', 'descending']
  return (
    <Group>
      <TextInput label='Search by name' placeholder='Search' />
      <Select
        label='Device Type'
        placeholder='Device Type: All'
        data={deviceTypeOptions}
      />
      <Select
        label='Sort by: HDD Capacity'
        placeholder='Sort by: HDD Capacity (Descending)'
        data={hddCapacitySortOptions}
        style={{ width: '300px' }}
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
