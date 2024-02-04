'use client'

import axios from "axios"
import { useEffect, useState } from "react";

export default function Section() {
   const [character, setCharacter] = useState([]);

   useEffect(() => {
      getCharacters()
   }, [])

   async function getCharacters() {
      try {
         const response = await axios.get("https://www.superheroapi.com/api.php/2450577805128827/search/hulk");
         setCharacter(response.data.results[0].name)
         console.log('sucesso', response.data.results[0].name)
      } catch (error) {
         console.log(error)
      }
   }

   return(
      <div>teste 2s {character}</div>
   )
}