import { useReducer } from 'react'
import { type Device } from '../../domain/device'

type Action =
  | { type: 'UPDATE_DATA'; data: Device[] }
  | { type: 'FILTER_BY_NAME'; name: string | null }

type FilterProps = {
  name?: string | null
}

type FilterStateProps = {
  filters: FilterProps
  data: Device[]
  deviceList?: Device[]
}

function filterDevices({ filters, data }: FilterStateProps) {
  const filtered = data.filter((device) => {
    if (filters.name) {
      return device.system_name.toLowerCase().includes(filters.name)
    }
    return true
  })

  return filtered
}

function reducer(state: FilterStateProps, action: Action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.data
      }
    case 'FILTER_BY_NAME': {
      console.log(action)
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
