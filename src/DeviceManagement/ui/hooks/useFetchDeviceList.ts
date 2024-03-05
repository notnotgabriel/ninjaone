import { useQuery } from '@tanstack/react-query'

import { fetchDeviceList } from '../../infra/DeviceRepository'
import { useDeviceListFilter } from './useDeviceListFilter'
import { useEffect } from 'react'

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

  return {
    data,
    isFetched,
    filterByName,
    ...rest
  }
}
