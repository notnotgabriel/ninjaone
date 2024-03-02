import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from './ui/components/ThemeProvider'
import { AppShell } from './ui/components/AppShell'

function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <p>foo</p>
      </AppShell>
    </ThemeProvider>
  )
}

export default App
