import { ThemeProvider } from './ui/components/ThemeProvider'
import { AppShell } from './ui/components/AppShell'

import { DevicesPage } from '../DeviceManagement/ui/DevicesPage'

function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <DevicesPage />
      </AppShell>
    </ThemeProvider>
  )
}

export default App
