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

const CharContext = createContext({});

export const CharProvider = ({children}: {children: React.ReactNode}) => {
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

   return (
      <CharContext.Provider value={{char1, char2}}>
         {children}
      </CharContext.Provider>
   )
}


