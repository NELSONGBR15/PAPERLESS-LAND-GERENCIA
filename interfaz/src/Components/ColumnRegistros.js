import '../Styles/ColumnDatos.css'
import ColumnUsers from '../Components/ColumnUsers';

export default function ColumnRegistros(){

    return(
        <div>
            <ColumnUsers />
            <div className="ColumnDatos">
            
                <div className="Titulo" >REGISTROS</div>
                
            </div>   
        </div>   
    );
}