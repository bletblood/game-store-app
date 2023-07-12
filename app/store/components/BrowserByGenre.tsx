import Link from "next/link";

type Props = {
  styles: {
    [key: string]: string;
  }
}

export default function BrowserByGenre({ styles }: Props) {
  return (
    <div className={styles.BrowserByGenre}>
      <span className={styles.BrowserByGenre__Text}>BrowserByGenre</span>
      <div className={styles.BrowserByGenre__GroupLinks}>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=free-to-play">Free To Play</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=early-access">Early Access</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=action">Action</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=adventure">Adventure</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=casual">Casual</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=fps">FPS</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=fighting">Fighting</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=horror">Horror</Link>
      </div>
      <div className={styles.BrowserByGenre__GroupLinks}>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=multiplayer">Multiplayer</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=open-world">Open World</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=racing">Racing</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=rpg">RPG</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=simulation">Simulation</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=sports">Sports</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=strategy">Strategy</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="?category=survival">Survival</Link>
      </div>
    </div>
  )
}

