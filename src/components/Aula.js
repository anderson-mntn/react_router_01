import React, { useEffect } from 'react'
import { useLocation, useMatch } from 'react-router-dom'

export default function Aulas(){

    const p = useLocation();
    const match = useMatch('/aulas/:id');
   
    useEffect(()=>{
        //console.log(p)
        console.log(match)
    })


    return(<div className="page-aulas">
       hi
    </div>)
}