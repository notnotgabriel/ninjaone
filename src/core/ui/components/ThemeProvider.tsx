import '@mantine/core/styles.css'
import {
  MantineProvider,
  CSSVariablesResolver,
  createTheme
} from '@mantine/core'

const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    '--mantine-color-text': '#211F33',
    '--text-color': '#211F33',
    '--button-bg': '#337AB7'
  },
  light: {
    '--mantine-color-text': '#211F33'
  },
  dark: {
    '--mantine-color-text': '#211F33'
  }
})

const theme = createTheme({
  fontFamily: '"Inter", sans-serif'
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      {children}
    </MantineProvider>
  )
}
