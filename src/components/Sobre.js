import React from "react";
import { Link } from "react-router-dom";

export default function Sobre(){
    return(<div className="page-sobre">
        <h2> Sobre nossa instituição </h2>
        <ul>
            <li><Link to={'/contatos'}>Contatos</Link></li>
            <li><Link to={'/endereço'}>Endereço</Link></li>
        </ul>
    </div>)
}