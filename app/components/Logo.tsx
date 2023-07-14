import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function Logo({ styles }: Props) {
  return (
    <div className={styles.Logo}>
      <Link href={'/'}>
        <Image
          width={185}
          height={55}
          alt="Steam Logo"
          src={"/SteamLogoWhite.png"}
          priority
        />
      </Link>
    </div>
  )
}
