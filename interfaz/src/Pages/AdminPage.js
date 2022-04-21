import { useNavigate } from "react-router-dom";

export default function Admin(){

    const navigate = useNavigate();

    const handleClick= () =>{
        navigate("/");
    }

    return(
        <div>
            Administrador
            <button onClick={handleClick} >Salir</button>
        </div>        
    );

}