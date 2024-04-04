import Card from "../Card";
import styles from "./styles.module.css";

type Props = {
   image1?: any
   name1?: string
   realName1?: string
   combat1?: number
   durability1?: number
   intelligence1?: number
   power1?: number
   speed1?: number
   strength1?: number

   image2?: any
   name2?: string
   realName2?: string
   combat2?: number
   durability2?: number
   intelligence2?: number
   power2?: number
   speed2?: number
   strength2?: number
}

export default function HeroStats({
   image1,
   name1,
   realName1,
   combat1,
   durability1,
   intelligence1,
   power1,
   speed1,
   strength1,

   image2,
   name2,
   realName2,
   combat2,
   durability2,
   intelligence2,
   power2,
   speed2,
   strength2
}: Props) {

   return (
      <div className={styles.main}>
         <div className={styles.card}>
            {name1 !== null && <Card image={image1} name={name1} realName={realName1} />}
         </div>

         <div className={styles.containerStats1}>
            <div className={styles.containerStats2}>
               <div className={styles.stats}>
                  <p>{!combat1 ? '?' : combat1}</p>
                  <p>{!durability1 ? '?' : durability1}</p>
                  <p>{!intelligence1 ? '?' : intelligence1}</p>
                  <p>{!power1 ? '?' : power1}</p>
                  <p>{!speed1 ? '?' : speed1}</p>
                  <p>{!strength1 ? '?' : strength1}</p>
               </div>

               <div className={styles.stats}>
                  <p>COMBAT</p>
                  <p>DURABILITY</p>
                  <p>INTELLIGENCE</p>
                  <p>POWER</p>
                  <p>SPEED</p>
                  <p>STRENGTH</p>
               </div>

               <div className={styles.stats}>
                  <p>{!combat2 ? '?' : combat2}</p>
                  <p>{!durability2 ? '?' : durability2}</p>
                  <p>{!intelligence2 ? '?' : intelligence2}</p>
                  <p>{!power2 ? '?' : power2}</p>
                  <p>{!speed2 ? '?' : speed2}</p>
                  <p>{!strength2 ? '?' : strength2}</p>
               </div>
            </div>

            <button className={styles.button}>FIGHT</button>
         </div>

         <div className={styles.card}>
            {name2 !== null && <Card image={image2} name={name2} realName={realName2} />}
         </div>
      </div>
   )
}