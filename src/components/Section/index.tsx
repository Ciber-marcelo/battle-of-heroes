/* eslint-disable @next/next/no-img-element */
'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Section() {
   const [character, setCharacter] = useState<any>({
      name: '',
      image: '',
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: '',
   });
   const [search, setSearch] = useState('');

   // useEffect(() => {
   //    getCharacters()
   // }, [])

   async function getCharacter(char: any) {
      try {
         setCharacter({name: '', image: ''})

         const response = await axios.get(`https://www.superheroapi.com/api.php/2450577805128827/search/${char}`);
         setCharacter({
            name: response.data.results[0].name,
            image: response.data.results[0].image.url,
            intelligence: response.data.results[0].powerstats.intelligence,
            strength: response.data.results[0].powerstats.strength,
            speed: response.data.results[0].powerstats.speed,
            durability: response.data.results[0].powerstats.durability,
            power: response.data.results[0].powerstats.power,
            combat: response.data.results[0].powerstats.combat,
         })
         console.log('sucesso', response.data.results[0].name)
      } catch (error) {
         console.log(error)
      }
   }

   //o numero "13" é o codigo(keyCode) referente a tecla "Enter"
   function keyPress(e: any) {
      if (e.keyCode === 13) {
         getCharacter(search);
      }
   }

   return(
      <div className={styles.teta}>
         <input 
            onChange={(e: any) => setSearch(e.target.value)}
            //sempre que vc aperta uma tecla do teclado, vc chama o "onKeyDown"
            onKeyDown={keyPress}
         />

         <button onClick={() => getCharacter(search)}>button</button>
         
         {character.name !== '' ?
            <div> 
               <p>{character.name}</p>
               <img 
                  width={240}
                  height={320}
                  src={character.image} 
                  alt="hero-image"
               />
               <p>INTELLIGENCE: {character.intelligence}</p>
               <p>STRENGTH: {character.strength}</p>
               <p>SPEED: {character.speed}</p>
               <p>DURABILITY: {character.durability}</p>
               <p>POWER: {character.power}</p>
               <p>COMBAT: {character.combat}</p>
            </div>
            : 
            'Nada...'
         }
      </div>
   )
}