export const deviceTypes = ['WINDOWS', 'LINUX', 'MAC'] as const
export type DeviceType = typeof deviceTypes

export type Device = {
  id: string
  system_name: string
  type: DeviceType[number]
  hdd_capacity: string
}
