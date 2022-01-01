import React from 'react'

export default function ListRendering() {


    // let emplist=["Ankitha","Kavya","Aparna","Sam"]
    let emplist =[

{
name:"kavya",
salary:30000,
email:"kavya@gmail.com"

},



{
    name:"sam",
    salary:50000,
    email:"sam@gmail.com"
    
    },



    
{
    name:"vidya",
    salary:70000,
    email:"vidya@gmail.com"
    
    }

 ]






    return (
        <div>
            <h1>ListRendering</h1>
            {/* {
                 emplist.map(element  => (

                     <h1> {element}</h1>
                 ))
                 }      */}


             {
               emplist.map(
                  
                   empdata=>
                   <>
                    <p> {empdata.name}</p>
                    <p> {empdata.salary}</p>
                    <p>{empdata.email}
                    </p>
                   </>
               )  
                }
        </div>
    )
}
