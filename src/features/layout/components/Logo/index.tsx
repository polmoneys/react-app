import { NavLink } from '@/system/components'

function Logo(): JSX.Element {
  return (
    <NavLink to="/">
      <svg width="44" height="50" viewBox="0 0 108 126" aria-hidden="true">
        <path
          fill="currentColor"
          d="M41.514 23.187L41.38 44.33l-7.002-11.4-7.004-11.404-12.164-.134L3 21.302v83.493h24.24l.09-21.725.135-21.772 7.092 11.581 7.047 11.627v39.143h24.24V84.191l7.093-11.537 7.047-11.536.135 21.86.09 21.817H104V21.302H79.984l-6.958 11.447L66.07 44.15l-.135-21.097L65.845 2h-24.24l-.09 21.187z"
        ></path>
      </svg>
    </NavLink>
  )
}

export default Logo
