import Head from 'next/head';
import Link from 'next/link'

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fake Company
        </h1>

        <button className={styles.btn}>
          <Link href='/hunts'>
            <a>
              Go to Hunts List
            </a>
          </Link>
        </button> 
      </main>

    </div>
  )
}
