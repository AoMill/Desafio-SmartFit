import Image from "next/image"
import styles from "./Footer.module.css"
import logo from '../../../public/img/logo.svg'

export default function Footer() {
  return (
    <footer className={styles.container}>
        <Image src={logo} alt='logo da smart' width={80} height={60}/>
        <p className={styles.desc}>Todos os direitos reservados - 2020</p>
    </footer>
  )
}
