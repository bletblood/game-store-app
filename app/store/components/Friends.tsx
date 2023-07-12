import React from 'react'
import { MdPeople } from 'react-icons/md'

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function Friends({ styles }: Props) {
  return (
    <div className={styles.Friends}>
      <div className={styles.Friends__Container}>
        <div className={styles.Button__Friends}><MdPeople size={22}/> Friends & Chat</div>
        <div className={styles.Button__Chat}>{`${Math.floor(Math.random() * 50)} online →`}</div>
      </div>
    </div>
  )
}

