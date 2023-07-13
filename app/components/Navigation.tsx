"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdLocalGroceryStore, MdOutlineLibraryBooks, MdPeople, MdNewspaper, MdSettings } from 'react-icons/md'

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function Navigation({ styles }: Props) {
  const pathname = usePathname()
  return (
    <div className={styles.Navigation}>
      <Link href="/store" className={pathname === '/store' ? [styles.Navigation__Button, styles.active].join(' ') : styles.Navigation__Button}><MdLocalGroceryStore /> Store</Link>
      <Link href="/library" className={pathname === '/library' ? [styles.Navigation__Button, styles.active].join(' ') : styles.Navigation__Button}><MdOutlineLibraryBooks /> Library</Link>
      <Link href="/community" className={pathname === '/community' ? [styles.Navigation__Button, styles.active].join(' ') : styles.Navigation__Button}><MdPeople /> Community</Link>
      <Link href="/news" className={pathname === '/news' ? [styles.Navigation__Button, styles.active].join(' ') : styles.Navigation__Button}><MdNewspaper /> News</Link>
      <Link href="/settings" className={pathname === '/settings' ? [styles.Navigation__Button, styles.active].join(' ') : styles.Navigation__Button}><MdSettings /> Settings</Link>
    </div>
  )
}