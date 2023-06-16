import React from 'react'

import artigos from '../Artigos'

export default function Aulas(){
    return(<div className="page-aulas">
        <h2>Artigos</h2>
        <ul className='aulas-ul'>
            {artigos.map(artigo => <li {...artigo.id}>Titulo do artigo: {artigo.title} | Descrição do Artigo: {artigo.desc}</li>)}
        </ul>
    </div>)
}