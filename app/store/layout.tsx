import React, { ReactNode } from 'react'

import BrowserByGenre from './components/BrowserByGenre'
import Friends from './components/Friends'
import Games from './components/Games'
import Logo from './components/Logo'
import Navigation from './components/Navigation'

import styles from './layout.module.scss'

export default function StoreLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className={styles.Layout}>
      <div className={styles.OffCanvas}>
        <div className={styles.OffCanvas__Container}>
          <Logo styles={styles} />
          <Navigation styles={styles} />
          <BrowserByGenre styles={styles} />
          <div className={styles.OffCanvas__Container__Down}>
            <Friends styles={styles} />
            <Games styles={styles} />
          </div>
        </div>
      </div>
      <main className={styles.Main}>
        <div className={styles.Main__Container}>
          {children}
        </div>
      </main>
    </div>
  )
}

