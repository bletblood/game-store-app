import styles from './page.module.scss'

export default function page({
  searchParams
}:{
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams);
  return (
    <div className={styles.Search}>
      Search: {Object.values(searchParams)}
    </div>
  )
}