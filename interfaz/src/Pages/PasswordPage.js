import { useNavigate } from "react-router-dom";

export default function PasswordPage(){

    const navigate = useNavigate();

    const handleClick= () =>{ navigate("/") }

    return(
        <div>
            OLVIDE MI CONTRASEÑA
            <button onClick={handleClick} >Go Back</button>           
        </div>        
    );

}