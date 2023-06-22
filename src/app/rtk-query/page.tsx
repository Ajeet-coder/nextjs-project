"use client";
import { useGetcharacterQuery } from '@/redux/rtkquery/characterapi';
import React from 'react'


// async function getCharacter() {
//     return await (
//       await fetch("https://rickandmortyapi.com/api/character")
//     ).json();
//   }
const page = () => {

    
      const data=useGetcharacterQuery(null);
      if(data.isLoading){
        return(
            <h1>loading....</h1>
        )
      }
  console.log("rtk query ",JSON.stringify(data, null, 2))

  
  return (
    <div>
      <button >Get Character Data By redux</button>
    </div>
  );
}

export default page
