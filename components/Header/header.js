import Image from "next/image"
import Logo from '../../assests/m_icon.svg'

import * as styles from './header.module.scss'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src={Logo} width={50} height={50} alt="icon" />
      </div>

      <div className={styles.navBar}>

        <ol>
          <li>About</li>
          <li>Experince</li>
          <li>Work</li>
          <li>Contact</li>
        </ol>

      <button className={styles.resumeButton}>
        Resume
      </button>
      </div>

    </div>
  )
}

export default Header