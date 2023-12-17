import React, { useEffect, useState } from 'react';
import { addRoleApplication, loadRoleApplication, removeRoleApplication } from '../services/appService';
import { getAllRoles } from '../services/rolService';
import { Button, Popover, notification } from 'antd';
import './appRolview.css';
function AppRoles() {
    const buttonStyle = {
        backgroundColor: '#69C04C',
        borderColor: '#69C04C',
        color: 'white',
        width: '100%',
        borderRadius: '40px',
        marginTop: '2%',
        marginBottom: '5%',
        marginLeft: '0%',
        marginRight: 'auto',
    };
    const buttonStyle2 = {
        backgroundColor: 'red',
        borderColor: '#69C04C',
        color: 'white',
        width: '100%',
        borderRadius: '40px',
        marginTop: '2%',
        marginBottom: '5%',
        marginLeft: '20%',
        marginRight: 'auto',
    };
    
        const buttonStyle3 = {
            backgroundColor: '#69C04C',
            borderColor: '#69C04C',
            color: 'white',
            width: '100%',
            borderRadius: '40px',
            marginTop: '2%',
            marginBottom: '5%',
            marginLeft: '20%',
            marginRight: 'auto',
        };
      
    const [AppR, setAppR] = useState({
        app_id: localStorage.getItem('id'),
        rol_id: '',
    });

    const [newR, setNewR] = useState({
        app_id: localStorage.getItem('id'),
        rol_id: '',
    });

    const [Roles, setRoles] = useState([]);

    const [openC, setOpenC] = useState(false);

    const hidec = () => {
        setOpenC(false);
    };
    const handleOpenChangec = (newOpen) => {
        setOpenC(newOpen);
    };

    useEffect(() => {
        getAllRoles().then((dataR)=>{
            setRoles(dataR);
            console.log("Roles obtenidos");

        })
            .catch((error) => {
                console.error('Error:', error);
            });

        loadRoleApplication(localStorage.getItem('id')).then((data) => {
            setAppR(data);
            console.log(localStorage.getItem('id'));
            console.log('Data received:', data);
            console.log("datos obtenidos");
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleCreate = async() => {
        let appId = localStorage.getItem('id');
        let rolId = newR.rol_id;
        console.log(rolId);
        try {
            console.log("Datos del formulario:", newR);
            console.log(rolId);
            // Llama a la función para crear una nueva noticia en el servidor
            await addRoleApplication(appId,rolId);


            // Reinicia los valores del formulario
            setNewR({
                app_id: localStorage.getItem('id'),
                rol_id: '',
            });

            //Alert Success
            notification.success({message:'Rol added correcly', duration:5})

        } catch (error) {
            console.error('Error al crear la relacion de roles:', error);

            //Alert Error
            notification.error({message:'A problem occurs when trying to add the rol', duration:5})
        }
    };

    const handleDelete = async (rol_id) => {
        let appId = localStorage.getItem('id');
        await removeRoleApplication(appId, rol_id);
        notification.success({message:'Rol deleted successfully', duration:5})
    };

    const generalForm = (
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
            <div className='formViewMargind'>
                <label htmlFor="title">Id Rol:</label><br />
                <input
                    type="text"
                    id="rol"
                    value={newR.rol_id}
                    onChange={(e) => setNewR({ ...newR, rol_id: e.target.value })}
                />
            </div>
            <div><br />
                <Button type="primary" htmlType="submit" style={buttonStyle3} className='ButtonUpdate' >Create</Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={hidec} style={buttonStyle2} className='ButtonDelete'>Cancel</Button>
            </div>
        </form>
    );


    return (
        <div className='content-application_roles'>

            <div className='block'>
                <div className='list-application_roles'>
                    <h3>Rol:</h3>
                </div>
                <div className='list-application_roles'>
                    <h3></h3>
                </div>
                <div className='list-application_roles popover'>
                    <br></br>
                    <Popover content={generalForm} trigger="click" open={openC}
                        onOpenChange={handleOpenChangec}>
                        <Button type="primary" style={buttonStyle} className='ButtonUpdate'>Create</Button>
                    </Popover>
                </div>

            </div>
            {Array.isArray(AppR) &&
                AppR.map((appR) => (
                    <div key={appR.id} style={{ marginBottom: '20px' }} className='block'>
                        <div className='list-application_roles'>
                            <p className='borders'>{appR.name}</p>
                        </div >
                        <div className='list-application_roles'>
                            <p className='borders'></p>
                        </div >
                        <div className='list-application_roles email-space'>
                            <h1 className='borders'>
                                <Button onClick={() => handleDelete(appR.id)} type="primary" style={buttonStyle2} className='ButtonDelete'>Delete</Button>
                            </h1>
                        </div>
                    </div>


                ))}
            {Array.isArray(Roles) &&
                Roles.map((rol) => (
                    <div key={rol.id} style={{ marginBottom: '20px' }} className='block RolesPreview'>
                        <div className='list-application_roles'>
                            <p className='borders'>ID: {rol.id}</p>
                        </div >
                        <div className='list-application_roles'>
                            <p className='borders'>Rol: {rol.name}</p>
                        </div >
                        
                    </div>


                ))}
        </div>
    );

}

export default AppRoles;