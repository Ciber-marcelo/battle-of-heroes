import Image from "next/image"
import styles from "./styles.module.css";

type cardProps = {
   image: any
   name: string
   realName: string
}

export default function Card({image, name, realName}: cardProps) {
   return(
      <div className={styles.card}>
         <Image
            className={styles.image}
            width={120}
            height={140}
            src={image}
            alt=""
         />
         <p>{name}</p>
         <p>{realName}</p>
      </div>
   )
}