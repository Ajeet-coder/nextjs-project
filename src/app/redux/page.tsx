"use client";
import TestClient from "@/component/TestClient";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  characterstore,
  increment,
  incrementByAmount,
} from "@/redux/slice/characterSlice";
import { useRouter } from "next/navigation";

import React from "react";

async function getCharacter() {
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}

const page = () => {
  const router = useRouter();

  return (
    <div>
      <TestClient />
      <button onClick={() => router.push(`/server`)}>go to server page</button>
    </div>
  );
};

export default page;
