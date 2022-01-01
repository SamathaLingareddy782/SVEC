import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import FormRendering from './FormRendering'
import ListRendering from './ListRendering'
import StateinFunctionalComponents from './StateinFunctionalComponents'
export default function Home() {
    return (
    
    
            <div>
            <BrowserRouter>
            <Routes>
            
              <Route path ="/home" element ={<Main/>}></Route>
              <Route path ="/login" element={<FormRendering/>}></Route>
              <Route path ="/home" element ={<FormRendering/>}></Route>
              <Route path ="/home" element ={<ListRendering/>}></Route>
              <Route path ="/home" element ={<StateinFunctionalComponents/>}></Route>
            </Routes>
            </BrowserRouter>
            {/* <FormRendering/>
            <ListRendering/>
            <StateinFunctionalComponents/>  */}

        </div>
/* 
           <div> 
            <BrowserRouter>
            <Routes>
              <Route path ="/home" element ={<FormRendering/>}></Route>
           </Routes>
            </BrowserRouter>
          </div>
           <div>
            <BrowserRouter>
            <Routes>
              <Route path ="/home" element ={<ListRendering/>}></Route>
           </Routes>
            </BrowserRouter>
            </div>


            <div>
            <BrowserRouter>
            <Routes>
              <Route path ="/home" element ={<StateinFunctionalComponents/>}></Route>
           </Routes>
            </BrowserRouter>
            </div> 
  */

   
    )
}

 function Main(){

    return (
        <>
        <h1>:: Home Page ::</h1>
        <Link to= "/login"><button>login</button></Link>
        </>
    )
 }
