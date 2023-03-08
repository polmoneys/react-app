/**
 * @jest-environment jsdom
 */

import { render, fireEvent, screen } from '@testing-library/react'
import useMenu from '../useMenu'

interface SettingsMenu {
  account: string
  services: string
  contact: string
}

describe('useMenu', () => {
  test('should set the open menu state correctly', () => {
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

    const { getByTestId } = render(<TestComponent />)
    const accountButton = getByTestId('account-button')
    const servicesButton = getByTestId('services-button')
    const contactButton = getByTestId('contact-button')
    expect(screen.queryByTestId('menu-content')).not.toBeInTheDocument()

    fireEvent.click(accountButton)
    expect(screen.queryByTestId('menu-content')).toHaveTextContent(
      'Account settings',
    )

    fireEvent.click(servicesButton)
    expect(screen.queryByTestId('menu-content')).toHaveTextContent(
      'Services settings',
    )

    fireEvent.click(contactButton)
    expect(screen.queryByTestId('menu-content')).toHaveTextContent(
      'Contact settings',
    )
  })
})
