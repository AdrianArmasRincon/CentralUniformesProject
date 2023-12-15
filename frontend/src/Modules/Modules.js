import React from 'react';
import './Modules.css';
import { Icon } from '@iconify/react';
import { Button, Carousel, Popover } from 'antd';
import { EditFilled } from '@ant-design/icons';


//Components
import MenuComponent from '../Components/menuComponent/menuComponent';
//import ModuleListComponent from '../Components/ModuleListComponent/ModuleListComponent';
import LoginComponent from '../Components/LoginComponent/LoginComponent'
import SearchInput from '../Components/searchInputComponent/searchInputComponent';
import ModuleComponent from '../Components/ModuleComponent/moduleComponent';

function Modules() {
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
  //HELP
  const formPopOverHelp = (
    <div>
      <h4>Insert roles with a space btween them</h4>
      <p><strong>Example:  </strong> "losgistic marketing"</p>
    </div>
  );

  // ADD
  const formPopOverAdd = (
    <div>
      <p></p>
      <form action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

        <label htmlFor="nameModule" className='customInputHome'>Module name:</label>
        <input type="text" className='customInputHome' id="campoTexto" name="campoTexto" required />
        <br /><br />

        <label htmlFor="descriptionModule" className='customInputHome'>Description:</label>
        <input type="text" className='customInputHome' id="campoTexto" name="campoTexto" required />
        <br />

        <label htmlFor="roleModule" className='customInputHome'>Allowed roles: 
          <Popover content={formPopOverHelp} placement="left" title="Roles syntax" trigger="click" className='popOverStyleBtn'>
            <Icon icon="ant-design:question-circle-filled"className='helpIcon' width="4%" height="4%" />
          </Popover>
        </label>
          
        <input type="text" className='customInputHome' id="campoTexto" name="campoTexto" required />
        <br /><br />

        <label htmlFor="URLModule" className='customInputHome'>URL:</label>
        <input type="url" className='customInputHome' id="campoURL" name="campoURL" required />
        <br /><br />

        <label htmlFor="imgModule" className='customInputHome'>Image:</label>
        <input type="file" className='customInputHome' id="campoImagen" name="campoImagen" accept="image/*" required />
        <br /><br />

        <input type="submit" value="Add" style={buttonStyle} className='BtnMobileCssUpt BtnTabletCssUpt'>
        </input>
      </form>
    </div>
  );

  

  return (
    <div style={{ textAlign: 'left', marginLeft: '10%', marginTop: '8%' }}>
      <MenuComponent />
      <SearchInput />
      <h1 className='myTitleModules'>Modules</h1>
      <h3 className='mySubtitleModules'>Allowed modules
      
        {/* FALTA FUNCIONALIDAD -------------------------------------------------------------------------------------------------------- */}
        

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Popover content={formPopOverAdd} placement="left" title="Add module" trigger="click" className='popOverStyleBtn'>
          <Icon icon="ant-design:plus-circle-filled" className='iconpos3 otherModIconSize iconposTabletCustom' />
        </Popover>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Popover content={formPopOverDelete} placement="left" title="Delete module" trigger="click" className='popOverStyleBtn'>
          <Icon icon="ant-design:delete-filled" className='iconpos3 iconPosBinMod otherModIconSize' />
        </Popover>     */}
      </h3>
      <LoginComponent className="customLoginModPos"/>
      <br/> <br/> <br/> <br/><br/>
      <div className='customBorderListMod customboxList customboxList3'>
        <ModuleComponent />
        <modulesList />
      </div>

    </div>
  );
}

export default Modules;
