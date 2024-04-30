import Image from "next/image";
import styles from "./styles.module.css";

export default function Footer() {
   return (
      <div className={styles.container}>
         <Image
            className={styles.image}
            width={30}
            height={30}
            src='/images/M.svg'
            alt='Logo Marcelo'
         />
         Developed by Marcelones
      </div>
   )
}