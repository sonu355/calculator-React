import { ACTIONS } from "./src/App";
import React from 'react'

export default function Digitbuttons({digit, dispatch}) {
  return (
    <>
   <button onClick={() => 
    dispatch({type: ACTIONS.ADD_DIGIT, payload: { digit } })
    }>{digit}</button>
    </>
  )
} 
      

