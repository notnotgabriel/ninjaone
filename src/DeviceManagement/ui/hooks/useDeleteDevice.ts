import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { deleteDevice } from '../../infra/DeviceRepository'

export function useDeleteDevice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (deviceID: string) => deleteDevice(deviceID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deviceList'] })
      toast.success('Device deleted with success', {
        hideProgressBar: true,
        position: 'top-right'
      })
    }
  })
}
