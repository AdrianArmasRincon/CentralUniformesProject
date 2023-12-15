import React, { useEffect, useState } from 'react';//import CustomComponent from './CustomComponent';
//import Block from '../addModuleComponent';
import { getAllRoles, getRolById, createRol, updateRol, deleteRol } from '../../services/rolService';
import './RoleComponent.css'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Button, Popover, notification } from 'antd';

function RoleComponent() {
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
  //set
  const [Roles, setRoles] = useState([]);
  const [open, setOpen] = useState([]);
  //Update
  const [newRol, setNewRol] = useState({
    name: '',
  });

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

  const hide = () => {
    setOpen(prevState => {
      let newValues = [];
      for (let i = 0; i < prevState.length; i++) {
        newValues[i] = false;
      }
      return newValues;
    });
  };

  useEffect(() => {
    getAllRoles().then((data) => {
      setRoles(data);
      let openValues = [];
      for (let i = 0; i < data.length; i++) {
        openValues[i] = false;
      }

      console.log("useEffect");
      console.log(openValues);

      setOpen(openValues);

      console.log('Data received:', data);
      console.log("datos obtenidos");
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    // Call the deleteRol function to delete a Rol
    await deleteRol(id);
    notification.success({ message: 'Rol deleted', duration: 5 })
  };

  const handleUpdate = async (rol) => {
    console.log(rol.name);
    if (!newRol.name) {
      newRol.name = rol.name
    }
    try {
      console.log("Datos del formulario:", newRol);

      await updateRol(rol.id, newRol);
      console.log("datos obtenidos");

      // Reinicia los valores del formulario
      setNewRol({
        name: '',
      });

      notification.success({ message: 'Rol updated', duration: 5 })

      const updatedRol = await getAllRoles();
      setRoles(updatedRol);


    } catch (error) {
      console.error('Error al actualizar la aplicacion:', error);
      notification.error({ message: 'Error updating rol', duration: 5 })
    };
  };


  //EDIT
  const formPopOverEdit = (rol, index) =>  (
    <div>
      <p></p>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(rol); }} 
      action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

        <label htmlFor="name" className='customInputHome'>Rol name:</label>
        <input type="text" className='customInputHome' id="name" name="name" 
        placeholder={rol.name}
        value={newRol.name}
        onChange={(e) => setNewRol({ ...newRol, name: e.target.value })} 
        required />
        <br /><br />

        <Button  type="primary" htmlType="submit" value="Update" style={buttonStyle2} className='BtnMobileCssUpt BtnTabletCssUpt'>Update</Button >
        &nbsp;&nbsp;
        <Button onClick={() => hide()} type="primary" style={buttonStyle2} className='BtnMobileCssUpt BtnTabletCssUpt' >Cancel</Button>
      </form>
    </div>
  );


  return (
    /*Codigo del block de modulo*/
    <div className="block">
      {Array.isArray(Roles) &&
        Roles.map((rol, index) => (
          <div key={rol.id} className='block'>
            {/* Agrega un salto de línea antes del div */}
            {'\n'}
            <div className='block-section stat'>
              <p className='customH2'>{rol.name}</p>
            </div>
            <div className='block-section stat'>
              <p className='componentId contIdCent'>
  
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={() => handleDelete(rol.id)} className='popOverStyleBtn'>
                  <Icon icon="ant-design:delete-filled" className='iconpos3 iconPosBinMod otherModIconSize ' />
                </Button>
                <Popover content={formPopOverEdit(rol, index)}
                  forceRender={true} open={open[index]}
                  onOpenChange={(e) => handleOpenChange(e, index)}
                  placement="left" title="Update rol"
                  trigger="click" className='popOverStyleBtn'>
  
                  <Icon icon="ant-design:edit-filled" className='iconpos1 editModIconSize' />
                </Popover>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
  
  
}
/*Codigo de la creacion de modulo*/
/*Poner nombres de los campos metidos cogidos de la bdd*/
/* 
<div>
  <Block
    imgSrc="/logo192.png"
    title1="Título 1"
    description="Descripción del bloque"
    permissionRole="Título rol"
  />
</div>
*/
<div></div>
export default RoleComponent;
