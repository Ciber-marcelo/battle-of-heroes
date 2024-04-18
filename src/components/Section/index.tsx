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
   const {char1, char2, setChar} = useContext(CharContext);
   
   useEffect(() => {
      getCharacter('batman')
   }, [])

   async function getCharacter(char: string) {
      setCharacters([])
      const response = await axios.get(`https://www.superheroapi.com/api.php/2450577805128827/search/${char}`);
      if (response.data.results !== undefined) {
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

         <div className={styles.containerChars}>
            <div className={styles.containerChars2}>
               {characters !== null ?
                  characters.map((item: any, i: any) => (
                     <Card
                        key={i}
                        image={item.image.url}
                        name={item.name}
                        realName={item['biography']['full-name']}
                        onClick={() => setChar(item)}
                     />
                  ))
                  :
                  <div className={styles.notFound}>
                     {'NOT FOUND'}
                  </div>
               }
            </div>
         </div>

         <HeroStats
            image1={char1.image}
            name1={char1.name}
            realName1={char1.realName}
            combat1={parseInt(char1.combat)}
            durability1={parseInt(char1.durability)}
            intelligence1={parseInt(char1.intelligence)}
            power1={parseInt(char1.power)}
            speed1={parseInt(char1.speed)}
            strength1={parseInt(char1.strength)}

            image2={char2.image}
            name2={char2.name}
            realName2={char2.realName}
            combat2={parseInt(char2.combat)}
            durability2={parseInt(char2.durability)}
            intelligence2={parseInt(char2.intelligence)}
            power2={parseInt(char2.power)}
            speed2={parseInt(char2.speed)}
            strength2={parseInt(char2.strength)}
         />
      </div>
   )
}