import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avunit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Hey, I&apos;m Avunit!</a>
        </h1>
        <p className={styles.description}>
          I&apos;m a tech geek. Thanks a lot Jonte for helping me with my website
        </p>

        <div className={styles.grid}>
          <a href="https://blog.avunit.tk" className={styles.card}>
            <h2>Read my blog! &rarr;</h2>
            <p>Updated weekly! (hopefully)</p>
          </a>

          <a href="https://troll.avunit.tk" className={styles.card}>
            <h2>Check out my troll website! &rarr;</h2>
            <p>Plagiarism is fine, right?!</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
          Thanks Jonte! You can copy my code, go ahead.
      </footer>
    </div>
  )
}
export default Home