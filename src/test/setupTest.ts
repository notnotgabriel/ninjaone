import '@testing-library/jest-dom'
import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'

import { server } from '../mocks/server'

// Source: https://mantine.dev/guides/jest/
const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
