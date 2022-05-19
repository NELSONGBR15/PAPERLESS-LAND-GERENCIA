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

export default function ColumnRegistros() {
    const styles = useStyles();
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);


    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
        id: '',
        nombre: '',
        fecha: '',
        linea: '',
        palma: '',
        enfermedads_id: '',
        lotes_id: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setConsolaSeleccionada(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    //FUNCIONES PETICIONES AXIOS
    const peticionGet = async () => {
        axios.get('/registro/index')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
    }
    useEffect(async () => {
        await peticionGet();
    }, [])

    const peticionPost = async () => {
        await axios.post('/registro/store', consolaSeleccionada)
            .then(response => {
                setData(data.concat(response.data))
                abrirCerrarModalInsertar()
            })
    }

    const peticionPut = async () => {
        await axios.put('/registro/update/{id}' + consolaSeleccionada.id, consolaSeleccionada)
            .then(response => {
                var dataNueva = data;
                dataNueva.map(consola => {
                    if (consolaSeleccionada.id === consola.id) {
                        consola.usuarios_id = consolaSeleccionada.usuarios_id;
                        consola.fecha = consolaSeleccionada.fecha;
                        consola.linea = consolaSeleccionada.linea;
                        consola.palma = consolaSeleccionada.palma;
                        consola.enfermedads_id = consolaSeleccionada.enfermedads_id;
                        consola.lotes_id = consolaSeleccionada.lotes_id;
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
    const seleccionarConsola = (consola, caso) => {
        setConsolaSeleccionada(consola);
        (caso === 'Editar') ? abrirCerrarModalEditar() : abrirCerrarModalEliminar()
    }
    const abrirCerrarModalEliminar = () => {
        setModalEliminar(!modalEliminar);
    }

    //VENTANAS EMERGENTES
    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>AGREGAR REGISTRO</h3>
            <TextField name='usuarios_id' className={styles.inputMaterial} label="Usuario" onChange={handleChange} />
            <br />
            <TextField name='fecha' className={styles.inputMaterial} label="Fecha" onChange={handleChange} />
            <br />
            <TextField name='linea' className={styles.inputMaterial} label="Linea" onChange={handleChange} />
            <br />
            <TextField name='palma' className={styles.inputMaterial} label="Palma" onChange={handleChange} />
            <br />
            <TextField name='enfermedads_id' className={styles.inputMaterial} label="Enfermedad" onChange={handleChange} />
            <br />
            <TextField name='lotes_id' className={styles.inputMaterial} label="Lote" onChange={handleChange} />
            <br /><br />
            <div align="right">
                <Button color="primary" onClick={() => peticionPost()} >Insertar</Button>
                <Button onClick={() => abrirCerrarModalInsertar()} > Cancelar</Button>
            </div>
        </div>
    )
    const bodyEditar = (
        <div className={styles.modal}>
            <h3>EDITAR REGISTRO</h3>
            <TextField name='usuarios_id' className={styles.inputMaterial} label="Usuario" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.usuarios_id} />
            <br />
            <TextField name='fecha' className={styles.inputMaterial} label="Fecha" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.fecha} />
            <br />
            <TextField name='linea' className={styles.inputMaterial} label="Linea" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.linea} />
            <br />
            <TextField name='palma' className={styles.inputMaterial} label="Palma" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.palma} />
            <br />
            <TextField name='enfermedads_id' className={styles.inputMaterial} label="Enfermedad" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.enfermedads_id} />
            <br />
            <TextField name='lotes_id' className={styles.inputMaterial} label="Lote" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.lotes_id} />
            <br /><br />
            <div align="right">
                <Button color="primary" onClick={() => peticionPut()} >Editar</Button>
                <Button onClick={() => abrirCerrarModalEditar()} > Cancelar</Button>
            </div>
        </div>
    )
    const bodyEliminar = (
        <div className={styles.modal}>
            <p>Estas seguro que deseas eliminar este Registro  <b>{consolaSeleccionada && consolaSeleccionada.nombre}</b> ?</p>
            <div align="right">
                <Button color="secondary" onClick={() => peticionDelete()} >si</Button>
                <Button onClick={() => abrirCerrarModalEliminar()} > No</Button>
            </div>
        </div>
    )


    return (
        <div>
            <ColumnUsers />
            <div className="ColumnDatos">
                <div className="Titulo" >REGISTROS</div>
                <div>
                    <button className='AgregarBTN' onClick={() => abrirCerrarModalInsertar()} >AGREGAR</button>
                </div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Usuario</TableCell>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Linea</TableCell>
                                <TableCell>Palma</TableCell>
                                <TableCell>Enfermedad</TableCell>
                                <TableCell>Lote</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map(consola => (
                                <TableRow key={consola.id} >
                                    <TableCell>{consola.id}</TableCell>
                                    <TableCell>{consola.usuarios_id}</TableCell>
                                    <TableCell>{consola.fecha}</TableCell>
                                    <TableCell>{consola.linea}</TableCell>
                                    <TableCell>{consola.palma}</TableCell>
                                    <TableCell>{consola.enfermedads_id}</TableCell>
                                    <TableCell>{consola.lotes_id}</TableCell>
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
    );
}