import { Image, type MantineStyleProp } from '@mantine/core'

import { type DeviceType } from '../domain/device'

import windowsIcon from '../../core/ui/assets/icons/windows.svg'
import appleIcon from '../../core/ui/assets/icons/apple.svg'
import linuxIcon from '../../core/ui/assets/icons/linux.svg'

export function SystemTypeIcon({ type }: { type: DeviceType }) {
  const style: MantineStyleProp = { width: '14px' }

  if (type === 'WINDOWS') {
    return <Image src={windowsIcon} alt='' style={style} />
  }

  if (type === 'MAC') {
    return <Image src={appleIcon} alt='' style={style} />
  }

  if (type === 'LINUX') {
    return <Image src={linuxIcon} alt='' style={style} />
  }
  return null
}
