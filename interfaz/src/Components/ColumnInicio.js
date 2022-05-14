import '../Styles/ColumnDatos.css'

export default function ColumnDatos(){

    const user = JSON.parse(localStorage.getItem("userData"));
    
    const Nombre_completo = user.nombre + ' ' + user.apellido; 

    return(
        <div className="ColumnDatos">
            <div>
                <div className="ColumnDatos--bold" >Bienvenido(a) usuario # {user.id} </div>  
                <div className="ColumnDatos--bold" >{Nombre_completo.toUpperCase()}</div> 
                <div>Email: {user.email}</div> 
                <div>Cel: {user.phone}</div>   
                <br/>
                <div className="">Ahora puedes gestionar la informacion de los trabajadores desde cualquier lugar y cualquier hora,
                                gracias al sistema de PAPERLESSLAND de Palmeras del LLano.</div>            
            </div>
        </div>        
    );

}