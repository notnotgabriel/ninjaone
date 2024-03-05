import { render, type RenderOptions } from '@testing-library/react'
import {
  type QueryClientConfig,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'

const renderWithReactQuery = (
  children: React.ReactNode,
  config?: QueryClientConfig
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false
      }
    },
    ...config
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

class Renderer {
  protected rendered: React.ReactNode

  constructor(children: React.ReactNode) {
    this.rendered = children
  }

  withReactQuery(config?: QueryClientConfig) {
    this.rendered = renderWithReactQuery(this.rendered, config)

    return this
  }

  render(options?: RenderOptions) {
    return render(<MantineProvider>{this.rendered}</MantineProvider>, options)
  }
}

export function renderer(children: React.ReactNode) {
  return new Renderer(children)
}
