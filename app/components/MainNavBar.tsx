import Link from 'next/link';
import React from 'react'
import { MdSearch, MdArrowBack, MdArrowForward, MdNotifications, MdMessage, MdAttachMoney } from 'react-icons/md'

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function MainNavBar({styles}: Props) {
  return (
    <div className={styles.MainNavBar}>
      <div className={styles.LeftSide}>
        <button className={styles.ArrowBack}><MdArrowBack size={28} /></button>
        <button className={styles.ArrowForward}><MdArrowForward size={28} /></button>
        <input className={styles.InputSearch} placeholder='Search' />
        <Link href="/wishlist" className={styles.ButtonWishlist}>Wishlist</Link>
      </div>
      <div className={styles.RightSide}>
        <button className={styles.Notifications}><MdNotifications />{Math.floor(Math.random() * 10)}</button>
        <button className={styles.Messages}><MdMessage />{Math.floor(Math.random() * 25)}</button>
        <button className={styles.Moneys}><MdAttachMoney />{Math.floor(Math.random() * 5000)}</button>
        <div className={styles.UserProfile}>
          <select>
            <option>Account</option>
            <option>Money</option>
            <option>Secure</option>
            <option>LogOut</option>
          </select>
        </div>
      </div>
    </div>
  )
}

