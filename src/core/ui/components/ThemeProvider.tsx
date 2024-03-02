import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        fontFamily: '"Inter", sans-serif'
      }}
    >
      {children}
    </MantineProvider>
  )
}
