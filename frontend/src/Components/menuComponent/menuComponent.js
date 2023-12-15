import React from 'react';
import './menuComponent.css';
//import { Link } from 'react-router-dom';
//import icono1 from '../';
import ModuleList from '../ModuleListComponent/ModuleListComponent';

function menuComponent() {
  return (
      <div>
        <div className="sidebar">
          {/* Contenido del menú lateral */}
          <div className="myMargin">
            <ModuleList />
          </div>
        </div>
        <div >
          {/* Contenido principal */}
        </div>
      </div>
  );
}

export default menuComponent;
