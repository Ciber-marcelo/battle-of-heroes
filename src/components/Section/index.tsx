'use client'

import axios from "axios"
import { useState } from "react";
import styles from "./styles.module.css";
import Card from "../Card";

export default function Section() {
   const [character, setCharacter] = useState<any>([]);
   const [search, setSearch] = useState('');

   async function getCharacter(char: any) {
      setCharacter([])

      const response = await axios.get(`https://www.superheroapi.com/api.php/2450577805128827/search/${char}`);
      if (response.data.results !== undefined) {
         setCharacter(response.data.results)
         console.log('sucesso', response.data.results)
      } else {
         console.log('erro, nenhum personagem encontrado', response.data.results)
      }
   }

   //o numero "13" é o codigo(keyCode) referente a tecla "Enter"
   function keyPress(e: any) {
      if (e.keyCode === 13) {
         getCharacter(search);
      }
   }

   return (
      <div className={styles.main}>
         <div>
            <input
               onChange={(e: any) => setSearch(e.target.value)}
               //sempre que vc aperta uma tecla do teclado, vc chama o "onKeyDown"
               onKeyDown={keyPress}
            />
            <button onClick={() => getCharacter(search)}>button</button>
         </div>

         <div className={styles.container}>
            {character.map((item: any, i: any) => (
               <Card
                  key={i}
                  image={item.image.url}
                  name={item.name}
                  realName={item['biography']['full-name']}
               />
            ))}
         </div>
      </div>
   )
}