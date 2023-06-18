import React from "react";
import { Link } from "react-router-dom";

export default function Contatos(){
    return(<div>
        <h2>Página de Contatos</h2>
        {/* 5 - neste routes - podemos extrair o "id" como algo do banco de dados*/}
        <Link to={'/contatos/1'}>
            <p>Forma de contato 1: 11 4002-8922</p>
        </Link>
        <Link to={'/contatos/2'}>
            <p>Forma de contado 2: 21 99765-4321</p>
        </Link>
        <Link to={'/contatos/3'}>
            <p>Forma de contado 3: 41 9859-1221</p>
        </Link>
    </div>)
}