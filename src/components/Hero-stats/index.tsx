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
         {name1 !== null &&
            <div className={styles.card1}>
               <Card image={image1} name={name1} realName={realName1} />
               <div className={styles.stats}>
                  <p>{combat1}</p>
                  <p>{durability1}</p>
                  <p>{intelligence1}</p>
                  <p>{power1}</p>
                  <p>{speed1}</p>
                  <p>{strength1}</p>
               </div>
            </div>
         }

         <div className={styles.stats}>
            <p>Combat</p>
            <p>Durabity</p>
            <p>Intelligence</p>
            <p>Power</p>
            <p>Speed</p>
            <p>Strenght</p>
         </div>

         {name2 !== null && 
            <div className={styles.card2}>
               <Card image={image2} name={name2} realName={realName2} />
               <div className={styles.stats}>
                  <p>{combat2}</p>
                  <p>{durability2}</p>
                  <p>{intelligence2}</p>
                  <p>{power2}</p>
                  <p>{speed2}</p>
                  <p>{strength2}</p>
               </div>
            </div>
         }
      </div>
   )
}