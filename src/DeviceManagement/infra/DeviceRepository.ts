import HttpClient from '../../core/infra/HttpClient'
import { type Device } from '../domain/device'

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

export async function createDevice(body: any): Promise<Device> {
  try {
    const { data } = await HttpClient.post('/devices', body)
    return data
  } catch (error) {
    throw error
  }
}

export async function updateDevice({
  body,
  deviceID
}: {
  body: any
  deviceID: string
}): Promise<Device> {
  try {
    const { data } = await HttpClient.post(`/devices/${deviceID}`, body)
    return data
  } catch (error) {
    throw error
  }
}
