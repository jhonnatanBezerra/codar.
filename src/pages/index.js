import Link from 'next/link'
import { Header } from '../Components/Header'
import styles from '../styles/Pages/home.module.css'

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <Header />

      <main className={styles.mainHome}>
        <img src="./assets/video_call.png" alt="imagem" />
        <section className={styles.sectionHome}>
          <h2>Alavanque seu negócio com um</h2>
          <h1>Website incrível</h1>
          <Link href="/">
            <button>Solicitar orçamento</button>
          </Link>
        </section>
      </main>

    </div>
  )
}
