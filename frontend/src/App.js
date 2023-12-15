import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

// Pages
import Home from './Home/Home';
import LogIn from './LogIn/logIn';
import Register from './Register/register';
import Modules from './Modules/Modules';
import Users from './UsersModuleList/UsersModuleList';
import UserProfile from './UserProfile/UserProfile';
import Roles from './Roles/Roles';
import UserRoles from './userRoleview/userRoleview';
import AppRoles from './appRolview/appRolview';
import News from './News/news';

// Component Routes imports
import SearchInput from './Components/searchInputComponent/searchInputComponent';
import ModuleList from './Components/ModuleListComponent/ModuleListComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import ModuleComponent from './Components/ModuleComponent/moduleComponent';
import UserComponent from './Components/UserComponent/UserComponent';
import RoleComponent from './Components/RoleComponent/RoleComponent';
import NewComponent from './Components/newComponent/newComponent';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Modules" element={<Modules />} />
        <Route path="/SearchInput" element={<SearchInput />} />
        <Route path="/ModuleList" element={<ModuleList />} />
        <Route path="/LoginComponent" element={<LoginComponent />} />
        <Route path="/ModuleComponent" element={<ModuleComponent />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/UserComponent" element={<UserComponent />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/RoleComponent" element={<RoleComponent />} />
        <Route path="/Roles" element={<Roles />} />
        <Route path="/userRolview" element={<UserRoles />} />
        <Route path="/appRolview" element={<AppRoles />} />
        <Route path="/newsView" element={<News />} />
        <Route path="/newComponent" element={<NewComponent />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
