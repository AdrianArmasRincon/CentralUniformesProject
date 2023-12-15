import React, { useEffect, useState } from 'react';
import './Roles.css';
import { Icon } from '@iconify/react';
import { Button, Popover, notification } from 'antd';
//Components
import MenuComponent from '../Components/menuComponent/menuComponent';
import { getAllRoles, getRolById, createRol, updateRol, deleteRol } from '../services/rolService';
//import ModuleListComponent from '../Components/ModuleListComponent/ModuleListComponent';
import LoginComponent from '../Components/LoginComponent/LoginComponent'
import SearchInput from '../Components/searchInputComponent/searchInputComponent';
import RoleComponent from '../Components/RoleComponent/RoleComponent';


function Roles() {
    const [Roles, setRoles] = useState([]);
    const [open, setOpen] = useState([]);
    const [openC, setOpenC] = useState(false);

    const hidec = () => {
        setOpenC(false);
    };
    const handleOpenChangec = (newOpen) => {
        setOpenC(newOpen);
    };

    const handleOpenChange = (newOpen, index) => {
        setOpen(prevState => {
            let newValues = [];
            for (let i = 0; i < prevState.length; i++) {
                newValues[i] = false;
            }
            newValues[index] = true;
            return newValues;
        });
    };

    const [newRol, setNewRol] = useState({
        name: '',
    });

    const handleCreate = async () => {
        try {
            console.log("Datos del formulario:", newRol);

            // Llama a la función para crear una nueva noticia en el servidor
            await createRol(newRol);

            notification.success({ message: 'Rol created', duration: 5 })

            // Reinicia los valores del formulario
            setNewRol({
                name: '',
            });

            // Cierra el formulario


        } catch (error) {
            console.error('Error al crear el rol:', error);
            notification.error({ message: 'Error creating rol', duration: 5 })
        }
    };



    const buttonStyle = {
        backgroundColor: '#69C04C',
        borderColor: '#69C04C',
        color: 'white',
        width: '25%',
        borderRadius: '40px',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '38%',
        marginRight: 'auto',
    };
    const buttonStyle2 = {
        backgroundColor: '#69C04C',
        borderColor: '#69C04C',
        color: 'white',
        width: '50%',
        borderRadius: '40px',
        marginTop: '2%',
        marginBottom: '5%',
        marginLeft: '28%',
        marginRight: 'auto',
    };



    // ADD
    const formPopOverAdd = (
        <div>
            <p></p>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}
            action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

                <label htmlFor="name" className='customInputHome'>Rol name:</label>
                <input type="text" className='customInputHome' id="name" name="name"
                 value={newRol.name}
                 onChange={(e) => setNewRol({ ...newRol, name: e.target.value })}
                 />
                <br /><br />

                <Button type="primary"  htmlType="submit" style={buttonStyle2} className='BtnMobileCssUpt BtnTabletCssUpt'>Create</Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={hidec} className='BtnMobileCssUpt BtnTabletCssUpt'>Cancel</Button>
            </form>
        </div>
    );


    return (
        <div style={{ textAlign: 'left', marginLeft: '10%', marginTop: '8%' }}>
            <MenuComponent />
            <SearchInput />
            <h1 className='myTitleModules'>Roles</h1>
            <h3 className='mySubtitleModules'>Roles list
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* FALTA FUNCIONALIDAD -------------------------------------------------------------------------------------------------------- */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Popover content={formPopOverAdd} placement="left" title="Add rol" open={openC} trigger="click" className='popOverStyleBtn' 
                onOpenChange={handleOpenChangec}>
                    <Icon icon="ant-design:plus-circle-filled"  type="primary"  className='iconpos3 otherModIconSize iconposTabletCustom' />
                </Popover>

            </h3>
            <LoginComponent />
            <div className='customBorderListMod customboxList2'>
                <RoleComponent />
                <modulesList />
            </div>
        </div>
    );
}

export default Roles;
