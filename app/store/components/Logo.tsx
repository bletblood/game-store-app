import Image from 'next/image';
import React from 'react'

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function Logo({ styles }: Props) {
  return (
    <div className={styles.Logo}>
      <Image
        width={185}
        height={55}
        alt="Steam Logo"
        src={"/SteamLogoWhite.png"}
        priority
      />
    </div>
  )
}
