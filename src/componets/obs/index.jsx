import Image from 'next/image'
import styles from './Observacoes.module.css'

export default function Ps({name, imagem, imagem2, imagem3 ,desc, desc2,desc3,next,id}) {
  return (
    <div className={styles.obs}>
    <p>{name}</p>
    <div className={styles.informacoes}>
        <Image src={imagem} width={45} height={45} className={id === 3 || id === 4 ?styles.foto : styles.foto1} alt='item 1'/>
        <Image src={imagem2} width={45} height={45} alt='item 2' className={next === true ? styles.foto : styles.foto2}/>
        <Image src={imagem3} width={45} height={45} alt='item 3' className={next === true ? styles.visivel : styles.invisivel}/>
    </div>
    <div className={styles.descriptions}>
        <p className={id === 3 ?styles.paragrafosmall: styles.paragrafo}>{desc}</p>
        <p>{desc2}</p>
        <p className={next === true ? styles.Pvisivel : styles.invisivel}>{desc3}</p>
    </div>
</div>
  )
}
