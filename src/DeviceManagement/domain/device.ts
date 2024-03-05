export const deviceTypes = ['WINDOWS', 'LINUX', 'MAC'] as const
export type DeviceType = (typeof deviceTypes)[number]

export type Device = {
  id: string
  system_name: string
  type: DeviceType
  hdd_capacity: string
}
