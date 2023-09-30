import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import {useRouter} from 'next/router'

function Header() {
    const Router = useRouter();
  return <>
  <div className={styles.headerContainer}>
<div>
<div className={styles.logo}>
  <Image
      src="/images/logo.png"
      alt="Website logo" 
      fill
      style={{objectFit:"contain"}}
    />
</div>
</div>
    <div className={styles.menuContainer}>
    <ul>
  <li>
        <Link href="/" className={Router.pathname == "/" ? styles.active : ""}>Home</Link>
    </li>
  <li>
        <Link href="/portfolio" className={Router.pathname == "/portfolio" ? styles.active : ""}>Portfolio</Link>
    </li>
    <li>
        <Link href="/about" className={Router.pathname == "/about" ? styles.active : ""}>About</Link>
    </li>
  </ul>
  <div className={styles.line}>
        </div>   
        </div>
  </div>
  </>
}

export default Header;