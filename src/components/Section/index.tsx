import axios from "axios"
import { useEffect, useState } from "react";

export default function Section() {
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      getCharacters()
   }, [])

   async function getCharacters() {
      try {
         const response = await axios.get("https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json");
         setCharacters(response.data.itens)
         console.log('sucesso', response.data.itens)
      } catch (error) {
         console.log(error)
      }
   }

   return(
      <div>teste</div>
   )
}