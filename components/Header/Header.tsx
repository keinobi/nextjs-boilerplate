import { VFC } from 'react'
import styles from './Header.module.css'

const Header: VFC = () => {
  return (
    <h1 className={styles.heading}>Hello Next.js 👋</h1>
  )
}

export default Header
