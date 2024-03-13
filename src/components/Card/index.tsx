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
            width={180}
            height={240}
            src={image}
            alt="image hero"
         />
         <div className={styles.text}>
            <p className={styles.t1}>{name}</p>
            <p className={styles.t2}>{realName}</p>
         </div>
      </div>
   )
}