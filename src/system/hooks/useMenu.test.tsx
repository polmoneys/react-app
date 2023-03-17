/**
 * @jest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useMenu from './useMenu'

afterEach(cleanup)

function setup(jsx: any): any {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

interface SettingsMenu {
  account: string
  services: string
  contact: string
}

describe('useMenu', () => {
  test('should set the open menu state correctly', async () => {
    function TestComponent(): JSX.Element {
      const [openMenu, dispatchMenu] = useMenu<keyof SettingsMenu>()

      return (
        <div>
          <button
            data-testid="account-button"
            onClick={() => {
              dispatchMenu('account')
            }}
          >
            Account
          </button>
          <button
            data-testid="services-button"
            onClick={() => {
              dispatchMenu('services')
            }}
          >
            Services
          </button>
          <button
            data-testid="contact-button"
            onClick={() => {
              dispatchMenu('contact')
            }}
          >
            Contact
          </button>

          {openMenu !== null && (
            <div data-testid="menu-content">
              {openMenu === 'account' && <p>Account settings</p>}
              {openMenu === 'services' && <p>Services settings</p>}
              {openMenu === 'contact' && <p>Contact settings</p>}
            </div>
          )}
        </div>
      )
    }
    const { user } = setup(<TestComponent />)
    // const elements = screen.getAllByRole('button')
    // const aboutAnchorNode = screen.getByText(/about/i)
    const accountButton = screen.getByTestId('account-button')
    const servicesButton = screen.getByTestId('services-button')
    const contactButton = screen.getByTestId('contact-button')

    expect(screen.queryByTestId('menu-content')).not.toBeInTheDocument()

    await user.click(accountButton)
    expect(screen.queryByTestId('menu-content')).toHaveTextContent(
      'Account settings',
    )

    await user.click(servicesButton)
    expect(screen.queryByTestId('menu-content')).toHaveTextContent(
      'Services settings',
    )

    await user.click(contactButton)
    expect(screen.queryByTestId('menu-content')).toHaveTextContent(
      'Contact settings',
    )
  })
})
