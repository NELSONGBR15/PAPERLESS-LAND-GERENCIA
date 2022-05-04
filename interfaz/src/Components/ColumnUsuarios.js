import '../Styles/ColumnDatos.css'
import ColumnUsers from '../Components/ColumnUsers';


export default function ColumnUsuarios(){

    const user = JSON.parse(localStorage.getItem("userData"));

    return(
        <div>
            <ColumnUsers />
            <div className="ColumnDatos">            
                <div>
                    <div>Usuarios</div>
                </div>
            </div>   
        </div>   
    );

}