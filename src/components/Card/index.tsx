import Image from "next/image"
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type cardProps = {
   image?: any
   name?: string
   realName?: string
   onClick?: any
}

export default function Card({ image, name, realName, onClick }: cardProps) {
   const [imgAdjust, setImgAdjust] = useState(image);
   const [error, setError] = useState(false);

   useEffect(() => {
      setImgAdjust(image);
      setError(false);
    }, [image]);

   const handleError = () => {
      setError(true);
      setImgAdjust('/images/none.png');
    };
  
    const handleLoad = () => {
      setError(false);
    };

   return (
      <button className={styles.card} onClick={onClick}>
         <Image
            className={styles.image}
            width={180}
            height={240}
            src={imgAdjust}
            alt="image hero"
            priority={true}
            onError={handleError}
            onLoad={handleLoad}
         />

         <div className={styles.text}>
            <p className={styles.t1}>{name}</p>
            <p className={styles.t2}>{realName}</p>
         </div>
      </button>
   )
}