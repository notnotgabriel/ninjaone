import { useQuery } from '@tanstack/react-query'

import { fetchDeviceList } from '../../infra/DeviceRepository'
import { useDeviceListFilter } from './useDeviceListFilter'
import { useEffect } from 'react'
import { SortingType } from '../../domain/filter'

export function useFetchDeviceList() {
  const { data, isFetched, ...rest } = useQuery({
    queryKey: ['deviceList'],
    queryFn: fetchDeviceList
  })

  const { deviceList, dispatch } = useDeviceListFilter()

  useEffect(() => {
    if (isFetched && data?.length) {
      dispatch({
        type: 'UPDATE_DATA',
        data
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

  function sortByCapacity(sortingType: SortingType | null) {
    dispatch({
      type: 'SORT_BY_CAPACITY',
      sortingType
    })
  }

  return {
    data: deviceList,
    isFetched,
    filterByName,
    filterDeviceByType,
    sortByCapacity,
    ...rest
  }
}
