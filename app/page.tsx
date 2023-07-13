import Link from 'next/link'

import Slider from './components/Slider';

import styles from './page.module.scss'


type GamesProps = {
  id: number;
  title: string;
  genres: [string];
  publisher: string;
  description: string;
  developer: string;
  coverImage: string;
}

type DataProps = {
  pageId?: number;
  limitId?: number;
}

async function getData({ pageId, limitId }: DataProps) {
  const result = await fetch(`http://localhost:3001/games?_page=${pageId}&_limit=${limitId}`)

  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  return result.json()
}

export default async function Home() {
  const page = 1
  const limit = 10

  const games = await getData({ pageId: page, limitId: limit })
  return (
    <main className={styles.Page}>
      <div className={styles.Card__Container}>
        <div className={styles.FeaturedRecommended}>
          {/* <button></button> */}
        </div>
        <Slider styles={styles}>
          {
            games.map((i: GamesProps, idx: number, array: any[]) => (
                <div className={styles.Card__Large}>
                  <img src={i.coverImage} />
                  <div className={styles.Card__Large__About}>
                    <h1>{i.title}</h1>
                    <h3>{i.description}</h3>
                    <span>Developer: <Link href={`/search?developer=${i.developer}`}>{i.developer}</Link></span>
                    <span>Publisher: <Link href={`/search?publisher=${i.publisher}`}>{i.publisher}</Link></span>
                  </div>
                </div>
            ))
          }
          </Slider>
      </div>
    </main>
  )
}
