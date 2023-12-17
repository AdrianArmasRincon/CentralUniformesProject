import React, { useEffect, useState } from 'react';
import { getAllNew, createNew, updateNew, deleteNew } from '../../services/newService';
import { Button, Popover, notification } from 'antd';
import { useNavigate, Link } from "react-router-dom";
import './newComponent.css'
import { Icon } from '@iconify/react';
import { EditFilled} from '@ant-design/icons';
import MenuComponent from '../menuComponent/menuComponent';


function NewComponent() {
    const buttonStyle = {
        backgroundColor: '#69C04C',
        borderColor: '#69C04C',
        color: 'white',
        width: '50%',
        borderRadius: '40px',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '-28%',
        marginRight: '20%',
    };
    const buttonStyle24 = {
        backgroundColor: 'red',
        borderColor: 'red',
        color: 'white', 
        width: '60%',
        borderRadius: '40px',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '-28%',
        marginRight: '20%',
    };
    const buttonStyle1 = {
        backgroundColor: '#69C04C',
        borderColor: '#69C04C',
        color: 'white',
        width: '50%',
        borderRadius: '40px',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '28%',
        marginRight: 'auto',
    };
    const buttonStyle2 = {
        backgroundColor: 'red',
        borderColor: '#69C04C',
        color: 'white',
        width: '50%',
        borderRadius: '40px',
        marginTop: '2%',
        marginBottom: '5%',
        marginLeft: '28%',
        marginRight: 'auto',
    };
    const [News, setNews] = useState([]);
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

    const [newNews, setNewNews] = useState({
        title: '',
        content: '',
        image: '', // Cambiado a null ya que el valor inicial de un input de tipo archivo debería ser nulo
    });

    useEffect(() => {
        // Llama a la función de servicio para obtener empleados cuando el componente se monta
        getAllNew().then((data) => {
            setNews(data); // Actualiza el estado con los empleados obtenidos

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

    const handleDelete = (id) => {
        deleteNew(id);
    };

    const handleUpdate = async (news) => {
        console.log(news.title);
        if (!newNews.title) {
            newNews.title = ""
        }
        if (!newNews.content) {
            newNews.content = ""
        }
        if (!newNews.image) {
            newNews.image = ""
        }
        try {
            console.log("Datos del formulario:", newNews);

            await updateNew(news.id, newNews);
            console.log("datos obtenidos");

            // Reinicia los valores del formulario
            setNewNews({
                title: '',
                content: '',
                image: '',
            });

            notification.success({ message: 'New updated successfully', duration: 5 })
            // Vuelve a cargar la lista de noticias
            const updatedNews = await getAllNew();
            setNews(updatedNews);


        } catch (error) {
            console.error('Error al actualizar la noticia:', error);
            notification.error({ message: 'Error trying to update new', duration: 5 })
        };
        // Cierra el Popover después de la actualización

    };

    const handleCreate = async () => {
        try {
            console.log("Datos del formulario:", newNews);

            // Llama a la función para crear una nueva noticia en el servidor
            await createNew(newNews);


            // Reinicia los valores del formulario
            setNewNews({
                title: '',
                content: '',
                image: '',
            });


            notification.success({ message: 'New created successfully', duration: 5 })

        } catch (error) {
            console.error('Error al crear la noticia:', error);
            notification.error({ message: 'Error creating new' })
        }
    };

    // UPDATE
    const UpdateForm = (news, index) => (
        <div>
            <p></p>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdate(news); }}
                action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

                <label className='customInputHome' htmlFor="title">Notice name:</label>
                <input type="text" className='customInputHome' id="title" placeholder={news.title}
                    value={newNews.title}
                    onChange={(e) => setNewNews({ ...newNews, title: e.target.value })} />
                <br /><br />

                <label className='customInputHome' htmlFor="content">Content:</label>
                <input type="text" className='customInputHomeTxt' id="content" placeholder={news.content}
                    value={newNews.content}
                    onChange={(e) => setNewNews({ ...newNews, content: e.target.value })} />
                <br /><br />

                <label className='customInputHome' htmlFor="image">Content:</label>
                <input type="file" className='customInputHome' id="image" accept="image/*"
                    placeholder={news.image}
                    onChange={(e) => setNewNews({ ...newNews, image: e.target.files[0] })} />
                <br /><br />


                <Button type="primary" htmlType="submit" style={buttonStyle1} className='BtnMobileCssUpt BtnTabletCssUpt'>Update</Button >
                &nbsp;&nbsp;
                <Button onClick={() => hide()} type="primary" style={buttonStyle2} className='BtnMobileCssUpt BtnTabletCssUpt' >Cancel</Button>
            </form>
        </div>
    );


    return (
        /*Codigo del block de modulo*/
        <div className="block">
            <MenuComponent/> 
            {Array.isArray(News) &&
                News.map((news, index) => (
                    <div key={news.id} style={{ marginBottom: '20px' }} className='block2'>
                        <div>
                            <p className='infosizeUrl'>{news.title}</p>
                        </div >
                        <div>
                            <p className='infosizeUrl'>{news.content}</p>
                        </div>
                        <div className='list-news'>
                            <img className='appicon' alt='icon1' src={`http://localhost:8000/images/${news.image}`}></img>
                        </div>
                        <div className='list-news email-space'>
                            <h1 className='borders'>
                                {/* edit */}
                                <Popover content={UpdateForm(news, index)} placement="left" title="Update module" trigger="click" className=' customposiconmodule ' 
                                forceRender={true} open={open[index]} onOpenChange={(e) => handleOpenChange(e, index)}>
                                <EditFilled className='iconBorderEditM'/>
                                </Popover>
                                {/* delete */}
                                <Button onClick={() => handleDelete(news.id)} type="primary" className="mobileBtnPos2" style={buttonStyle24} >Delete</Button>
                                &nbsp;&nbsp;
                                
                                

                            </h1>
                        </div>
                    </div>
                ))}
        </div>
    );
};
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
export default NewComponent;
