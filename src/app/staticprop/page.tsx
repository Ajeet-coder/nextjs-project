"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { characterstore, increment } from "@/redux/slice/characterSlice";
import { useGetcharacterQuery } from "@/redux/rtkquery/characterapi";

async function getCharacter() {
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}

const StaticProp = () => {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  // const data=useGetcharacterQuery(null);
  // console.log("rtk query ",JSON.stringify(data, null, 2))

  const getCharacterData = async () => {
    try {
      const allCharacters = await getCharacter();
      console.log("Values: ", allCharacters);
      dispatch(characterstore(allCharacters));
      console.log("Hloooo");
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  console.log("Hi ");
  console.log;

  return (
    <div>
      <button onClick={getCharacterData}>Get Character Data By redux</button>
    </div>
  );
};

export default StaticProp;
