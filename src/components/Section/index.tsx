'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Section() {
   const [character, setCharacter] = useState('');
   const [search, setSearch] = useState('');

   // useEffect(() => {
   //    getCharacters()
   // }, [])

   async function getCharacter(char: any) {
      try {
         setCharacter('')
         const response = await axios.get(`https://www.superheroapi.com/api.php/2450577805128827/search/${char}`);
         setCharacter(response.data.results[0].name)
         console.log('sucesso', response.data.results[0].name)
      } catch (error) {
         console.log(error)
      }
   }

   return(
      <div className={styles.teta}>
         <input onChange={(e: any) => setSearch(e.target.value)}></input>
         <button onClick={() => getCharacter(search)}>button</button>
         {character !== '' ? character : 'Nada...'}
      </div>
   )
}