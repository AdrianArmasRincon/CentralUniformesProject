import React, { useEffect, useState } from 'react';
import './Home.css';
import { getAllNew, getNewById, createnew, updateNew, deleteNew } from '../services/newService';
import { Button, Carousel, Popover } from 'antd';//antd
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { EditFilled } from '@ant-design/icons';
//Components
import MenuComponent from '../Components/menuComponent/menuComponent';
import LoginComponent from '../Components/LoginComponent/LoginComponent';

function Home(props) {
  const [News, setNews] = useState([]);
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
  useEffect(() => {
    // Llama a la función de servicio para obtener aplicaciones cuando el componente se monta
    getAllNew().then((data) => {
        setNews(data); // Actualiza el estado con las aplicaciones obtenidas
        console.log('Data received:', data);
        console.log("datos obtenidos");
    })
        .catch((error) => {
            console.error('Error:', error);
        });
}, []);


const onChange = (currentSlide) => {
    console.log(currentSlide);
};

  
  
  return (
    <div style={{ textAlign: 'left', marginLeft: '10%', marginTop: '22%' }} className='positionViewBoxHomePos'>
      <MenuComponent/> 
      <LoginComponent className="logInComponentNone"/>
      <h1 className='h3CutomMarginH'>News
      </h1>


      <Carousel autoplay autoplaySpeed={2000} slidesToShow={1} className='carouselPos'>
      {Array.isArray(News) &&
        News.map((news, index) => (
          // Each item in the carousel should be wrapped in a div
          <div key={index} className='homeScreenSplitHome'>
            <div class="leftHalf">
              <div className='customImgViewBoxH'>
              <img  alt='notice home' src={`http://localhost:8000/images/${news.image}`} className='customImgH'></img>
              </div>
            </div>
            <div class="rightHalf">
              <div className='customPHomeDContainer'>
                <textarea className='customPHomeD' readOnly>
                  {news.content}
                </textarea>
                <Link to="/Modules">
                  <Button type="link" style={buttonStyle} className='btnMobileVersionHome'>
                    Go to this notice
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </Carousel>


    </div>
  );
}

export default Home;

