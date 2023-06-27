import { Link } from "react-router-dom"
import AuthButton from "./AuthButton"

export default function Header(){
    return(<div className="header-div">
        <h1>Header</h1>
        <ul>
            <AuthButton/>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/aulas`}>Aulas</Link></li>
            <li><Link to={`/sobre`}>Sobre</Link></li>
            <li><Link to={`/contatos`}>Contatos</Link></li>
        </ul>
        
    </div>)
}