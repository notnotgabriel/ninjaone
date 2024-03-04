import { Menu, ActionIcon, Image } from '@mantine/core'

import ellipsisIcon from '../../core/ui/assets/icons/ellipsis.svg'

export function DeviceMenu() {
  return (
    <Menu shadow='md' width={150} position='bottom-end'>
      <Menu.Target>
        <ActionIcon
          aria-label='device actions'
          variant='transparent'
          ml={'auto'}
        >
          <Image h={20} src={ellipsisIcon} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item c='red'>Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
