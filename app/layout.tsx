import type { Metadata } from 'next'
import { Varela_Round } from 'next/font/google'


import BrowserByGenre from './components/BrowserByGenre'
import Friends from './components/Friends'
import Games from './components/Games'
import Logo from './components/Logo'
import Navigation from './components/Navigation'

import styles from './layout.module.scss'
import MainNavBar from './components/MainNavBar'


const varela = Varela_Round({ weight: '400' })

export const metadata: Metadata = {
  title: 'HoloGS | Game Store',
  description: 'Your Favorite Games Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[varela.className, styles.body].join(' ')}>
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
              <MainNavBar styles={styles} />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
