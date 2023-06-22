import React, { useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import dados from '../Dados';

export default function Aulas(){

    const match = useMatch('/aulas/:id');
    const params = match.params.id;

    const [aula, setAula] = useState({})
    useEffect(()=>{
        setAula(dados.filter(aula => aula.id == params)[0])
    }, [params])  
  
    
    return(<div className="page-aulas">
       <h2>{aula.title}</h2>
       <p>{aula.desc}</p>
    </div>)
}