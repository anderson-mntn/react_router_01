import React from "react";

export default function Header(){
    return(<div className="header-div">
        <h1>Header</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aulas">Aulas</a></li>
            <li><a href="/sobre">Sobre</a></li>
        </ul>
    </div>)
}