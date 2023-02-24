import { Searchbar } from '@/system/components/Core/Inputs/field'
import Link from '@/system/components/Link'
import styles from './index.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" ring>
        H
      </Link>
      <Link to="archive" ring>
        Archive
      </Link>
      <Link to="stories" ring>
        Stories
      </Link>
      <Link to="docs" ring>
        Documentation
      </Link>

      <Searchbar
        placeholder="search"
        id="searchbar"
        value=""
        label=""
        classNames={{
          group: 'ml-auto',
        }}
        onChange={v => {
          console.log({ v })
        }}
      />
    </nav>
  )
}
