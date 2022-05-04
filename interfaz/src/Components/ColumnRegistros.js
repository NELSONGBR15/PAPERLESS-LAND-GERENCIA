import '../Styles/ColumnDatos.css'
import ColumnUsers from '../Components/ColumnUsers';

export default function ColumnRegistros(){

    const user = JSON.parse(localStorage.getItem("userData"));

    return(
        <div>
            <ColumnUsers />
            <div className="ColumnDatos">
            
            <div>
                <div>Registros</div>
            </div>
        </div>   
        </div>
    
    );

}