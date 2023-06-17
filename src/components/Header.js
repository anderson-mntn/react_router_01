import { Link } from "react-router-dom"

export default function Header(){
    return(<div className="header-div">
        <h1>Header</h1>
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/aulas`}>Aulas</Link></li>
            <li><Link to={`/sobre`}>Sobre</Link></li>
        </ul>
    </div>)
}