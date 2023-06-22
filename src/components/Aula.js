import React, { useEffect } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import dados from '../Dados';

export default function Aulas(){

    // const p = useLocation();
    const match = useMatch('/aulas/:id');
    const idDadoAula = match.params.id;

   
    useEffect(()=>{
        // console.log(p)
        console.log(match)
    })


    return(<div className="page-aulas">
       <h2>{dados[idDadoAula].title}</h2>
       <p>{dados[idDadoAula].desc}</p>
       

    </div>)
}