import { render, type RenderOptions } from '@testing-library/react'

class Renderer {
  protected rendered: React.ReactNode

  constructor(children: React.ReactNode) {
    this.rendered = children
  }

  render(options?: RenderOptions) {
    return render(this.rendered, options)
  }
}

export function renderer(children: React.ReactNode) {
  return new Renderer(children)
}
