import React from 'react';
import './UsersModuleList.css';
import { Icon } from '@iconify/react';
import { Button, Carousel, Popover } from 'antd';
//Components
import MenuComponent from '../Components/menuComponent/menuComponent';
//import ModuleListComponent from '../Components/ModuleListComponent/ModuleListComponent';
import LoginComponent from '../Components/LoginComponent/LoginComponent'
import SearchInput from '../Components/searchInputComponent/searchInputComponent';
import UserComponent from '../Components/UserComponent/UserComponent';

function UsersModuleList() {
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
      <p><strong>Example:  </strong> "losgistic marketing"  </p>
    </div>
  );
  

  // ADD
  const formPopOverAdd = (
    <div>
      <p></p>
      <form action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

      <label htmlFor="nameUser" className='customInputHome'>Name:</label>
        <input type="text" className='customInputHome' id="nameUser" name="nameUser" required />
        <br /><br />

        <label htmlFor="employmentUser" className='customInputHome'>Employment:</label>
        <input type="text" className='customInputHome' id="employmentUser" name="employmentUser" required />
        <br />

        <label htmlFor="roleUser" className='customInputHome'>Role:
          <Popover content={formPopOverHelp} placement="left" title="Roles syntax" trigger="click" className='popOverStyleBtn'>
            <Icon icon="ant-design:question-circle-filled"className='helpIcon' />
          </Popover>
        </label>
        <input type="text" className='customInputHome' id="roleUser" name="roleUser" required />
        <br /><br />

        <label htmlFor="URLUser" className='customInputHome'>URL:</label>
        <input type="url" className='customInputHome' id="URLUser" name="URLUser" required />
        <br /><br />

        <label htmlFor="imgUser" className='customInputHome'>Image:</label>
        <input type="file" className='customInputHome' id="imgUser" name="imgUser" accept="image/*" required />
        <br /><br />

        <input type="submit" value="Add" style={buttonStyle} className='BtnMobileCssUpt BtnTabletCssUpt'>
        </input>
      </form>
    </div>
  );
  //DELETE
  const formPopOverDelete = (
    <div>
      <p></p>
      <form action="#" method="post" enctype="multipart/form-data" className='customFormMo customFormHomeStyle'>

        <label htmlFor="idUser" className='customInputHome'>User id:</label>
        <input type="number" className='customInputHome' id="idUser" name="idUser" required />
        <br /><br />

        <input type="submit" value="Delete" style={buttonStyle2} className='BtnMobileCssUpt BtnTabletCssUpt'>
        </input>
      </form>
    </div>
  );

  return (
    <div style={{ textAlign: 'left', marginLeft: '10%', marginTop: '8%' }}>
      <MenuComponent />
      <SearchInput />
      <h1 className='myTitleModules'>Users</h1>
      <h3 className='mySubtitleModules'>Users list
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        {/* FALTA FUNCIONALIDAD -------------------------------------------------------------------------------------------------------- */}
        <Popover content={formPopOverAdd} placement="left" title="Update module" trigger="click" className='popOverStyleBtn '>
          <Icon icon="ant-design:edit-filled"  className='iconpos1 editModIconSize' />
        </Popover>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Popover content={formPopOverAdd} placement="left" title="Add module" trigger="click" className='popOverStyleBtn'>
          <Icon icon="ant-design:plus-circle-filled" className='iconpos3 otherModIconSize iconposTabletCustom' />
        </Popover>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Popover content={formPopOverDelete} placement="left" title="Delete module" trigger="click" className='popOverStyleBtn'>
          <Icon icon="ant-design:delete-filled" className='iconpos3 iconPosBinMod otherModIconSize' />
        </Popover>
      </h3>
      <LoginComponent className="customLoginModPos"/>
      <div className='customBorderListMod customboxList2'>
        <UserComponent />
        <modulesList />
      </div>
    </div>
  );
}

export default UsersModuleList;
