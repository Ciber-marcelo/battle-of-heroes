import Card from "../Card";
import styles from "./styles.module.css";
import { useContext, useEffect, useState } from "react";
import { CharContext } from "@/contexts/context";
import axios from "axios";
import Search from "../Search";

export default function HeroList() {
   const [characters, setCharacters] = useState<any>(null);
   const { char1, setCharacter1, setCharacter2 } = useContext(CharContext);
   const [search, setSearch] = useState('');

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

   function keyPress(e: any) {
      if (e.keyCode === 13) {
         getCharacter(search);
      }
   }

   return (
      <div className={styles.main}>
         <div className={styles.containerSearch}>
            <Search
               onChange={(e: any) => setSearch(e.target.value)}
               onClick={() => getCharacter(search)}
               onKeyDown={keyPress}
            />
         </div>
         <div className={styles.containerChars}>
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
      </div>
   )
}