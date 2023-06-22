import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment } from '@/redux/slice/characterSlice';
import React from 'react'

const TestClient = () => {
    const count = useAppSelector((state) => state.counterReducer.value);

  const dispatch = useAppDispatch();
  return (
    <div>
        <h1>{count}</h1>
       <button onClick={() => dispatch(increment())}>Increament</button>
    </div>
  )
}

export default TestClient
