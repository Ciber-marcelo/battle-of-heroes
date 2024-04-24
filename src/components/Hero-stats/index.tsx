import Card from "../Card";
import styles from "./styles.module.css";
import { useContext } from "react";
import { CharContext } from "@/contexts/context";

type Props = {
   char1: {
      image?: any
      name?: any
      realName?: any
      combat?: any
      durability?: any
      intelligence?: any
      power?: any
      speed?: any
      strength?: any
   }

   char2: {
      image?: any
      name?: any
      realName?: any
      combat?: any
      durability?: any
      intelligence?: any
      power?: any
      speed?: any
      strength?: any
   }
}

export default function HeroStats({char1, char2}: Props) {
   const {setCharacter1, setCharacter2} = useContext(CharContext);

   return (
      <div className={styles.main}>
         <div className={styles.card}>
            {char1.name !== null && <Card image={char1.image} name={char1.name} realName={char1.realName} />}
         </div>

         <div className={styles.containerStats1}>
            <div className={styles.containerStats2}>
               <div className={styles.stats}>
                  <p>{char1.combat === 'null' || char1.combat === null ? '?' : char1.combat}</p>
                  <p>{char1.durability === 'null' || char1.combat === null ? '?' : char1.durability}</p>
                  <p>{char1.intelligence === 'null' || char1.combat === null ? '?' : char1.intelligence}</p>
                  <p>{char1.power === 'null' || char1.combat === null ? '?' : char1.power}</p>
                  <p>{char1.speed === 'null' || char1.combat === null ? '?' : char1.speed}</p>
                  <p>{char1.strength === 'null' || char1.combat === null ? '?' : char1.strength}</p>
                  {char1.name !== null && <button onClick={() => setCharacter1(null)} className={styles.buttonX}>X</button>}
               </div>

               <div className={styles.stats}>
                  <p>COMBAT</p>
                  <p>DURABILITY</p>
                  <p>INTELLIGENCE</p>
                  <p>POWER</p>
                  <p>SPEED</p>
                  <p>STRENGTH</p>
                  <button className={styles.button}>FIGHT</button>
               </div>

               <div className={styles.stats}>
                  <p>{char2.combat === 'null' || char2.combat === null ? '?' : char2.combat}</p>
                  <p>{char2.durability === 'null' || char2.combat === null ? '?' : char2.durability}</p>
                  <p>{char2.intelligence === 'null' || char2.combat === null ? '?' : char2.intelligence}</p>
                  <p>{char2.power === 'null' || char2.combat === null ? '?' : char2.power}</p>
                  <p>{char2.speed === 'null' || char2.combat === null ? '?' : char2.speed}</p>
                  <p>{char2.strength === 'null' || char2.combat === null ? '?' : char2.strength}</p>
                  {char2.name !== null && <button onClick={() => setCharacter2(null)} className={styles.buttonX}>X</button>}
               </div>
            </div>
         </div>

         <div className={styles.card}>
            {char2.name !== null && <Card image={char2.image} name={char2.name} realName={char2.realName} />}
         </div>
      </div>
   )
}