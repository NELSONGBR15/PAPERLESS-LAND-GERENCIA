import '../Styles/ColumnDatos.css'
import ColumnUsers from '../Components/ColumnUsers';
import axios from '../Api/axios';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

//ESTILO PARA MODAL
const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos: {
        cursor: 'pointer'
    },
    inputMaterial: {
        width: '100%'
    }
}));


export default function ColumnUsuarios() {
    const styles = useStyles();
    //HOOKS
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    const [generos, setGeneros] = useState([]);
    const [rol, setRol] = useState([]);
    const [cargo, setCargo] = useState([]);

    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
        id: '',
        nombre: '',
        generos_id: '',
        fecha_nacimiento: '',
        cargos_id: '',
        fecha_ingreso: '',
        rols_id: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setConsolaSeleccionada(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    //FUNCIONES PETICIONES AXIOS
    const peticioneGet = async () => {
        axios.get('/usuario/index')
            .then(response => {
                setData(response.data);
            })
        axios.get('/genero/index')
            .then(res => {
                setGeneros(res.data);
            })
        axios.get('/rol/index')
            .then(res => {
                setRol(res.data);
            })
        axios.get('/cargo/index')
            .then(res => {
                setCargo(res.data);
            })

    }
    useEffect(async () => {
        await peticioneGet();
    }, [])

    const peticionPost = async () => {
        await axios.post('/usuario/store', consolaSeleccionada)
            .then(response => {
                setData(data.concat(response.data))
                abrirCerrarModalInsertar()
            })
    }

    const peticionPut = async () => {
        await axios.put('/usuario/update/{id}' + consolaSeleccionada.id, consolaSeleccionada)
            .then(response => {
                var dataNueva = data;
                dataNueva.map(consola => {
                    if (consolaSeleccionada.id === consola.id) {
                        consola.nombre = consolaSeleccionada.nombre;
                        consola.generos_id = consolaSeleccionada.generos_id;
                        consola.fecha_nacimiento = consolaSeleccionada.fecha_nacimiento;
                        consola.cargos_id = consolaSeleccionada.cargos_id;
                        consola.fecha_ingreso = consolaSeleccionada.fecha_ingreso;
                        consola.rols_id = consolaSeleccionada.rols_id;
                    }
                })
                setData(dataNueva);
                abrirCerrarModalEditar();
            })
    }

    const peticionDelete = async () => {
        await axios.delete('/usuario/destroy/{id}' + consolaSeleccionada.id)
            .then(response => {
                setData(data.filter(consola => consola.id !== consolaSeleccionada.id));
                abrirCerrarModalEliminar();
            })
    }

    //FUNCIONES PARA ABRIR Y CERRAR VENTANA    
    const abrirCerrarModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    }
    const abrirCerrarModalEditar = () => {
        setModalEditar(!modalEditar);
    }
    const abrirCerrarModalEliminar = () => {
        setModalEliminar(!modalEliminar);
    }
    const seleccionarConsola = (consola, caso) => {
        setConsolaSeleccionada(consola);
        (caso === 'Editar') ? abrirCerrarModalEditar() : abrirCerrarModalEliminar()
    }

    //VENTANAS EMERGENTES
    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>AGREGAR USUARIO</h3>
            <TextField name='nombre' className={styles.inputMaterial} label="Nombre" onChange={handleChange} />
            <br />
            <select name='generos_id' className={styles.inputMaterial} onChange={handleChange}  >
                <option label='Seleccione el genero'  >Seleccione el genero</option>
                {generos.map(elemento => (
                    <option key={elemento.id} value={elemento.id} >
                        {elemento.nombre}</option>
                ))}
            </select>
            <br />
            <TextField name='fecha_nacimiento' className={styles.inputMaterial} label="Fecha de nacimiento" onChange={handleChange} />
            <br />
            <select name='cargos_id' className={styles.inputMaterial} onChange={handleChange}  >
                <option label='Seleccione el cargo'  >Seleccione el cargo</option>
                {cargo.map(elemento => (
                    <option key={elemento.id} value={elemento.id} >
                        {elemento.nombre}</option>
                ))}
            </select>
            <br />
            <TextField name='cargos_id' className={styles.inputMaterial} label="cargo" onChange={handleChange} />
            <br />
            <TextField name='fecha_ingreso' className={styles.inputMaterial} label="Fecha ingreso" onChange={handleChange} />
            <br />
            <select name='rols_id' className={styles.inputMaterial} onChange={handleChange}  >
                <option label='Seleccione rol'  >Seleccione rol</option>
                {rol.map(elemento => (
                    <option key={elemento.id} value={elemento.id} >
                        {elemento.nombre}</option>
                ))}
            </select>
            <div align="right">
                <Button color="primary" onClick={() => peticionPost()} >Insertar</Button>
                <Button onClick={() => abrirCerrarModalInsertar()} > Cancelar</Button>
            </div>
        </div>
    )
    const bodyEditar = (
        <div className={styles.modal}>
            <h3>Editar Usuario</h3>
            <TextField name='nombre' className={styles.inputMaterial} label="Nombre" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.nombre} />
            <br />
            <select name='generos_id' className={styles.inputMaterial} label="Genero" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.generos_id} >
                <option disabled >Seleccione el genero</option>
                {generos.map(elemento => (
                    <option key={elemento.id} value={elemento.id} >
                        {elemento.nombre}</option>
                ))}
            </select>
            <TextField name='fecha_nacimiento' className={styles.inputMaterial} label="Fecha de nacimiento" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.fecha_nacimiento} />
            <br />
            <select name='cargos_id' className={styles.inputMaterial} onChange={handleChange}  value={consolaSeleccionada && consolaSeleccionada.cargos_id} >
                <option label='Seleccione el cargo'  >Seleccione el cargo</option>
                {cargo.map(elemento => (
                    <option key={elemento.id} value={elemento.id} >
                        {elemento.nombre}</option>
                ))}
            </select>
            <br />
            <TextField name='fecha_ingreso' className={styles.inputMaterial} label="Fecha ingreso" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.fecha_ingreso} />
            <br />
            <select name='rols_id' className={styles.inputMaterial} onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.rols_id} >
                <option label='Seleccione rol'  >Seleccione rol</option>
                {rol.map(elemento => (
                    <option key={elemento.id} value={elemento.id} >
                        {elemento.nombre}</option>
                ))}
            </select>
            <br /><br />
            <div align="right">
                <Button color="primary" onClick={() => peticionPut()} >Editar</Button>
                <Button onClick={() => abrirCerrarModalEditar()} > Cancelar</Button>
            </div>
        </div>
    )
    const bodyEliminar = (
        <div className={styles.modal}>
            <p>Estas seguro que deseas eliminar este usuario  <b>{consolaSeleccionada && consolaSeleccionada.nombre}</b> ?</p>
            <div align="right">
                <Button color="secondary" onClick={() => peticionDelete()} >si</Button>
                <Button onClick={() => abrirCerrarModalEliminar()} > No</Button>
            </div>
        </div>
    )

    //RETORNO 
    return (
        <div>
            <ColumnUsers />
            <div className="ColumnDatos">
                <div>
                    <div className='Titulo'>USUARIOS</div>
                    <div>
                        <button className='AgregarBTN' onClick={() => abrirCerrarModalInsertar()}  >AGREGAR</button>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Genero</TableCell>
                                    <TableCell>Fecha de nacimiento</TableCell>
                                    <TableCell>Cargo</TableCell>
                                    <TableCell>Fecha ingreso</TableCell>
                                    <TableCell>Rol</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data.map(consola => (
                                    <TableRow key={consola.id} >
                                        <TableCell>{consola.id}</TableCell>
                                        <TableCell>{consola.nombre}</TableCell>
                                        <TableCell>{(consola.generos_id === 1) ? 'Masculino' : 'Femenino'}</TableCell>
                                        <TableCell>{consola.fecha_nacimiento}</TableCell>                                       
                                        <TableCell>{(consola.cargos_id === 1) ? 'Supervisor' : (consola.cargos_id === 2) ? 'Monitor' : 'Fumigador'}</TableCell>
                                        <TableCell>{consola.fecha_ingreso}</TableCell>
                                        <TableCell>{(consola.rols_id === 1) ? 'Administrador' : 'Empleado' }</TableCell>
                                        <TableCell>
                                            <Edit className={styles.iconos} onClick={() => seleccionarConsola(consola, 'Editar')} />
                                            &nbsp;&nbsp;&nbsp;
                                            <Delete className={styles.iconos} onClick={() => seleccionarConsola(consola, 'Eliminar')} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Modal
                        open={modalInsertar}
                        onClose={abrirCerrarModalInsertar}>
                        {bodyInsertar}
                    </Modal>

                    <Modal
                        open={modalEditar}
                        onClose={abrirCerrarModalEditar}>
                        {bodyEditar}
                    </Modal>

                    <Modal
                        open={modalEliminar}
                        onClose={abrirCerrarModalEliminar}>
                        {bodyEliminar}
                    </Modal>

                </div>
            </div>
        </div>
    );

}