'use client'

import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { CharContext } from "@/contexts/context";
import styles from "./styles.module.css";
import Card from "../Card";
import HeroStats from "../Hero-stats";
import Search from "../Search";

export default function Section() {
   const [characters, setCharacters] = useState<any>(null);
   const [search, setSearch] = useState('');
   const { char1, char2, setCharacter1, setCharacter2 } = useContext(CharContext);

   useEffect(() => {
      getCharacter('batman')
   }, [])

   async function getCharacter(char: string) {
      setCharacters([])
      const response = await axios.get(`https://www.superheroapi.com/api.php/2450577805128827/search/${char}`);
      if (response.data.results !== undefined) { //faz a comparação do status 200 é melhor n ?
         setCharacters(response.data.results)
         console.log('sucesso', response.data.results)
      } else {
         setCharacters(null)
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
         <Search
            onChange={(e: any) => setSearch(e.target.value)}
            onClick={() => getCharacter(search)}
            onKeyDown={keyPress}
         />

         <div className={styles.containerChars1}>
            {characters !== null ?
               characters.map((item: any, i: any) => (
                  <Card
                     key={i}
                     image={item.image.url}
                     name={item.name}
                     realName={item['biography']['full-name']}
                     onClick={char1.name !== null ? () => setCharacter2(item) : () => setCharacter1(item)}
                  />
               ))
               :
               <div className={styles.notFound}>
                  {'NOT FOUND'}
               </div>
            }
         </div>

         <HeroStats />
      </div>
   )
}