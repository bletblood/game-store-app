import Link from 'next/link'
import { MdLocalGroceryStore, MdOutlineLibraryBooks, MdPeople, MdNewspaper, MdSettings } from 'react-icons/md'

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function Navigation({ styles }: Props) {
  return (
    <div className={styles.Navigation}>
      <Link href="/store" className={styles.Navigation_Button}><MdLocalGroceryStore /> Store</Link>
      <Link href="/library" className={styles.Navigation_Button}><MdOutlineLibraryBooks /> Library</Link>
      <Link href="/community" className={styles.Navigation_Button}><MdPeople /> Community</Link>
      <Link href="/news" className={styles.Navigation_Button}><MdNewspaper /> News</Link>
      <Link href="/settings" className={styles.Navigation_Button}><MdSettings /> Settings</Link>
    </div>
  )
}