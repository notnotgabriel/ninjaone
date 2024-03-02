import 'react-toastify/dist/ReactToastify.css'

import { AppShell as MantineAppShell, Image } from '@mantine/core'
import { ToastContainer } from 'react-toastify'

import logo from '../assets/logo.svg'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <MantineAppShell header={{ height: { base: 60 } }} padding='md'>
      <MantineAppShell.Header bg={'#002A42'} p={'md'} display={'flex'}>
        <Image h={25} fit='contain' src={logo} />
      </MantineAppShell.Header>
      <MantineAppShell.Main px='xl'>{children}</MantineAppShell.Main>
      <ToastContainer />
    </MantineAppShell>
  )
}
