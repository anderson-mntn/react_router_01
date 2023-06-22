import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default function Assistir(){

    const query = useQuery()

    useEffect(()=>{
        console.log(query.get('v'))
        // dentro de <prototype> terá métodos que podemos usar
        //query é o que vem depois do interrogação
    })

    return(<div className="page">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${query.get('v')}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* http://localhost:3000/assistir?v=Bq4rmeIvJbs agora o video pode carregar apenas colocando o final do embed code na nossa barra de endereço*/}
    </div>)
}