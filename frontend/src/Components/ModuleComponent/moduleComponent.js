import React, { useEffect, useState } from 'react';
import { getAllApplication, createApplication, updateApplication, deleteApplication } from '../../services/appService';
import { Button, Popover, notification } from 'antd';
import { useNavigate, Link } from "react-router-dom";
import './moduleComponent.css'
import { Icon } from '@iconify/react';
import { EditFilled} from '@ant-design/icons';




function App() {
  const buttonStyle = {
    backgroundColor: 'red ',
    borderColor: 'red',
    color: 'white',
    width: '50%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '0',
    marginRight: '10%',
    opacity: '100%' ,
  };
  const buttonStyle2 = {
    backgroundColor: '#69C04C',
    borderColor: '#69C04C',
    color: 'white',
    width: '50%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '0',
    marginRight: '10%',
    opacity: '100%' ,
  };
  const buttonStyle5Form = {
    backgroundColor: '#69C04C',
    borderColor: '#69C04C',
    color: 'white',
    width: '50%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '28%',
    marginRight: '10%',
  };
  const buttonStyle6Form = {
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
    width: '50%',
    borderRadius: '40px',
    marginTop: '2%',
    marginBottom: '5%',
    marginLeft: '28%',
    marginRight: 'auto',
  };
  const [Applications, setApplications] = useState([]);
  const [open, setOpen] = useState([]);

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

  const handleDelete = async (id) => {
    // Call the deleteRol function to delete a Application
    await deleteApplication(id);
    notification.success({ message: 'Application deleted successfully', duration: 5 })
  };

  const handleUpdate = async (app) => {
    console.log(app.URL);
    if (!newApp.URL) {
      newApp.URL = app.URL
    }
    if (!newApp.icon) {
      newApp.icon = app.icon
    }
    try {
      console.log("Datos del formulario:", newApp);

      await updateApplication(app.id, newApp);
      console.log("datos obtenidos");

      // Reinicia los valores del formulario
      setNewApp({
        URL: '',
        icon: '',
      });

      const updatedApp = await getAllApplication();
      setApplications(updatedApp);

      //Alert success
      notification.success({ message: 'Application updated correcly', duration: 5 })
    } catch (error) {
      console.error('Error al actualizar la aplicacion:', error);
      //Alert error
      notification.error({ message: 'It wasn´t possible to update the application', duration: 5 })
    };
  };


  const navigate = useNavigate();
  const handleRoles = (id) => {
    localStorage.setItem('id', id);
    navigate("/appRolview");
  };
  // UPDATEF
  const formPopOverEdit = (app, index) => (
    <div>
      <p></p>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(app); }}
        action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

        <label className='customInputHome' htmlFor="URL">Module name:</label>
        <input type="text" className='customInputHome' id="URL" placeholder={app.URL}
          value={newApp.URL}
          onChange={(e) => setNewApp({ ...newApp, URL: e.target.value })}  />
        <br /><br />

        <label className='customInputHome' htmlFor="icon">Icon:</label>
        <input type="file" className='customInputHome' id="icon" accept="image/*" placeholder={app.icon}
          onChange={(e) => setNewApp({ ...newApp, icon: e.target.files[0] })}
           />
        <Button type="primary" htmlType="submit" style={buttonStyle5Form} className='BtnMobileCssUpt BtnTabletCssUpt'>Update</Button >
        &nbsp;&nbsp;
        <Button onClick={() => hide()} type="primary" style={buttonStyle6Form} className='ButtonDelete' >Cancel</Button>
      </form>
    </div>
  );


  return (
    /*Codigo del block de modulo*/
    <div className="block">
      {Array.isArray(Applications) &&
        Applications.map((application, index) => (
          <div key={application.id} style={{ marginBottom: '20px' }} className='block2'>
            <div>
              <img className='appicon' alt='icon1' src={`http://localhost:8000/images/${application.icon}`}></img>
            </div >
            <div>
              <h3 className='infosizeUrl'>{application.URL}</h3>
            </div >
            <div>
              <h3 className='borders'>
                 {/* edit */}
                 <Popover content={formPopOverEdit(application, index)} placement="left" title="Update module" trigger="click" className=' customposiconmodule ' 
                forceRender={true} open={open[index]} onOpenChange={(e) => handleOpenChange(e, index)}>
                  <EditFilled className='iconBorderEditM'/>
                </Popover>

                {/* delete */}
                <Button onClick={() => handleDelete(application.id)} type="primary" style={buttonStyle} className="mobileBtnPos">
                  Delete
                  </Button>
                &nbsp;&nbsp;
                
                {/* Roles */}
                &nbsp;&nbsp;
                <Button onClick={() => handleRoles(application.id)} style={buttonStyle2} type="primary">Roles</Button>
              
               

              </h3>
            </div>
          </div>


        ))}
    </div>
  );

};
<div></div>
export default App;
