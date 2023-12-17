import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser, updateUser } from '../../services/userService';
import './UserComponent.css';
import { Button, Popover, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { EditFilled} from '@ant-design/icons';


function UserComponent() {
  const buttonStyle = {
    backgroundColor: '#69C04C',
    borderColor: '#69C04C',
    color: 'white',
    width: '15%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '28%',
    marginRight: '5%',
  };
  const buttonStyle2 = {
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
    width: '15%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '28%',
    marginRight: '5%',
  };
  const buttonStyle3Form = {
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
  const buttonStyle4Form = {
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
    width: '50%',
    borderRadius: '40px',
    marginTop: '2%',
    marginBottom: '5%',
    marginLeft: '28%',
    marginRight: '10%',
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
    notification.success({ message: 'User deleted successfully', duration: 5 })
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
      notification.success({ message: 'User updated correcly', duration: 5 })
      const updatedApp = await getAllUsers();
      setUsers(updatedApp);

    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      notification.error({ message: 'A problem occurs trying to update user', duration: 5 })
    }
  };

  const navigate = useNavigate();
  const handleRoles = (id) => {
    localStorage.setItem('id', id);
    navigate("/userRolview");
  };


  //EDIT
  const UpdateForm = (user, index) => (
    <div>
      <p></p>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(user); }}
        action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

        <label htmlFor="name" className='customInputHome'>Name:</label>
        <input type="text" className='customInputHome' id="name"
          placeholder={user.name}
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <br /><br />

        <label htmlFor="email" className='customInputHome'>Email:</label>
        <input type="text" className='customInputHome' id="email"
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
        <Button type="primary" htmlType="submit" style={buttonStyle3Form} className='BtnMobileCssUpt BtnTabletCssUpt'>Update</Button >
        &nbsp;&nbsp;
        <Button onClick={() => hide()} type="primary"  style={buttonStyle4Form} className='BtnMobileCssUpt BtnTabletCssUpt' >Cancel</Button>
      </form>
    </div>
  );


  return (
    /*Codigo del block de modulo*/
    <div className="block">
      {Array.isArray(Users) &&
        Users.map((user, index) => (
          <div key={user.id} style={{ marginBottom: '20px' }} className='block2'>
            <div>
              <h2 className='customH2'>{user.name}</h2>
            </div >
            <div className='block-section stat'>
              <p className='customP customp2'>{user.email}</p>
            </div>
            <div className='block-section stat'>
              <p className='customP customp2'>
                {/* delete */}
                <Button onClick={() => handleDelete(user.id)} type="primary" style={buttonStyle2} className='BtnMobileCssUpt BtnTabletCssUpt mobileBtnSUC' >
                  Delete
                </Button>
                &nbsp;&nbsp;
                {/* Update */}
                <Popover content={UpdateForm(user, index)} placement="left" title="Update module" trigger="click" className='customposiconmodule customposiconuser ' 
                  forceRender={true} open={open[index]} onOpenChange={(e) => handleOpenChange(e, index)}>
                  <EditFilled className='iconBorderEditM mobilepositionCUser '/>
                </Popover>
                {/* roles */}
                &nbsp;&nbsp;
                <Button onClick={() => handleRoles(user.id)} style={buttonStyle}  className="rolesbtnUserMobile BtnTabletCssUpta" type="primary">Roles</Button>
              </p>
            </div>
          </div>
        ))}
    </div>
  );

};
<div></div>
export default UserComponent;
