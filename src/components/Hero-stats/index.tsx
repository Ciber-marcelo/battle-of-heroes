import Card from "../Card";
import styles from "./styles.module.css";

type Props = {
   char1: {
      image?: any
      name?: string
      realName?: string
      combat?: number
      durability?: number
      intelligence?: number
      power?: number
      speed?: number
      strength?: number
   }

   char2: {
      image?: any
      name?: string
      realName?: string
      combat?: number
      durability?: number
      intelligence?: number
      power?: number
      speed?: number
      strength?: number
   }
}

export default function HeroStats({char1, char2}: Props) {
   return (
      <div className={styles.main}>
         <div className={styles.card}>
            {char1.name !== null && <Card image={char1.image} name={char1.name} realName={char1.realName} />}
         </div>

         <div className={styles.containerStats1}>
            <div className={styles.containerStats2}>
               <div className={styles.stats}>
                  <p>{!char1.combat ? '?' : char1.combat}</p>
                  <p>{!char1.durability ? '?' : char1.durability}</p>
                  <p>{!char1.intelligence ? '?' : char1.intelligence}</p>
                  <p>{!char1.power ? '?' : char1.power}</p>
                  <p>{!char1.speed ? '?' : char1.speed}</p>
                  <p>{!char1.strength ? '?' : char1.strength}</p>
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
                  <p>{!char2.combat ? '?' : char2.combat}</p>
                  <p>{!char2.durability ? '?' : char2.durability}</p>
                  <p>{!char2.intelligence ? '?' : char2.intelligence}</p>
                  <p>{!char2.power ? '?' : char2.power}</p>
                  <p>{!char2.speed ? '?' : char2.speed}</p>
                  <p>{!char2.strength ? '?' : char2.strength}</p>
               </div>
            </div>

            <button className={styles.button}>FIGHT</button>
         </div>

         <div className={styles.card}>
            {char2.name !== null && <Card image={char2.image} name={char2.name} realName={char2.realName} />}
         </div>
      </div>
   )
}