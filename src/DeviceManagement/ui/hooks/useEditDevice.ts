import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import {
  type UpdateDeviceData,
  updateDevice
} from '../../infra/DeviceRepository'

export function useEditDevice({ onSuccess }: { onSuccess: () => void }) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateDeviceData) => updateDevice(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deviceList'] })
      toast.success('Device edited with success', {
        hideProgressBar: true,
        position: 'top-right'
      })
      onSuccess()
    },
    onError: () => {
      toast.error('Failed to edit the device', {
        hideProgressBar: true,
        position: 'top-right'
      })
    }
  })
}
