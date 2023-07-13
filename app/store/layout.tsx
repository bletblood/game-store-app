import React, { ReactNode } from 'react'

import styles from './layout.module.scss'

export default function StoreLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className={styles.Layout}>
      {children}
    </div>
  )
}

