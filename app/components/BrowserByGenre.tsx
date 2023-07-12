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
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=free-to-play">Free To Play</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=early-access">Early Access</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=action">Action</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=adventure">Adventure</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=casual">Casual</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=fps">FPS</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=fighting">Fighting</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=horror">Horror</Link>
      </div>
      <div className={styles.BrowserByGenre__GroupLinks}>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=multiplayer">Multiplayer</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=open-world">Open World</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=racing">Racing</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=rpg">RPG</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=simulation">Simulation</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=sports">Sports</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=strategy">Strategy</Link>
        <Link className={styles.BrowserByGenre__GroupLinks__Link} href="/store?category=survival">Survival</Link>
      </div>
    </div>
  )
}

