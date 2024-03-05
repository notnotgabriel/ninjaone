import { useQuery } from '@tanstack/react-query'

import { fetchDeviceList } from '../../infra/DeviceRepository'
import { useDeviceListFilter } from './useDeviceListFilter'
import { useEffect } from 'react'
import { DeviceType } from '../../domain/device'

export function useFetchDeviceList() {
  const {
    data: fetchedData,
    isFetched,
    ...rest
  } = useQuery({
    queryKey: ['deviceList'],
    queryFn: fetchDeviceList
  })

  const { deviceList, dispatch } = useDeviceListFilter()

  const data = deviceList?.length ? deviceList : fetchedData

  useEffect(() => {
    if (isFetched && fetchedData?.length) {
      dispatch({
        type: 'UPDATE_DATA',
        data: fetchedData
      })
    }
  }, [isFetched, data?.length])

  function filterByName(name: string | null) {
    dispatch({
      type: 'FILTER_BY_NAME',
      name
    })
  }

  function filterDeviceByType(deviceType: string | null) {
    dispatch({
      type: 'FILTER_BY_TYPE',
      deviceType
    })
  }

  return {
    data,
    isFetched,
    filterByName,
    filterDeviceByType,
    ...rest
  }
}
