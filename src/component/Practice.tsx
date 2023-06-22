"use client"
import { useAppSelector } from '@/redux/hooks';
import { useGetcharacterQuery } from '@/redux/rtkquery/characterapi';
import React from 'react'

function Practice() {
  const count:any = useAppSelector((state) => state.counterReducer.value);
  console.log("Count  ",count)
  const data=useGetcharacterQuery(null);
    console.log("rtk query ",data)
    return (
      <div>
        <h1>{count}</h1>
        Partial rendering1
      </div>
    )
}

export default Practice
