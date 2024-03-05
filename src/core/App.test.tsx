import { renderer } from '../test/renderer'

import App from './App'

it('should render', () => {
  renderer(<App />)
    .withReactQuery()
    .render()
})
