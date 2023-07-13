import React from 'react'
import { MdAddCircle, MdDownloadForOffline } from 'react-icons/md'

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function Games({ styles }: Props) {
  return (
    <div className={styles.Games}>
      <div className={styles.Games__Block}>
      <MdAddCircle size={32} />
      <span className={styles.FirstText}>Add a Game</span>
      <span className={styles.SecondText}>Activate</span>
      </div>
      <div className={styles.Games__Block}>
        <MdDownloadForOffline size={32} />
        <span className={styles.FirstText}>Downloads</span>
        <span className={styles.SecondText}>Manage</span>
      </div>
    </div>
  )
}

