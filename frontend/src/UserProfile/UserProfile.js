import React, { useState } from 'react';
import './UserProfile.css';
//import { useHistory } from 'react-router-dom';
import { Button, Carousel, Popover } from 'antd';//ant
import { EditFilled } from '@ant-design/icons';

//COMPONENTS
import MenuComponent from '../Components/menuComponent/menuComponent';
import LoginComponent from '../Components/LoginComponent/LoginComponent';

const UserProfile = () => {
    //const history = useHistory();

    // Estado para los datos del usuario
    const [userData, setUserData] = useState({
        name: 'Pepe',
        email: 'Pepe@example.com',
        password: '********',
        image: '/assets/img/icon.png',
    });

    const buttonStyle = {
        backgroundColor: '#69C04C',
        borderColor: '#69C04C',
        color: 'white',
        width: '25%',
        borderRadius: '30%',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '38%',
        marginRight: 'auto',
    };
    // IMAGE
    const formImgPopOver = (
        <div>
            <p></p>
            <form action="#" method="post" enctype="multipart/form-data" className='mymarginProfileUser'>
                <label htmlFor="picUser" className='customInputHome'>Image:</label>
                <input type="file" className='customInputHome' id="picUser" name="picUser" accept="image/*" required />
                <input type="submit" value="Update" style={buttonStyle}>
                </input>
            </form>
        </div>
    );
    // NAME
    const formNamePopOver = (
        <div>
            <p></p>
            <form action="#" method="post" enctype="multipart/form-data" className='mymarginProfileUser'>
                <label htmlFor="nameUser" className='customInputHome'>New name:</label>
                <input type="text" className='customInputHome' id="nameUser" name="nameUser" required />
                <input type="submit" value="Update" style={buttonStyle}>
                </input>
            </form>
        </div>
    );
    // EMAIL
    const formEmailPopOver = (
        <div>
            <p></p>
            <form action="#" method="post" enctype="multipart/form-data" className='mymarginProfileUser'>
                <label htmlFor="emailUser" className='customInputHome'>New email:</label>
                <input type="email" className='customInputHome' id="emailUser" name="emailUser" required />
                <input type="submit" value="Update" style={buttonStyle}>
                </input>
            </form>
        </div>
    );
    // PASSWORD
    const formPswdPopOver = (
        <div>
            <p></p>
            <form action="#" method="post" enctype="multipart/form-data" className='mymarginProfileUser'>
                <label htmlFor="pswdUser" className='customInputHome'>New password:</label>
                <input type="password" className='customInputHome' id="nameUser" name="nameUser" required />
                <input type="submit" value="Update" style={buttonStyle}>
                </input>
            </form>
        </div>
    );

    // Manejar cambios en los campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    // Guardar cambios y redirigir a la página de visualización
    const handleSaveChanges = () => {
        // Lógica para guardar los cambios (puedes enviar los datos a un servidor, etc.)
        // ...

        // Redirigir a la página de visualización
        //history.push('/view-profile');
    };

    return (
        <div >
            <div className='backgroundf'>
                <MenuComponent />
            </div>
            
            <div className='containerProfile'>
                <h1>{userData.name}'s profile</h1>
                <div>
                    <div className='contentProfile'>
                        <div class="boxImgProfile">
                            <img className="imgProfileAdjust" src={userData.image} alt="Imagen de perfil" /> 
                            <p className='editProfilePic'>
                                <Popover content={formImgPopOver} placement="right" title="Update profile pic" trigger="click" style={buttonStyle}>
                                    <Button icon={<EditFilled />} className='iconpos3 iconMarginModHome' />
                                </Popover>
                            </p>
                            
                        </div>
                            <div class="boxProfile profileItemPos">
                                <p><strong>Nombre: </strong> {userData.name}&nbsp;
                                
                                <Popover content={formNamePopOver} placement="right" title="Update name" trigger="click" style={buttonStyle}>
                                    <Button icon={<EditFilled />} className='iconpos3 iconMarginModHome' />
                                </Popover>
                                </p>
                            </div>


                        <div class="boxProfile profileItemPos">
                            <p><strong>Correo:</strong> {userData.email}&nbsp;
                                <Popover content={formEmailPopOver} placement="right" title="Update email" trigger="click" style={buttonStyle}>
                                    <Button icon={<EditFilled />} className='iconpos3 iconMarginModHome' />
                                </Popover>
                            </p>
                        </div>
                        <div class="boxProfile profileItemPos">
                            <p><strong>Contraseña:</strong> {userData.password}&nbsp;
                                <Popover content={formPswdPopOver} placement="right" title="Update password" trigger="click" style={buttonStyle}>
                                    <Button icon={<EditFilled />} className='iconpos3 iconMarginModHome' />
                                </Popover>
                            </p>
                        </div   >
                        <div class=" profileItemPos btnBottomLogOutProfile">
                            {/* <Popover content={formUserEdit} placement="right" title="Update news" trigger="click" style={buttonStyle}> */}
                            <Button type="primary" className='btnColorSingOut'>
                                Log out
                            </Button>
                            {/* </Popover> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
