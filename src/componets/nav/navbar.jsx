import Image from 'next/image'
import styles from "./Navbar.module.css"
import logo from '../../../public/img/logo.svg'

export default function NavBar() {
  return (
    <div className={styles.container}><Image src={logo} alt='logo da smart' width={150} height={80}/></div>
  )
}
