import { QueryProvider } from './infra/QueryProvider'
import { QueryDevTools } from './infra/QueryDevTools'
import { ThemeProvider } from './ui/components/ThemeProvider'
import { AppShell } from './ui/components/AppShell'

import { DevicesPage } from '../DeviceManagement/ui/DevicesPage'

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AppShell>
          <DevicesPage />
        </AppShell>
      </ThemeProvider>
      <QueryDevTools />
    </QueryProvider>
  )
}

export default App
