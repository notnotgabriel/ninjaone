import HttpClient from '../../core/infra/HttpClient'
import { type NewDevice, type Device } from '../domain/device'

export async function fetchDeviceList(): Promise<Device[]> {
  try {
    const { data } = await HttpClient.get('/devices')
    return data
  } catch (error) {
    throw error
  }
}

export async function fetchDevice(id: string): Promise<Device> {
  try {
    const { data } = await HttpClient.get(`/devices/${id}`)
    return data
  } catch (error) {
    throw error
  }
}

export async function deleteDevice(id: string): Promise<Device> {
  try {
    const { data } = await HttpClient.delete(`/devices/${id}`)
    return data
  } catch (error) {
    throw error
  }
}

export async function createDevice(body: NewDevice): Promise<Device> {
  try {
    const { data } = await HttpClient.post('/devices', body)
    return data
  } catch (error) {
    throw error
  }
}

export type UpdateDeviceData = {
  body: NewDevice
  deviceID: string
}

export async function updateDevice({
  body,
  deviceID
}: UpdateDeviceData): Promise<Device> {
  try {
    const { data } = await HttpClient.put(`/devices/${deviceID}`, body)
    return data
  } catch (error) {
    throw error
  }
}
