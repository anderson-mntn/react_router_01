import React, { useEffect } from 'react'

import dados from '../Dados'
import { Link, useLocation } from 'react-router-dom'

export default function Aulas(){
    
    // pegando o valor da barra de endereço com useMath, que retorna um obj contendo .url
    // const lc = useLocation();
    
    // useEffect(()=>{
    //     console.log(lc)
    // })

    return(<div className="page-aulas">
        <h2>Aulas</h2>
        <ul className='aulas-ul'>
            {dados.map(dado => <li {...dado.id} key={dado.id} ><Link to={`${dado.id}`} className='page-aulas-li'>{dado.title} </Link>| Descrição do Artigo: {dado.desc}</li>)}
        </ul>

    </div>)
}