import '../Styles/ColumnDatos.css'
import ColumnUsers from '../Components/ColumnUsers';
import axios from '../Api/axios';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

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
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);

    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
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
        console.log(consolaSeleccionada);
    }


    const peticioneGet = async () => {
        axios.get('/usuario/index')
            .then(response => {
                setData(response.data);
            })
    }

    const peticionPost = async () =>{
        await axios.post('/usuario/store', consolaSeleccionada)
        .then(response =>{
            setData(data.concat(response.data))
            abrirCerrarModalInsertar()
        })
    }


    const abrirCerrarModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    }

    useEffect(async () => {
        await peticioneGet();
    }, [])

    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>Agregar Usuario</h3>
            <TextField  name='nombre' className={styles.inputMaterial} label="Nombre" onChange={handleChange} />
            <br />
            <TextField name='generos_id' className={styles.inputMaterial} label="Genero" onChange={handleChange} />
            <br />
            <TextField name='fecha_nacimiento' className={styles.inputMaterial} label="Fecha de nacimiento" onChange={handleChange} />
            <br />
            <TextField name='cargos_id' className={styles.inputMaterial} label="cargo" onChange={handleChange} />
            <br />
            <TextField name='fecha_ingreso' className={styles.inputMaterial} label="Fecha ingreso" onChange={handleChange} />
            <br />
            <TextField name='rols_id' className={styles.inputMaterial} label="Rol" onChange={handleChange} />
            <br /><br />
            <div align="right">
                <Button color="primary" onClick={peticionPost} >Insertar</Button>
                <Button onClick={abrirCerrarModalInsertar} > Cancelar</Button>
            </div>
        </div>
    )
    return (
        <div>
            <ColumnUsers />
            <div className="ColumnDatos">
                <div>
                    <div className='Titulo'>USUARIOS</div>
                    <div>
                        <Button onClick={abrirCerrarModalInsertar}  >INSERTAR</Button>
                    </div> <br />
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Genero</TableCell>
                                    <TableCell>Fecha de nacimiento</TableCell>
                                    <TableCell>cargo</TableCell>
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
                                        <TableCell>{consola.generos_id}</TableCell>
                                        <TableCell>{consola.fecha_nacimiento}</TableCell>
                                        <TableCell>{consola.cargos_id}</TableCell>
                                        <TableCell>{consola.fecha_ingreso}</TableCell>
                                        <TableCell>{consola.rols_id}</TableCell>
                                        <TableCell>
                                            <Edit />
                                            &nbsp;&nbsp;&nbsp;
                                            <Delete />
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


                </div>
            </div>
        </div>
    );

}