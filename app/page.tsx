import dayjs from 'dayjs';
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

async function getAppInfo(appid: string) {
  const result = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appid}`)
  

  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  return result.json().then(i => console.log(i))
}

async function getLastUpdateGames() {
  const result = await fetch(`https://api.steampowered.com/IStoreService/GetAppList/v1/?key=${process.env.API_KEY}8&if_modified_since=${dayjs(new Date().getTime() - 604800000).unix()}&max_results=10`, {
    next: {
      revalidate: 60
    }
  })
  

  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  return result.json()
}

async function getData({ pageId, limitId }: DataProps) {
  const result = await fetch(`http://localhost:3001/games?_page=${pageId || Math.floor(Math.random() * 10)}&_limit=${limitId}`, {
    next: {
      revalidate: 60
    }
  })

  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  return result.json()
}

export default async function Home() {
  const page = 1
  const limit = 10

  const lastUpdateGames = await getLastUpdateGames().then(i => i.response.apps.map(({appid}: any) => getAppInfo(appid)))
  const games = await getData({ limitId: limit })

  return (
    <main className={styles.Page}>
      <div className={styles.Card__Container}>
        <div className={styles.FeaturedRecommended}>
          {/* <button></button> */}
        </div>
        <div className={styles.Card}>
          <div>
            <span>Most Popular</span>
          </div>
          <Slider size='lg'>
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
        <div className={styles.Card}>
          <div>
            <span>Latest Update</span>
          </div>
          <Slider size='md'>
            {
              games.map((i: GamesProps, idx: number, array: any[]) => (
                <div className={styles.Card__Medium}>
                  <Link href={`/store/${i.title.replaceAll(' ', '_')}`}>
                    <img src={i.coverImage} />
                  </Link>
                  <div className={styles.Card__Medium__About}>
                    <div className={styles.Card__Medium__Genres}>
                      {
                        i.genres.splice(0, 3).map((item: string) => (
                          <div className={styles.Card__Medium__Genres__Tag}><Link href={`/search?category=${item.toString().replaceAll(' ', '-').toLocaleLowerCase()}`}>{item}</Link></div>
                        ))
                      }
                    </div>
                    <div className={styles.Card__Medium__Price}>{Math.floor(Math.random() * 100) + '$'}</div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
        <div className={styles.Card}>
          {
            games.map((i: GamesProps, idx: number, array: any[]) => (
              <div className={styles.Card__Small}>
                <Link href={`/store/${i.title.replaceAll(' ', '_')}`}>
                  <img src={i.coverImage} />
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
