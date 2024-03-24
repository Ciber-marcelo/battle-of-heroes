import styles from "./styles.module.css";

type inputProps = {
   onChange: any
   onKeyDown: any
   onClick: any
}

export default function Search({ onChange, onKeyDown, onClick }: inputProps) {
   return (
      <div className={styles.container}>
         <input
            className={styles.input}
            onChange={onChange}
            //sempre que vc aperta uma tecla do teclado, vc chama o "onKeyDown"
            onKeyDown={onKeyDown}
         />
         <button 
            onClick={onClick}
            className={styles.button}
         >
            Search
         </button>
      </div>
   )
}