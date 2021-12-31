import React, { useState } from 'react'

export default function StateinFunctionalComponents() {
let [name,updateName]= useState("Akhila")
let [count,updateCount]=useState(0)

    return (
        <div>
           <h1 onMouseOver={() => {updateName("Akhila P")}}
           onMouseLeave={()=>{updateName("Akhila")}}>
               {name}
           </h1>
            <h2 onMouseOver={() => {updateCount(count+1)}}
            onMouseLeave={() => {updateCount(count-1)}}
         onMouseDown={() => {updateCount(count+1)}}
            
            >{count}</h2>

               
        </div>
    )
}
