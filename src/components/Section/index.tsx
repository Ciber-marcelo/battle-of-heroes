'use client'

import axios from "axios"
import { useState } from "react";
import styles from "./styles.module.css";
import Card from "../Card";
import HeroStats from "../Hero-stats";
import Search from "../Search";

export default function Section() {
   const [character, setCharacter] = useState<any>([]);
   const [char1, setChar1] = useState<any>({
      image: null,
      name: null,
      realName: null,
      combat: null,
      durability: null,
      intelligence: null,
      power: null,
      speed: null,
      strength: null
   });
   const [char2, setChar2] = useState<any>({
      image: null,
      name: null,
      realName: null,
      combat: null,
      durability: null,
      intelligence: null,
      power: null,
      speed: null,
      strength: null
   });
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
      char1.name === null ?
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
         <Search
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

         <HeroStats
            image1={char1.image}
            name1={char1.name}
            realName1={char1.realName}
            combat1={char1.combat}
            durability1={char1.durability}
            intelligence1={char1.intelligence}
            power1={char1.power}
            speed1={char1.speed}
            strength1={char1.strength}

            image2={char2.image}
            name2={char2.name}
            realName2={char2.realName}
            combat2={char2.combat}
            durability2={char2.durability}
            intelligence2={char2.intelligence}
            power2={char2.power}
            speed2={char2.speed}
            strength2={char2.strength}
         />
      </div>
   )
}