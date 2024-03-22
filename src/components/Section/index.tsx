'use client'

import axios from "axios"
import { useState } from "react";
import styles from "./styles.module.css";
import Card from "../Card";
import Input from "../Input";
import HeroStats from "../Hero-stats";

export default function Section() {
   const [character, setCharacter] = useState<any>([]);
   const [char1, setChar1] = useState<any>(null);
   const [char2, setChar2] = useState<any>(null);
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

   function setChar(char: any) {
      char1 === null ?
         setChar1({
            image: char.image.url,
            name: char.name,
            realName: char['biography']['full-name'],
            combat: char.powerstats.combat,
            durability: char.powerstats.durability,
            intelligence: char.powerstats.intelligence,
            power: char.powerstats.power,
            speed: char.powerstats.speed,
            strength: char.powerstats.strength
         })
         :
         setChar2({
            image: char.image.url,
            name: char.name,
            realName: char['biography']['full-name'],
            combat: char.powerstats.combat,
            durability: char.powerstats.durability,
            intelligence: char.powerstats.intelligence,
            power: char.powerstats.power,
            speed: char.powerstats.speed,
            strength: char.powerstats.strength
         })
      // console.log(char)
   }

   return (
      <div className={styles.main}>
         <Input
            onChange={(e: any) => setSearch(e.target.value)}
            onClick={() => getCharacter(search)}
            onKeyDown={keyPress}
         />

         <div className={styles.containerChars}>
            {character.map((item: any, i: any) => (
               <Card
                  key={i}
                  image={item.image.url}
                  name={item.name}
                  realName={item['biography']['full-name']}
                  onClick={() => setChar(item)}
               />
            ))}
         </div>

         <div className={styles.containerStats}>
            {char1 !== null &&
               <HeroStats
                  image={char1.image}
                  name={char1.name}
                  realName={char1.realName}
                  combat={char1.combat}
                  durability={char1.durability}
                  intelligence={char1.intelligence}
                  power={char1.power}
                  speed={char1.speed}
                  strength={char1.strength}
               />
            }

            {char2 !== null &&
               <HeroStats
                  image={char2.image}
                  name={char2.name}
                  realName={char2.realName}
                  combat={char2.combat}
                  durability={char2.durability}
                  intelligence={char2.intelligence}
                  power={char2.power}
                  speed={char2.speed}
                  strength={char2.strength}
               />
            }
         </div>
      </div>
   )
}