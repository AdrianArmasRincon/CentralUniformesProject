import React, { useEffect, useState } from 'react';
import './Modules.css';
import { getAllApplication, createApplication, updateApplication, deleteApplication } from '../services/appService';

import { Icon } from '@iconify/react';
import { Button, Carousel, Popover, notification } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

//Components
import MenuComponent from '../Components/menuComponent/menuComponent';
//import ModuleListComponent from '../Components/ModuleListComponent/ModuleListComponent';
import SearchInput from '../Components/searchInputComponent/searchInputComponent';
import ModuleComponent from '../Components/ModuleComponent/moduleComponent';

function Modules() {
  const [Applications, setApplications] = useState([]);
  const [open, setOpen] = useState([]);
  const [openC, setOpenC] = useState(false);

  const buttonStyle = {
    backgroundColor: '#69C04C',
    borderColor: '#69C04C',
    color: 'white',
    width: '25%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '10%',
    marginRight: 'auto',
  };
  const buttonStyleCancel = {
    backgroundColor: 'red',
    borderColor: '#69C04C',
    color: 'white ',
    width: '25%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '25%',
    marginRight: 'auto',
  };

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

  const [newApp, setNewApp] = useState({
    URL: '',
    icon: '', // Cambiado a null ya que el valor inicial de un input de tipo archivo debería ser nulo
  });

  useEffect(() => {
    // Llama a la función de servicio para obtener aplicaciones cuando el componente se monta
    getAllApplication().then((data) => {
      setApplications(data); // Actualiza el estado con las aplicaciones obtenidas


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

  const handleCreate = async () => {
    try {
      console.log("Datos del formulario:", newApp);

      // Llama a la función para crear una nueva noticia en el servidor
      await createApplication(newApp);


      // Reinicia los valores del formulario
      setNewApp({
        URL: '',
        icon: '',
      });

      // Cierra el formulario

      //Alert success
      notification.success({ message: 'Application created correcly', duration: 5 })
    } catch (error) {
      console.error('Error al crear la aplicacion:', error);
      //Alert error
      notification.error({ message: 'It wasn´t possible to create the application', duration: 5 })
    }
  };

  const navigate = useNavigate();
  const handleRoles = (id) => {
    localStorage.setItem('id', id);
    navigate("/appRolview");
  };


  // ADD
  const formPopOverAdd = (
    <div>
      <p></p>
      <div>
        <p></p>
        <form action="#" method="post" enctype="multipart/form-data" className='customFormHomeStyle'
          onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>

          <div>
            <label htmlFor="URL" className='customInputHome'>URL:</label><br />
            <input
              type="text"
              id="URL"
              className='customInputHomeTxt'
              value={newApp.URL}
              onChange={(e) => setNewApp({ ...newApp, URL: e.target.value })}
            />
          </div>

          <br></br>
          <div>
            <label htmlFor="icon" className='customInputHome'>Image:</label><br />
            <input
              className='customInputHome'
              type="file"
              id="icon"
              accept="image/*"
              onChange={(e) => setNewApp({ ...newApp, icon: e.target.files[0] })}
            />
          </div>
          <br></br>

          <Button type="primary" htmlType="submit" value="Add" style={buttonStyle} className='BtnMobileCssUpt BtnTabletCssUpt'>Create</Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={hidec} style={buttonStyleCancel}>Cancel</Button>
        </form>
      </div>
    </div>
  );



  return (
    <div style={{ textAlign: 'left', marginLeft: '10%', marginTop: '8%' }}>
      <MenuComponent />
      <h1 className='myTitleModules'>Modules</h1>
      <h3 className='mySubtitleModules'>Allowed modules       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Popover content={formPopOverAdd} placement="left" title="Add module" trigger="click" className='popOverStyleBtn'>
          <Icon icon="ant-design:plus-circle-filled" className='iconpos3 otherModIconSize iconposTabletCustom' />
        </Popover>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
      </h3> 
      <br/>

      <br /> <br /> <br /> <br /><br />
      <div className='customBorderListMod customboxList customboxList3'>
        <ModuleComponent />
        <modulesList />
      </div>

    </div>
  );
}

export default Modules;
