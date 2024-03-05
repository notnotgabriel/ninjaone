import { useQuery } from '@tanstack/react-query'

import { fetchDeviceList } from '../../infra/DeviceRepository'

export function useFetchDeviceList() {
  return useQuery({
    queryKey: ['deviceList'],
    queryFn: fetchDeviceList
  })
}
