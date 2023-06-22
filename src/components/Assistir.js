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
    })

    return(<div className="page">
        query é o que vem depois do interrogação
    </div>)
}