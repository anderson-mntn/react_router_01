import React from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () =>{

    const { id } = useParams();

    return(<div>
        <h2>Exibindo contato numero: {id}</h2>
    </div>)
}

export default ContactDetails;