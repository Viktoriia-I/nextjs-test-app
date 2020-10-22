import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>Timer</div>
        <div>Checked users: </div>
      </header>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <input className={styles.searchInput} type="text"/>

          <div className={styles.usersList}>
            <div className={styles.row}>
              <div className={styles.col1}>id</div>
              <div className={styles.col2}>avatar</div>
              <div className={styles.col3}>first name</div>
              <div className={styles.col4}>last name</div>
              <div className={styles.col5}>
                <button>Checked</button>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col1}>id</div>
              <div className={styles.col2}>avatar</div>
              <div className={styles.col3}>first name</div>
              <div className={styles.col4}>last name</div>
              <div className={styles.col5}>
                <button>Checked</button>
              </div>
            </div>
          </div>
        </div>

        <button>More users</button>
      
      </main>

      <footer className={styles.footer}>
       <div>Next.js Tutorial</div>
      </footer>
    </div>
  )
}
