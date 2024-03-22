import Card from "../Card";
import styles from "./styles.module.css";

type Props = {
   image: any
   name: string
   realName: string
   combat: number 
   durability: number
   intelligence: number 
   power: number 
   speed: number 
   strength: number
}

export default function HeroStats({ image, name, realName, combat, durability, intelligence, power, speed, strength }: Props) {
   return (
      <div className={styles.card}>
         <Card
            image={image}
            name={name}
            realName={realName}
         />
         <div className={styles.stats}>
            <p>Combat: {combat}</p>
            <p>Durabity: {durability}</p>
            <p>Intelligence: {intelligence}</p>
            <p>Power: {power}</p>
            <p>Speed: {speed}</p>
            <p>Strenght: {strength}</p>
         </div>
      </div>
   )
}