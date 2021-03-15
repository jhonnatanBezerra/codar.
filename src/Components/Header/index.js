import Link from 'next/link'
import styles from '../../styles/Components/header.module.css';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <h1>Codar<span>.</span></h1>
        </div>

        <div className={styles.headerLinks}>
          <Link href="/">Início</Link>
          <Link href="/">Serviços</Link>
          <Link href="/">Contato</Link>

          <Link href="/">
            <button>Login</button>
          </Link>

        </div>
      </header>
    </>
  )

}