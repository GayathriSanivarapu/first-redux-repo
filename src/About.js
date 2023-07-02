import React from 'react'
import { useSelector } from 'react-redux'

export default function About() {

    const countData = useSelector((state)=>state.myReducer.count)
  return (
    <>
    <div>About</div>
    <p>{countData}</p>
    </>
  )
}
