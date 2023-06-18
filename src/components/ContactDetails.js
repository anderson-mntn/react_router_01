import { useNavigate, useParams } from "react-router-dom";

function ContactDetails (props) {

    // const msg = 'Voltando para pagina principal....';

    // 6 - redirect - enviando o usuario para home (ou outro page) após concluir alguma ação
    const navigate = useNavigate();

    const handleContact = () => {
        setTimeout(()=>{

            //comunicação com o db
            console.log("Mensagem enviada, voltando para pagina principal")
            return navigate('/') // path para ser redirecionado
        }, 4000)
    }

    const { id } = useParams();

    return(<div>
          
        <h2>Exibindo contato numero: {id}</h2>
        <button onClick={handleContact}>Enviar Mensagem</button>
    </div>)
}

export default ContactDetails;