'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

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
      <div className={styles.teta}>
         <input
            onChange={(e: any) => setSearch(e.target.value)}
            //sempre que vc aperta uma tecla do teclado, vc chama o "onKeyDown"
            onKeyDown={keyPress}
         />

         <button onClick={() => getCharacter(search)}>button</button>

         {character.map((item: any, i: any) => (
            <div key={i}>
               {item.name}
               {item.powerstats.speed}
               <Image
                  width={240}
                  height={320}
                  src={item.image.url}
                  alt=""
               />
            </div>
         ))}
      </div>
   )
}