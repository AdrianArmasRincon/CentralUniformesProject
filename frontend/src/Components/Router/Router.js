import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Routes imports
import Home from '../../Home/Home';
import LogIn from '../../LogIn/logIn'; 
import Register from '../../Register/register'; 
import SearchInput from '../../Components/searchInputComponent/searchInputComponent';
import ModuleList from '../../Components/ModuleListComponent/ModuleListComponent';
import LoginComponent from '../../Components/LoginComponent/LoginComponent';


const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/LogIn">LogIn</Link>
        <Link to="/Register">Register</Link>
        <Link to="/SearchInput">SearchInput</Link>
        <Link to="/ModuleList">ModuleList</Link>
        <Link to="/LoginComponent">LoginComponent</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SearchInput" element={<SearchInput />} />
        <Route path="/ModuleList" element={<ModuleList />} />
        <Route path="/LoginComponent" element={<LoginComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
