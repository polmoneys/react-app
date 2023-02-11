import Link from '@/system/components/Link'
import styles from './index.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">H</Link>
      <Link to="archive">Archive</Link>
      <Link to="stories">Stories</Link>
      <Link to="docs">Documentation</Link>

      <input type="search" defaultValue="" placeholder="search" />
    </nav>
  )
}
