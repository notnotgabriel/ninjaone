import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('http://localhost:3000', () => {
    return HttpResponse.json([], { status: 200 })
  }),
  http.get('http://localhost:3000/devices', () => {
    return HttpResponse.json([], { status: 200 })
  })
]
