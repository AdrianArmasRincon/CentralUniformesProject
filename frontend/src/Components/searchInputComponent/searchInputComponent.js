import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input } from 'antd';
import './searchInputComponent.css';

const { Search } = Input;

// El ícono que se mostrará en el input de búsqueda
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

// Función que se ejecuta al realizar la búsqueda
const onSearch = (value, _e, info) => console.log(info?.source, value);

function SearchInput() {
  return (
    <div className='customInput'>
      <Search
        placeholder="Search . . ."
        allowClear  // Agrega un botón para borrar el texto del input
        enterButton="Search"  // Personaliza el texto del botón de búsqueda
        size="large"  // Ajusta el tamaño del input
        onSearch={onSearch}
      />
    </div>
  );
}

export default SearchInput;
