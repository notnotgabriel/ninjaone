import { http, HttpResponse } from 'msw'
import { server } from '../../mocks/server'
import {
  screen,
  waitForElementToBeRemoved,
  waitFor,
  within
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderer } from '../../test/renderer'

import { DevicesPage } from './DevicesPage'

const mockedDevices = [
  {
    id: 'Q1JdBnE12',
    system_name: 'ARMANDO',
    type: 'WINDOWS',
    hdd_capacity: '256'
  },
  {
    id: 'e7ocoQ2n3',
    system_name: 'MIGUEL-PC',
    type: 'WINDOWS',
    hdd_capacity: '500'
  },
  {
    id: 'Jj5bn3G2H',
    system_name: 'FIRST-MAC',
    type: 'MAC',
    hdd_capacity: '180'
  }
]

function setup() {
  const user = userEvent.setup()
  const render = renderer(<DevicesPage />)
    .withReactQuery()
    .render()

  return {
    ...render,
    user
  }
}

describe('DevicesPage', () => {
  afterEach(() => {
    server.resetHandlers()
  })

  it('should render the devices list and filter', async () => {
    server.use(
      http.get('/devices', () => {
        return HttpResponse.json(mockedDevices, { status: 200 })
      })
    )
    const { user } = setup()

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('loading-device-list')
    )

    expect(screen.getByRole('heading', { name: /devices/i })).toBeVisible()

    await waitFor(() => {
      expect(
        screen.getByRole('columnheader', {
          name: /device/i
        })
      ).toBeVisible()
    })

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
    expect(within(rows[1]).getByText(/ARMANDO/i)).toBeVisible()
    expect(
      within(rows[1]).getByText(/windows workstation \- 256 gb/i)
    ).toBeVisible()

    user.type(
      screen.getByRole('textbox', {
        name: /search by name/i
      }),
      'mig'
    )

    expect(screen.getByText(/miguel\-pc/i)).toBeVisible()

    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(2)
    })

    user.clear(
      screen.getByRole('textbox', {
        name: /search by name/i
      })
    )

    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(4)
    })

    user.click(
      screen.getByRole('textbox', {
        name: /device type/i
      })
    )

    user.click(
      await screen.findByRole('option', {
        name: /windows/i
      })
    )

    expect(screen.getAllByRole('row')).toHaveLength(2)
    expect(screen.getAllByText(/windows/i)).toHaveLength(2)

    user.click(
      screen.getByRole('textbox', {
        name: /sort by: hdd capacity/i
      })
    )

    user.click(
      await screen.findByRole('option', {
        name: /ascending/i
      })
    )

    const devices = screen.getAllByTestId('device-description')
    expect(devices[0]).toHaveTextContent('WINDOWS workstation - 256 GB')
    expect(devices[1]).toHaveTextContent('WINDOWS workstation - 500 GB')
  })

  it('should add new device', async () => {
    server.use(
      http.get('/devices', function* () {
        yield HttpResponse.json([], { status: 200 })
        return HttpResponse.json([mockedDevices[0]], { status: 200 })
      }),
      http.post('/devices', () => {
        return HttpResponse.json([mockedDevices[0]], { status: 200 })
      })
    )
    const { user } = setup()

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('loading-device-list')
    )

    expect(screen.getAllByRole('row')).toHaveLength(1)

    user.click(
      screen.getByRole('button', {
        name: /\+ add device/i
      })
    )

    await waitFor(() => {
      expect(
        screen.getByRole('dialog', {
          name: /add device/i
        })
      ).toBeVisible()
    })

    user.type(
      screen.getByRole('textbox', {
        name: /system name \*/i
      }),
      'test device'
    )
    user.type(
      screen.getByRole('textbox', {
        name: /hdd capacity \(gb\) \*/i
      }),
      '256'
    )
    user.click(
      screen.getByRole('button', {
        name: /submit/i
      })
    )

    await waitFor(() => {
      expect(
        screen.getByRole('dialog', {
          name: /add device/i
        })
      ).not.toBeVisible()

      expect(
        screen.getByRole('cell', {
          name: /armando windows workstation \- 256 gb/i
        })
      ).toBeVisible()
    })
  })

  it('should edit device', async () => {
    const updatedName = 'armando-guest'
    server.use(
      http.get('/devices', function* () {
        yield HttpResponse.json([mockedDevices[0]])
        return HttpResponse.json(
          [
            {
              ...mockedDevices[0],
              system_name: updatedName
            }
          ],
          { status: 200 }
        )
      }),
      http.put('/devices/:id', () => {
        return HttpResponse.json([])
      })
    )
    const { user } = setup()

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('loading-device-list')
    )

    await waitFor(() => {
      expect(
        screen.getByRole('columnheader', {
          name: /device/i
        })
      ).toBeVisible()
    })

    user.click(screen.getByTestId('device-actions'))

    user.click(
      await screen.findByRole('menuitem', {
        name: /edit/i
      })
    )

    expect(
      await screen.findByRole('dialog', {
        name: /edit device armando/i
      })
    ).toBeVisible()

    expect(
      screen.getByRole('textbox', {
        name: /system name \*/i
      })
    ).toHaveValue('ARMANDO')
    expect(
      screen.getByRole('textbox', {
        name: /device type \*/i
      })
    ).toHaveValue('WINDOWS')
    expect(
      screen.getByRole('textbox', {
        name: /hdd capacity \(gb\) \*/i
      })
    ).toHaveValue('256')

    user.type(
      screen.getByRole('textbox', {
        name: /system name \*/i
      }),
      updatedName
    )

    user.click(
      screen.getByRole('button', {
        name: /submit/i
      })
    )

    await waitFor(() => {
      expect(
        screen.getByRole('dialog', {
          name: /edit device armando/i
        })
      ).not.toBeVisible()
    })

    expect(
      screen.getByRole('cell', {
        name: /armando-guest windows workstation \- 256 gb/i
      })
    ).toBeVisible()
  })

  it('should delete the device', async () => {
    server.use(
      http.get('/devices', function* () {
        yield HttpResponse.json([mockedDevices[0]], { status: 200 })
        return HttpResponse.json([], { status: 200 })
      }),
      http.delete('/devices/:id', () => {
        return HttpResponse.json([], { status: 200 })
      })
    )

    const { user } = setup()

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('loading-device-list')
    )

    await waitFor(() => {
      expect(
        screen.getByRole('columnheader', {
          name: /device/i
        })
      ).toBeVisible()
    })

    user.click(screen.getByTestId('device-actions'))

    user.click(
      await screen.findByRole('menuitem', {
        name: /delete/i
      })
    )

    const dialog = await screen.findByRole('dialog', {
      name: /delete device/i
    })

    expect(within(dialog).getByText(/armando/i)).toBeVisible()
    user.click(
      screen.getByRole('button', {
        name: /delete/i
      })
    )

    expect(
      expect(
        screen.queryByRole('cell', {
          name: /armando-guest windows workstation \- 256 gb/i
        })
      ).toBeNull()
    )
  })
})
