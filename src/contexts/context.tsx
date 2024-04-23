'use client'

import { createContext, useState } from 'react';

type Props1 = {
   image?: any
   name?: any
   realName?: any
   combat?: any
   durability?: any
   intelligence?: any
   power?: any
   speed?: any
   strength?: any
}

type Props2 = {
   image?: any
   name?: any
   realName?: any
   combat?: any
   durability?: any
   intelligence?: any
   power?: any
   speed?: any
   strength?: any
}

type CharContextProps = {
   char1: Props1
   char2: Props2
   setCharacter1: (item: any) => void
   setCharacter2: (item: any) => void
}

export const CharContext = createContext<CharContextProps>({} as CharContextProps);

export const CharProvider = ({ children }: { children: React.ReactNode }) => {
   const [char1, setChar1] = useState<Props1>({
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
   const [char2, setChar2] = useState<Props2>({
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

   function setCharacter1(char: any) {
      char !== null ?
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
         setChar1({
            image: null,
            name: null,
            realName: null,
            combat: null,
            durability: null,
            intelligence: null,
            power: null,
            speed: null,
            strength: null
         })
   }

   function setCharacter2(char: any) {
      char !== null ?
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
         :
         setChar2({
            image: null,
            name: null,
            realName: null,
            combat: null,
            durability: null,
            intelligence: null,
            power: null,
            speed: null,
            strength: null
         })
   }

   return (
      <CharContext.Provider value={{ char1, char2, setCharacter1, setCharacter2 }}>
         {children}
      </CharContext.Provider>
   )
}


