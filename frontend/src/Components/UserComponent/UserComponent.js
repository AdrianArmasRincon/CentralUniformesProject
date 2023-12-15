import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser, updateUser } from '../../services/userService';
import './UserComponent.css';
import { Button, Popover, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


function UserComponent() {
  const buttonStyle = {
    backgroundColor: '#69C04C',
    borderColor: '#69C04C',
    color: 'white',
    width: '30%',
    borderRadius: '40px',
    marginTop: '2%',
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

  const [Users, setUsers] = useState([]);
  const [open, setOpen] = useState([]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
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
    // Llama a la función de servicio para obtener empleados cuando el componente se monta
    getAllUsers().then((data) => {
      setUsers(data); // Actualiza el estado con los empleados obtenidos

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
    // Call the deleteEmployee function to delete an employee
    await deleteUser(id);
    notification.success({message:'User deleted successfully', duration:5})
  };

  const handleUpdate = async (user) => {
    console.log(user.name);
    if (!newUser.name) {
      newUser.name = ""
    }
    if (!newUser.email) {
      newUser.email = ""
    }
    if (!newUser.password) {
      newUser.password = ""
    }
    try {
      console.log(user.name);
      setNewUser((prevUser) => ({
        ...prevUser,
        name: prevUser.name || user.name,
        email: prevUser.email || user.email,
        password: prevUser.password || user.password,
      }));
  
      console.log("Datos del formulario:", newUser);
      await updateUser(user.id, newUser);
      console.log("datos obtenidos");
  
      // Reinicia los valores del formulario
      setNewUser({
        name: '',
        email: '',
        password: '',
      });
      //Alert
      notification.success({message:'User updated correcly',duration:5})
      const updatedApp = await getAllUsers();
      setUsers(updatedApp);

    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      notification.error({message:'A problem occurs trying to update user', duration:5})
    }
  };

  const navigate = useNavigate();
  const handleRoles = (id) => {
    localStorage.setItem('id', id);
    navigate("/userRolview");
  };

  
  //EDIT
  const UpdateForm  = (user, index) => (
    <div>
      <p></p>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(user); }}
      action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

        <label htmlFor="name" className='customInputHome'>Name:</label>
        <input type="text" className='customInputHome'  id="name"
          placeholder={user.name}
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
         />
        <br /><br />

        <label htmlFor="email" className='customInputHome'>Email:</label>
        <input type="text" className='customInputHome'  id="email"
          placeholder={user.email}
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
         />
        <br /><br />

        <div>
        <label htmlFor="password" className='customInputHome'>Password:</label><br />
        <input
          className='customInputHome'
          type="password"
          id="password"
          placeholder={user.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </div>
        <Button  type="primary" htmlType="submit" style={buttonStyle} className='BtnMobileCssUpt BtnTabletCssUpt'>Update</Button >
        &nbsp;&nbsp;
        <Button onClick={() => hide()} type="primary" className='BtnMobileCssUpt BtnTabletCssUpt' >Cancel</Button>
      </form>
    </div>
  );


    return (
    /*Codigo del block de modulo*/
      <div className="block">
        <div className="block-section stat" id="stat1">
          {/* With an ant icon */}
          {/* <Icon icon="ant-design:smile-filled" color="#000000" width="5vh" height="5vh" /> */}
        </div>

        <div className="block-section stat" id="stat2">
          <h2 className='customH2'>Name:</h2>  {/* <h3>{title1}</h3> */}
        </div>

        <div className="block-section stat" id="stat3">
          <p className='customP'>Email:</p>{/* <p>{description}</p> */}
        </div>
        {Array.isArray(Users) &&
        Users.map((user, index) => (
          <div key={user.id} style={{ marginBottom: '20px' }} className='block'>
            <div className='block-section stat'>
              <p className='customH2'>{user.name}</p>
            </div >
            <div className='block-section stat'>
              <p className='customP'>{user.email}</p>
            </div>
            <div className='block-section stat'>
              <p className='customP'>
                <Button onClick={() => handleDelete(user.id)} type="primary" className='BtnMobileCssUpt BtnTabletCssUpt'>Delete</Button>
                &nbsp;&nbsp;
                <Popover
                  content={UpdateForm(user, index)}
                  trigger="click"
                  forceRender={true}
                  open={open[index]}
                  onOpenChange={(e) => handleOpenChange(e, index)}
                >
                  <Button type="primary" className='ButtonUpdate'>Update</Button>
                </Popover>
                &nbsp;&nbsp;
                <Button onClick={() => handleRoles(user.id)} type="primary">Roles</Button>
              </p>
            </div>
          </div>


        ))}
    </div>
    );
    
  };
    <div></div>
export default UserComponent ;
