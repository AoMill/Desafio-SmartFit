import Image from "next/image"
import styles from "./Cards.module.css"

export default function Cards({title, content, mask, towel,fountain,locker_room,schedules,opened}) {
  function loocker(){
    if(locker_room === "allowed"){
     return <Image src="/img/required-lockerroom.png" width={50} height={50} alt="Informação sobre banheiro"/>
    }else if(locker_room === "partial"){
      return <Image src="/img/partial-lockerroom.png" width={50} height={50} alt="Informação sobre banheiro"/>
    }else{
      return <Image src="/img/forbidden-lockerroom.png" width={50} height={50} alt="Informação sobre banheiro"/>
    }
  }
  const regex = /(<([^>]+)>|&.*;)/g
  return (
    <section className={styles.container}>
        <div className={styles.card}>
        <div className={styles.cardInfo}>
            <p className={opened === true? styles.open: styles.close}>{opened=== true ? "Aberto":"Fechado"}</p>
            <h2 className={styles.titulo}>{title}</h2>
            <p className={styles.endereco} >{content? content.replace(regex, ""):null}</p>
            <div className={styles.divisoria}></div>
            <div className={styles.imagens}>
               {mask === "required" ? <Image src="/img/required-mask.png" width={50} height={50} alt="Informação sobre mascara"/>: <Image src="/img/recommended-mask.png" width={50} height={50} alt="Informação sobre mascara"/> }
               {towel === "required" ? <Image src="/img/required-towel.png" width={50} height={50} alt="Informação sobre toalha"/>: <Image src="/img/recommended-towel.png" width={50} height={50} alt="Informação sobre toalha"/> }
               {fountain === "partial" ? <Image src="/img/partial-fountain.png" width={50} height={50} alt="Informação sobre garrafa" />: <Image src="/img/forbidden-fountain.png" width={50} height={50} alt="garrafa"/> }
                {loocker()}
            </div>
            <ul className={styles.horarios}>
              {
               schedules? schedules.map((event, index) =>{ 
                  return <li key={index}   className={styles.lista}><b>{event.weekdays}</b> {event.hour}</li>}):null
              }   
            </ul>
        </div>
        </div>
    </section>
  )
}
