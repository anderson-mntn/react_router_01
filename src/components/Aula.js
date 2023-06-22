import React, { useEffect } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import dados from '../Dados';
import { type } from '@testing-library/user-event/dist/type';

export default function Aulas(){

    // const p = useLocation();
    const match = useMatch('/aulas/:id');
    const params = match.params.id;
    const aula = dados.filter(aula => aula.id == params)[0]

   
    useEffect(()=>{
        // console.log(p)
        //console.log(typeof(idDadoAula),"///", typeof(dados[0].id))
        console.log(aula.desc)

    })


    return(<div className="page-aulas">
       <h2>{aula.title}</h2>
       <p>{aula.desc}</p>
       

    </div>)
}