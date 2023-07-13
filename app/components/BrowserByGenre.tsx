import Link from "next/link";

type Props = {
  styles: {
    [key: string]: string;
  }
}

async function getData() {
  const result = await fetch('http://localhost:3001/genres')

  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  return result.json()
}

export default async function BrowserByGenre({ styles }: Props) {
  const genres = await getData()
  return (
    <div className={styles.BrowserByGenre}>
      <span className={styles.BrowserByGenre__Text}>BrowserByGenre</span>
      <div className={styles.BrowserByGenre__GroupLinks}>
        {
          genres.map((i: { id: number, name: string }) => {
            if (i.id < 9) return <Link key={i.id} className={styles.BrowserByGenre__GroupLinks__Link} href={`/store?category=${i.name.toString().replaceAll(' ', '-').toLowerCase()}`}>{i.name}</Link>
          })
        }
      </div>
      <div className={styles.BrowserByGenre__GroupLinks}>
        {
          genres.map((i: { id: number, name: string }) => {
            if (i.id > 9) return <Link key={i.id} className={styles.BrowserByGenre__GroupLinks__Link} href={`/store?category=${i.name.toString().replaceAll(' ', '-').toLowerCase()}`}>{i.name}</Link>
          })
        }
      </div>
    </div>
  )
}

