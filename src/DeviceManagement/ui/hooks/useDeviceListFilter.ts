import { useReducer } from 'react'
import { type Device } from '../../domain/device'
import { type SortingType } from '../../domain/filter'

type Action =
  | { type: 'UPDATE_DATA'; data: Device[] }
  | { type: 'FILTER_BY_NAME'; name: string | null }
  | { type: 'FILTER_BY_TYPE'; deviceType: string | null }
  | { type: 'SORT_BY_CAPACITY'; sortingType: SortingType | null }

type FilterProps = {
  name?: string | null
  deviceType?: string | null
  sortingType?: SortingType | null
}

type FilterStateProps = {
  filters: FilterProps
  data: Device[]
  deviceList?: Device[]
}

function filterDevices({ filters, data }: FilterStateProps) {
  const filtered = data
    .filter((device) => {
      if (filters.name) {
        return device.system_name.toLowerCase().includes(filters.name)
      }
      return true
    })
    .filter((device) => {
      if (filters.deviceType) {
        return device.type.toLowerCase().includes(filters.deviceType)
      }
      return true
    })
    .sort((deviceA, deviceB) => {
      if (filters.sortingType === 'ascending') {
        if (Number(deviceA.hdd_capacity) > Number(deviceB.hdd_capacity))
          return 1
        if (Number(deviceA.hdd_capacity) < Number(deviceB.hdd_capacity))
          return -1
        return 0
      }

      if (filters.sortingType === 'descending') {
        if (Number(deviceA.hdd_capacity) < Number(deviceB.hdd_capacity))
          return 1
        if (Number(deviceA.hdd_capacity) > Number(deviceB.hdd_capacity))
          return -1
        return 0
      }

      return 0
    })

  return filtered
}

function reducer(state: FilterStateProps, action: Action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.data,
        deviceList: action.data
      }
    case 'FILTER_BY_NAME': {
      const filters = {
        name: action.name?.toLowerCase()
      }
      const deviceList = filterDevices({ filters, data: state.data })

      return {
        ...state,
        filters,
        deviceList: deviceList
      }
    }
    case 'FILTER_BY_TYPE': {
      const filters = {
        deviceType: action.deviceType?.toLowerCase()
      }
      const deviceList = filterDevices({ filters, data: state.data })

      return {
        ...state,
        filters,
        deviceList: deviceList
      }
    }
    case 'SORT_BY_CAPACITY': {
      const filters = {
        sortingType: action.sortingType
      }
      const deviceList = filterDevices({ filters, data: state.data })

      return {
        ...state,
        filters,
        deviceList: deviceList
      }
    }

    default:
      return {
        ...state
      }
  }
}

const initialState = {
  filters: {
    name: null
  },
  data: [],
  deviceList: []
}

export function useDeviceListFilter() {
  const [{ deviceList }, dispatch] = useReducer(reducer, {
    ...initialState,
    data: []
  })
  return {
    dispatch,
    deviceList
  }
}
