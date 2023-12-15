import React, { useEffect, useState } from 'react';
import './news.css';
import { getAllNew, getNewById, updateNew, deleteNew, createNew } from '../services/newService';
import { Button, Carousel, Popover, notification} from 'antd';//antd
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { EditFilled } from '@ant-design/icons';
//Components
import NewComponent from '../Components/newComponent/newComponent';

function News() {
    const [News, setNews] = useState([]);
    const [open, setOpen] = useState([]);
    const [openC, setOpenC] = useState(false);

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
    
          notification.success({message:'New updated successfully',duration:5})
          // Vuelve a cargar la lista de noticias
          const updatedNews = await getAllNew();
          setNews(updatedNews);
    
    
        } catch (error) {
          console.error('Error al actualizar la noticia:', error);
          notification.error({message:'Error trying to update new',duration:5})
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
    
          
          notification.success({message:'New created successfully',duration:5})
    
        } catch (error) {
          console.error('Error al crear la noticia:', error);
          notification.error({message:'Error creating new'})
        }
      };





    // ADD
    const formAddPopOver = (
        <div onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
            <p></p>
            <form action="#" method="post" enctype="multipart/form-data" className='customFormHomeStyle'>

                <div>
                    <label htmlFor="title" className='customInputHome'>Título:</label><br />
                    <input
                        type="text"
                        id="title"
                        className='customInputHomeTxt'
                        value={newNews.title}
                        onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="content"  className='customInputHome'>Text:</label><br />
                    <textarea
                    type="textarea"
                    className='customInputHomeTxt'
                    id="content"
                    maxlength="1000"
                    value={newNews.content}
                    onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="image" className='customInputHome'>Image:</label><br />
                    <input
                    className='customInputHomeTxt'
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setNewNews({ ...newNews, image: e.target.files[0] })}
                    />
                </div>
                <br></br>

                <Button type="primary"  htmlType="submit" value="Add" style={buttonStyle} className='BtnMobileCssUpt BtnTabletCssUpt'>Create</Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={hidec} className='ButtonDelete'>Cancel</Button>
            </form>
        </div>
    );

    //Update
    const formUpdatePopOver = (
        <div>
            <p></p>
            <form action="#" method="post" enctype="multipart/form-data" className='customFormHomeStyle'>

                <label htmlFor="idNew" className='customInputHome'>Notice id:</label>
                <input type="number" className='customInputHome' id="idNew" name="idNew" required />
                <br /><br />

                <label htmlFor="txtNew" className='customInputHome'>Text:</label>
                <textarea
                    type="textarea"
                    className='customInputHomeTxt'
                    id="txtNew"
                    name="txtNew"
                    maxlength="1000"
                    required
                />

                <label htmlFor="URLNew" className='customInputHome'>URL:</label>
                <input type="url" className='customInputHome' id="URLNew" name="URLNew" required />
                <br /><br />

                <label htmlFor="ImageNew" className='customInputHome'>Image:</label>
                <input type="file" className='customInputHome' id="ImageNew" name="ImageNew" accept="image/*" required />
                <br /><br />

                <input type="submit" value="Update" style={buttonStyle} className='BtnMobileCssUpt BtnTabletCssUpt'>
                </input>
            </form>
        </div>
    );

    const formDeletePopOver = (
        <div>
            <p></p>
            <form action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

                <label htmlFor="idNew" className='customInputHome'>Notice id:</label>
                <input type="number" className='customInputHome' id="idNew" name="idNew" required />
                <br /><br />

                <input type="submit" value="Delete " style={buttonStyle2} className='BtnMobileCssUpt BtnTabletCssUpt'>
                </input>
            </form>
        </div>
    );
    return (
        <div style={{ textAlign: 'left', marginLeft: '10%', marginTop: '8%' }}>

            <h1 className='myTitleModules'>Modules</h1>
            <h3 className='mySubtitleModules'>Allowed modules

                {/* FALTA FUNCIONALIDAD -------------------------------------------------------------------------------------------------------- */}


                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Popover content={formAddPopOver} placement="left" title="Add module" trigger="click" className='popOverStyleBtn'>
                    <Icon icon="ant-design:plus-circle-filled" className='iconpos3 otherModIconSize iconposTabletCustom' />
                </Popover>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Popover content={formPopOverDelete} placement="left" title="Delete module" trigger="click" className='popOverStyleBtn'>
          <Icon icon="ant-design:delete-filled" className='iconpos3 iconPosBinMod otherModIconSize' />
        </Popover>     */}
            </h3>
            <br /> <br /> <br /> <br /><br />
            <div className='customBorderListMod customboxList customboxList3'>
                <NewComponent />
            </div>

        </div>
    );
    // <div style={{ textAlign: 'left', marginLeft: '10%', marginTop: '22%' }} className='positionViewBoxHomePos'>
    //     <MenuComponent />
    //     <LoginComponent className="logInComponentNone" />
    //     <h1 className='h3CutomMarginH'>News
    //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         <Popover content={formAddPopOver} placement="left" title="Add module" trigger="click" className='popOverStyleBtn iconpos37 ' >
    //             <Icon icon="ant-design:plus-circle-filled" className='iconpos3 otherModIconSize' />
    //         </Popover>


    //     </h1>

    // </div>

}

export default News;