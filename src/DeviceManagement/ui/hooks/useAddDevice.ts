import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { createDevice } from '../../infra/DeviceRepository'
import { type NewDevice } from '../../domain/device'

export function useAddDevice({ onSuccess }: { onSuccess: () => void }) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: NewDevice) => createDevice(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deviceList'] })
      toast.success('Device created with success', {
        hideProgressBar: true,
        position: 'top-right'
      })
      onSuccess()
    },
    onError: () => {
      toast.error('Failed to create the device', {
        hideProgressBar: true,
        position: 'top-right'
      })
    }
  })
}
