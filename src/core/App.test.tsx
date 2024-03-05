import { renderer } from '../test/renderer'

import App from './App'

describe('App', () => {
  it('should render correctly', () => {
    expect(() =>
      renderer(<App />)
        .withReactQuery()
        .render()
    ).not.toThrow()
  })
})
