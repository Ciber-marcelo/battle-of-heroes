import Image from "next/image";
import styles from "./styles.module.css";

export default function Header() {
   return (
      <div className={styles.main}>
         <div className={styles.container}>
            <Image
               width={40}
               height={40}
               src={'/images/icon.png'}
               alt="icon"
            />
            <h1 className={styles.hidden1}>BATTLE OF HEROES</h1>
            {/* <h1 className={styles.hidden2}>HEROES</h1> */}
         </div>
      </div>
   )
}