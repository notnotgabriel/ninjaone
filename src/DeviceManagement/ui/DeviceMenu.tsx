import { Menu, ActionIcon, Image } from '@mantine/core'

import ellipsisIcon from '../../core/ui/assets/icons/ellipsis.svg'

type DeviceMenuProps = {
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
  deviceID: string
}

export function DeviceMenu({
  onDeleteClick,
  onEditClick,
  deviceID
}: DeviceMenuProps) {
  return (
    <Menu shadow='md' width={150} position='bottom-end'>
      <Menu.Target>
        <ActionIcon
          aria-label='device actions'
          variant='transparent'
          ml={'auto'}
          data-testid='device-actions'
        >
          <Image h={20} src={ellipsisIcon} title='device actions' />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => onEditClick(deviceID)}>Edit</Menu.Item>
        <Menu.Item c='red' onClick={() => onDeleteClick(deviceID)}>
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
