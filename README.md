# CentralUniformes

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#Readme-Eng">Readme english version</a>
      <ul>
        <li><a href="#About-the-project">About the project</a></li>
        <ul>
           <li><a href="#Where-does-the-need-arise-from?">Where does the need arise from?</a></li>
           <li><a href="#What-company-is-it-developed-for?">What company is it developed for?</a></li>
           <li><a href="#What-is-the-project-about?">What is the project about?</a></li>
           <li><a href="#Other">Other</a></li>
        </ul>
         <li><a href="#Diagrams-and-justification-of-the-data-model">Diagrams and justification of the data model</a></li>
        <ul>
           <li><a href="#Summary">Summary</a></li>
           <li><a href="#Diagrams">Diagrams</a></li>
          <ul>
            <li><a href="#Entity-relationship">Entity relationship</a></li>
            <li><a href="#Class-diagram">Class diagram</a></li>
            <li><a href="#ORM">ORM</a></li>
          </ul>
        </ul>
        <li>
          <a href="#User-requirenments">User requirenments</a>
        </li>
        <li>
          <a href="#Use-cases">Use cases</a>
        </li>
        <li>
          <a href="#Running">Running</a>
        </li>
         <li>
          <a href="#Interfaces">Interfaces</a>
        </li>
        <ul> 
           <li><a href="#Initial-Design">Initial Design</a></li>
           <li><a href="#Usability-and-accesibility">Usability and accesibility</a></li>
          <ul>
             <li><a href="#Usability">Usability</a></li>
            <li><a href="#Accesibility">Accesibility</a></li>
          </ul>
        </ul>
        <li><a href="#Manuals">Manuals</a></li>
        <li><a href="#Test ">Tests</a></li>
        <li><a href="#technology-stack">technology stack</a></li>
        <li><a href="#Repositories">Repositories</a></li>
        <li><a href="#Planning">Planning</a></li>
        <li><a href="#Conclusions">Conclusions</a></li> 
      </ul>
    </li>
    <li>
      <a href="#Readme-Esp">Readme en español</a>
      <ul>
        <li><a href="#Sobre-el-proyecto">Sobre el proyecto</a></li>
        <ul>
           <li><a href="#¿De-dónde-surje-la-necesidad?">¿De dónde surje la necesidad?</a></li>
           <li><a href="#¿Para-qué-empresa-se-desarrolla?">¿Para qué empresa se desarrolla?</a></li>
           <li><a href="#¿En-qué-consiste-el-proyecto?">¿En qué consiste el proyecto?</a></li>
           <li><a href="#Otro">Otro</a></li>
        </ul>
         <li><a href="#Diagramas-y-justificación-del-modelo-de-datos">Diagramas y justificación del modelo de datos</a></li>
        <ul>
           <li><a href="#Resumen">Resumen</a></li>
           <li><a href="#Diagramas">Diagramas</a></li>
          <ul>
            <li><a href="#Entidad-relación">Entidad relación</a></li>
            <li><a href="#Diagrama-de-clases">Diagrama de clases</a></li>
            <li><a href="#ORM">ORM</a></li>
          </ul>
        </ul>
        <li>
          <a href="#Requisitos-de-usuario">Requisitos de usuario</a>
        </li>
        <li>
          <a href="#Casos-de-uso">Casos de uso</a>
        </li>
        <li>
          <a href="#Funcionamiento">Funcionamiento</a>
        </li>
         <li>
          <a href="#Interfaces">Interfaces</a>
        </li>
        <ul> 
           <li><a href="#Diseño-Inicial">Diseño inicial</a></li>
           <li><a href="#Usabilidad-y-accesibilidad">Usabilidad y accesibilidad</a></li>
          <ul>
             <li><a href="#Usabilidad">Usabilidad</a></li>
            <li><a href="#Accesibilidad">Accesibilidad</a></li>
          </ul>
        </ul>
        <li><a href="#Manuales">Manuales</a></li>
        <li><a href="#Test-de-prueba ">Test de prueba</a></li>
        <li><a href="#Pila-tecnológica">Pila tecnológica</a></li>
        <li><a href="#Repositorios">Repositorios</a></li>
        <li><a href="#Planificación">Planificación</a></li>
        <li><a href="#Conclusiones">Conclusiones</a></li> 
      </ul>
    </li>
  </ol>
</details>


# Readme-Eng
# About-the-project
## Web-apps
Web apps, native apps, and hybrid apps each have their own set of advantages and disadvantages. The choice between them depends on few factors, including the specific requirements of the project, target audience, and development resources. Here's a comparison of web apps with native and hybrid.

In this case we have choosen web apps, but why?
Because they have Cross-Platform Compatibility, Web apps are accessible through web browsers on various devices, making them compatible with multiple platforms.
Users don´t have to install the app to access to it, as in natives and hybrid case.
It is easier to update, because are instantly available to all users as they are implemented on the server side, eliminating the need for users to download and install updates.
And Web apps are often more cost-effective to develop and maintain because they share a single codebase for all platforms.

But it has disadventages too and those are few of them:
Limited Device Access, web apps may not have full access to device-specific features as native apps do.
Web apps may have slightly slower performance compared to native apps, because they are not done to an specific hardware and software.
And web apps may not perform as well as native apps in offline mode, like natives.


## Where-does-the-need-arise-from?
This project is made to help the access and management of users, roles and links of a company, to facilitate both the management and use of the intranet and its apps.


## What-company-is-it-developed-for?
It is developed for the company Central Uniformes, a leading company in the sale of uniforms in the Canary Islands.

## What-is-the-project-about?
The project consists of a portal for your intranet that allows company users to access different applications to which they have permission through a link.

## Other
In these applications there will be a side menu that will contain the links to said applications. This menu will be manageable by an administrator role who will be able to add/delete/modify the menu entries and give permission to the users who have access to them. In addition, the portal must show information about each application, this being an image, title, description and link, which will be manageable by the administrator.


# Diagrams-and-justification-of-the-data-model
## Summary 
This documentation will explain the generated tables and the relationship between them and their attributes given the specifications requested by the company.

# Diagrams
## Entity-relationship
![Entity Relationship diagram](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/bf1a6bb0-d2a8-4bf4-8250-733a59225e74)


The entities in this database are; Apps; Roles; User and News.
~~~
News has the following attributes:
  id                Integer(10)  Unique Auto_increment  Primary_Key,
  title             varchar(255) Not Null,
  content           varchar(500) Not Null,
  image             file  Not Null,
~~~
~~~
Apps has the following attributes:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  icon             varchar(255) Not Null,
  URL              varchar(255) Not Null,
~~~
~~~
Roles has the following attributes:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  name             varchar(255) Not Null
~~~
~~~
User has the following attributes:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  name             varchar(255) Not Null,
  email            varchar(255) Not Null,
  password         varchar(255) Not Null
~~~
~~~
The intermediate table rol_app, due to the many-to-many relationship between Roles and Apps, has the following attributes:                                         
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  Rol_id           Integer(10)  Not Null Foreign_Key references Rol(id)
  app_id           Integer(10)  Not Null Foreign_Key references Apps(id)
~~~
~~~
The intermediate table rol_user, due to the many-to-many relationship between Roles and User, has the following attributes: 
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  Rol_id           Integer(10)  Not Null Foreign_Key references Rol(id)
  app_id           Integer(10)  Not Null Foreign_Key references User(id)
~~~

The tables are related to each other in the following way:
Roles and Apps are many-to-many related, and Roles and User are many-to-many related to each other as well, while news is an unrelated table.


### Class-diagram
![cdCU](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/cde8858c-9ae7-4852-bfcc-8d7a3363503e)


The entities are User; App; Role and New.
~~~
New has the following attributes:
  -id                Integer(10)  Unique Auto_increment  Primary_Key,
  -title             varchar(255) Not Null,
  -content           varchar(500) Not Null,
  -image             file  Not Null,
~~~
~~~
New has the following methods:
  +addNew();
  +getNew();
  +updateNew();
  +deleteNew();
~~~
~~~
App has the following attributes:
  -id               Integer(10)  Unique Auto_increment  Primary_Key,
  -icon             varchar(255) Not Null,
  -url              varchar(255) Not Null,
~~~
~~~
App has the following methods:
  +addApp();
  +getApp();
  +updatepp();
  +deleteApp();
~~~
~~~  
Rol has the following attributes:
  -id               Integer(10)  Unique Auto_increment  Primary_Key,
  -name             varchar(255) Not Null
~~~
~~~ 
Rol has the following methods:
  +addRol();
  +getRol();
  +updateRol();
  +deleteRol();
~~~
~~~  
User has the following attributes:
  -id               Integer(10)  Unique Auto_increment  Primary_Key,
  -name             varchar(255) Not Null,
  -email            varchar(255) Not Null,
  -password         varchar(255) Not Null
~~~
~~~
User has the following methods:
  +register();
  +logIn();
  +logout();
  +addCustomer();
  +getCustomer();
  +updateCustomer();
  +deleteCustomer();
~~~
  
  ### ORM
  ![ORM Diagram](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/46edecb1-7471-4524-acbb-cc7dad6352a5)


#SQL
The database is created automatically when doing a Laravel migrate, but this is the equivalent code:
Create database:
```sh
  CREATE DATABASE db_centraluniformes;
  USE db_centraluniformes;
```
Create tables:
```
  CREATE TABLE apps (
    id int not null primary key auto_increment,
    icon varchar(255) not null,
    url varchar(255) not null
);

CREATE TABLE roles (
    id int not null primary key auto_increment,
    name varchar(255) not null
);

CREATE TABLE users (
    id int not null primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);

CREATE TABLE role_apps (
    id int not null primary key auto_increment,
    apps_id int not null,
    role_id int not null,
    foreign key (apps_id) references apps(id),
    foreign key (role_id) references roles(id)
);

CREATE TABLE user_roles (
    id int not null primary key auto_increment,
    user_id int not null,
    role_id int not null,
    foreign key (user_id) references users(id),
    foreign key (role_id) references roles(id)
);
```
Backend testing in [Postman report](https://documenter.getpostman.com/view/29846283/2s9YkjB3zq)


# User-requirenments
This section aims to define the user requirements for the development of the Central Uniformes intranet application, covering the functional and non-functional requirements of the intranet, aimed at improving efficiency and internal collaboration at Central Uniformes.

Central Uniformes is a leading company in the manufacture and distribution of uniforms for various sectors, including medical services, education and corporate companies.
The intranet will be developed to improve internal communication between the company's applications, the management of links and users and the collaboration between the different departments of Central Uniformes.

As types of users, we find the administrator user who is allowed to access home, modules, users and roles, and manage the data related to them, as well as create new data entries, and the basic user who is allowed access to home and the ability to access basic links. In addition to these, the administrator can create new roles for users which allows modifying the individual access of each one to a certain area, but not modifying the data.

As functional requirements, users must register under secure credentials, in addition the application has intuitive and accessible menus for each type of user and a search bar that facilitates the search for information, in terms of content management, we can find an upload and secure downloading of data and files whose access is based on roles.

As non-functional requirements we have the loading speed that is not greater than 3 seconds, strong encryption and password security, compatibility between browsers and responsive design between tablet, mobile and PC. It also has good scalability because by allowing the creation of modules, roles and users, it will grow and adapt with the use of the company.

# Use-cases
This is the diagram that defines the use cases of the system:
![UseCaseDiagramCentralUniformes](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/c47f03be-34e2-40d6-8020-dc1b42270bdb)
In this diagram we can see that all users can see the overview and its modules previously associated by the administrator user, while the administrator can manage, create, modify and delete permissions, users and applications.

# Running
The Central Uniformes intranet application is designed to improve operational efficiency and internal collaboration. The system consists of a web application. The general operation is described here:
Login will be done through the application, and a secure login system with two-factor authentication has been implemented to guarantee security, all through an intuitive user interface and personalized user menus for each one with its related entriesa.
Access to documents will be controlled by roles, guaranteeing the privacy and security of the information.

Regarding the technical specifications, it has been developed in a cloud environment to facilitate accessibility from any location, modern and high-capacity technologies have been used to ensure its future updating and security. The storage is done in MySQL, one of the most secure database technologies. There are also basic security protocols to guarantee the safety of users.

The functionality of the app is summarized in the possibilities of using the routes:
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/91c6cafa-739b-40ca-b024-1d8637e36609)
and [postman](https://documenter.getpostman.com/view/29846283/2s9YkjB3zq)


# Interfaces
## Initial-Design

I have done the interface design in Figma, an application design tool, click [Here](https://www.figma.com/file/a9WsPZAvFzBYSJ3IYo0i4r/Central-uniformes?type=design&node-id=0%3A1&mode=design&t=4GP51U1oCj83aGM6-1) to see the interface in operation and its design.

## Usability-and-accesibility
### Usability
After implementing the application, I have proceeded to study its usability aspects and they are the following:

The interface is attractive due to its simplicity, homogeneity and the implementation of the company's colors, which facilitates the identity of its brand, as well as user attraction due to its soft colors and minimalist design.  
  ![1](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/c145f1ca-32af-43ef-ae89-a5f30f3ab741)

In addition to this, it has a simple menu based on icons so as not to overwhelm the user with information:                                                                      
  ![2](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/0e8b7cb8-a94d-4650-9643-273d90c1533d)

The icons are also homogeneous with the company's design because curves predominate:                                                                                            
  ![3](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/d40feb28-0b2c-4a00-a14f-ac4969b9e6bc)

As for the buttons, they have a rounded design and the company's colors, which strengthens the brand identity and familiarity for the user:                                                
  ![4](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/57f42dc8-dd72-4a77-878e-4a83c9c6d5f8)

The news section seeks to stand out in the user's view and be an intuitive and attractive way for the user, so I have decided to make a carousel of images and text that are redirected to the news through a button:                           
  ![5](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/35f7c6ac-e9cf-4692-a211-3041ce54c42a)

In the mobile and tablet version I have decided to hide the images to improve the user experience and simplify the view and not saturate the screen with information due to its small size:         
  ![6](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/6aea4cb9-d5da-440f-bda1-25966bf1ce74)

In the mobile version I have decided to hide the top login icon to improve the user experience and simplify the view, since this information is also found in the side menu:              
  ![7](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/ac9a2219-055d-4ef2-90ee-1b739b40ec1b)

In the standard version for the company as requested, which is the PC version, the login and logout icons stand out with the status information in a striking way due to the status of the icon:              
  ![8logout](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/8c172ab3-bdd0-45bf-9c40-3ff612fadc24)
  ![8login](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/081f8f45-aadb-499a-a0b8-0a726e18b420)

There is also a quite striking element, which is the data filtering bar, which coincides with the rest of the homogeneous design:                  
  ![9bb](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/889d61ea-a942-4788-a6e9-880b0be28c3d)

There are other less noticeable design elements, but that favor the user experience, such as the nav inside the carousel, which is homogeneous and helps the user see the desired information:            
  ![10](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/13fdbaab-5f6a-4334-8ce9-52b243de5f0b)

Another element designed to facilitate a favorable user experience is that the sidebar remains hidden in the login and register so as not to fill the screen with information not relevant to the user in that process, instead it has been changed by a simpler icon that redirects home:
  ![11](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/240a3291-983e-4c0c-b936-1c13d9d9dcdc)

Regarding the administrator experience, we can find the form design, which is intuitive and continues with the design style:
  ![12](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b2ad3b57-d39a-4bce-9f2c-d0d740775eaf)

The log out button can communicate ideas more quickly and aesthetically to the user, increasing the
system efficiency:
  ![13](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/a39e4f96-00db-48e4-9c4e-50f79b3b77a3)

The font of the application favors the understanding of the hierarchy and the balance and interaction between the different characters on the screen:                          
  ![14](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b806ff8c-08e9-4632-b190-e28c2174bd01)


### Accesibility 
Regarding the study of accessibility, we can find the following:

The text is appropriate to the resolution of the screen and varies depending on it, we can see it in the image, as it does not say px, but rather size, this varies when changing the resolution:                    
![15](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/0535d20a-72ac-4e5a-928c-85cece8d49ba)

The size of the icons changes depending on the screen resolution, since it modifies the percentage of the size of the sidebar that is filled, in addition, the bar varies depending on the width of the screen:             
![16](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/6c6a600c-8031-4d9e-9680-a19f295c9af2)

Another aspect of accessibility is the descriptive label of the images, which allows applications to know what clicked on the image:                   
![17](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/1fc61353-a631-46b9-98fc-a9865e6b947a)

An accessibility aspect could be the color contrast between the text and the background can make reading difficult for people with visual or cognitive disabilities:                  
![18](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b3f17369-fbd1-42ca-bb6a-dd8e5a60c993)

In addition to this, the entire application can be used only with the keyboard, which favors use for some people with motor disabilities.                      
![19](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/2c6e48d9-b17a-4c54-a2bf-c063a632a4bf)

The application icons have a large size and separation between them to facilitate their use for people with diseases such as parkingson and similar:                         
![20](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/be0577bb-aca8-475b-bf0f-da471c0af9bd)

The buttons are large and separated from other options to ensure correct use for people with motor disabilities:                     
![21](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b29ce5b5-b78a-4411-8ffa-ab96cc441c0b)

The inputs have a corresponding size and a space between them to facilitate their use for motor disabilities:                          
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/e417d833-f112-4afd-99b7-780d22a96e43)

I also have error control that makes it easier for the user to enter input requirements and have feedback on their errors:                     
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/0bc6bbd8-2848-4588-9159-19bd6ec0d1ac)


# Manuals
## User manual
The user manual is located in the public folder of the frontend, and is accessed from the following button:
######################################### PONER IMAGEN BOTÓN para el manual de usuario
![user manual](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/c3f56ea5-7627-4f0e-ba4b-ab8bcc069caa)


# Tests
I did the test test in the backend, the code and result is as follows:
![test tdd](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/6395b5b9-70ad-436a-8453-275c3dd418a0)

# technology-stack
To download and use the project and the technology stack, the first thing is to clone the repository and enter the project:
  ```ba
    git clone https://github.com/AdrianArmasRincon/CentralUniformes.git
    cd CentralUniformes
  ```
<p>
  For the frontend I used Reactjs 
  <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

And to configure and install React, the first thing you have to do is download [Node.js](https://nodejs.org/en).
Next, you will need to go to the frontend and install the dependencies.
```bash
  cd frontend
  npm install
```

To start the frontend, you have to enter it and enter this command (it will open at http://localhost:3000):
```bash
  npm start
```

<p>
  For the backend I used Laravel
   <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

And to configure and install Laravel, you have to download[Composer](https://getcomposer.org/download/).
Next, you will need to go to the backend and install composer.
```bash
  cd backend
  composer install
  cp .env.example .env
  php artisan key:generate
```
Edit the .env file with your database configuration.

To start the backend, you will have to go into it and enter this command:
```bash
  php artisan serve
```
<p>
  As an ORM I have used Eloquent from Laravel
 <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

<p>
  I used MySQL as a database.
   <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

# Repositories
This project has been done by [Adrián Armas](https://github.com/AdrianArmasRincon) on git's repository: [https://github.com/AdrianArmasRincon/CentralUniformes](https://github.com/AdrianArmasRincon/CentralUniformes)

The backend test is as follows:  [https://documenter.getpostman.com/view/29846283/2s9YkjB3zq](https://documenter.getpostman.com/view/29846283/2s9YkjB3zq)

# Planning
For the organization of the project I have followed the recommendation of the work distribution of [Tiburcio Cruz](https://github.com/tcrurav) and it is the following:
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/50d57767-9160-4453-ac67-eb6f43c38a93)


# Conclusions





















































































# Readme-Esp
# Sobre-el-proyecto


## ¿De-dónde-surje-la-necesidad?
Este proyecto está hecho para ayudar al acceso y gestión de usuarios, roles y links de una empresa, para facilitar tanto la gestión como el uso de la intranet y sus apps.


## ¿Para-qué-empresa-se-desarrolla?
Se desarrolla para la empresa Central Uniformes, una empresa líder en la venta de uniformes en Canarias.


## ¿En-qué-consiste-el-proyecto?
El proyecto consiste en un portal para su intranet que permita accede a los usuarios de la empresa a diferentes aplicaciones a las que tienen permiso mediante un enlace.

## Otro
En estas aplicaciones habrá un menú lateral que contendrá los enlaces de dichas aplicaciones. Este menú será gestionable por un rol de administrador que podrá añadir/borrar/modificar las entradas del menú y dar permiso a los usuarios que tienen acceso a ellas, además el portal deberá mostrar información sobre cada aplicación, siendo esta una imagen, título, descrición y enlace, que será gestionable por el administrador.

# Diagramas-y-justificación-del-modelo-de-datos 
## Resumen 
En esta documentación se va a explicar las tablas generadas y la relación entre ellas y sus atributos dadas las especificaciones pedidas por la empresa.

# Diagramas
## Entidad-relación
![Entity Relationship diagram](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/bf1a6bb0-d2a8-4bf4-8250-733a59225e74)


las entidades de esta base de datos son; Apps; Roles; User y News.
~~~
News tiene los siguientes atributos:
  id                Integer(10)  Unique Auto_increment  Primary_Key,
  title             varchar(255) Not Null,
  content           varchar(500) Not Null,
  image             file  Not Null,
~~~
~~~
Apps tiene los siguientes atributos:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  icon             varchar(255) Not Null,
  URL              varchar(255) Not Null,
~~~
~~~
Roles tiene los siguientes atributos:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  name             varchar(255) Not Null
~~~
~~~
User tiene los siguientes atributos:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  name             varchar(255) Not Null,
  email            varchar(255) Not Null,
  password         varchar(255) Not Null
~~~
~~~
La tabla intermedia rol_app debido a la relación muchos a muchos entre Roles y Apps, tiene los siguientes atributos:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  Rol_id           Integer(10)  Not Null Foreign_Key references Rol(id)
  app_id           Integer(10)  Not Null Foreign_Key references Apps(id)
~~~
~~~
La tabla intermedia rol_user debido a la relación muchos a muchos entre Roles y Users, tiene los siguientes atributos:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  Rol_id           Integer(10)  Not Null Foreign_Key references Rol(id)
  app_id           Integer(10)  Not Null Foreign_Key references User(id)
~~~

Las tablas estás relacionadas entre sí de la siguiente manera:
Roles y Apps están relacionadas muchos a muchos, y Roles y User, están relacionadas muchos a muchos entre sí también, mientras que news es una tabla no relacionada.


### Diagrama-de-clases
![cdCU](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/cde8858c-9ae7-4852-bfcc-8d7a3363503e)


Entidades son User; App; Rol y New.
~~~
New tiene los siguientes atributos:
  -new_id            Integer(10)  Unique Auto_increment  Primary_Key,
  -title             varchar(255) Not Null,
  -content           varchar(500) Not Null,
  -image             file  Not Null,
~~~
~~~
New tiene los siguientes métodos:
  +addNew();
  +getNew();
  +updateNew();
  +deleteNew();
~~~
~~~
App tiene los siguientes atributos:
  -id               Integer(10)  Unique Auto_increment  Primary_Key,
  -icon             varchar(255) Not Null,
  -url              varchar(255) Not Null,
~~~
~~~
App tiene los siguientes métodos:
  +addApp();
  +getApp();
  +updatepp();
  +deleteApp();
~~~
~~~  
Rol tiene los siguientes atributos:
  -id               Integer(10)  Unique Auto_increment  Primary_Key,
  -name             varchar(255) Not Null
~~~
~~~ 
Rol tiene los siguientes métodos:
  +addRol();
  +getRol();
  +updateRol();
  +deleteRol();
~~~
~~~  
User tiene los siguientes atributos:
  -id               Integer(10)  Unique Auto_increment  Primary_Key,
  -name             varchar(255) Not Null,
  -email            varchar(255) Not Null,
  -password         varchar(255) Not Null
~~~
~~~
User tiene los siguientes métodos:
  +register();
  +logIn();
  +logout();
  +addCustomer();
  +getCustomer();
  +updateCustomer();
  +deleteCustomer();
~~~
  
  ### ORM
  ![ORM Diagram](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/46edecb1-7471-4524-acbb-cc7dad6352a5)


#SQL
La base de datos se crea automaticamente al hacer un migrate de laravel, pero este es el código equivalente:
Create database:
```sh
  CREATE DATABASE db_centraluniformes;
  USE db_centraluniformes;
```
Create tables:
```sh
  CREATE TABLE apps (
    id int not null primary key auto_increment,
    icon varchar(255) not null,
    url varchar(255) not null
);

CREATE TABLE roles (
    id int not null primary key auto_increment,
    name varchar(255) not null
);

CREATE TABLE users (
    id int not null primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);

CREATE TABLE role_apps (
    id int not null primary key auto_increment,
    apps_id int not null,
    role_id int not null,
    foreign key (apps_id) references apps(id),
    foreign key (role_id) references roles(id)
);

CREATE TABLE user_roles (
    id int not null primary key auto_increment,
    user_id int not null,
    role_id int not null,
    foreign key (user_id) references users(id),
    foreign key (role_id) references roles(id)
);
```
Pruebas del backend en el [informe del Postman](https://documenter.getpostman.com/view/29846283/2s9YkjB3zq)


# Requisitos-de-usuario
El presente apartado tiene como objetivo definir los requisitos de usuario para el desarrollo de la aplicación de intranet de Central Uniformes, abarca los requisitos funcionales y no funcionales de la intranet, destinada a mejorar la eficiencia y la colaboración interna en Central Uniformes.

Central Uniformes es una empresa líder en la fabricación y distribución de uniformes para diversos sectores, incluyendo servicios médicos, educación y empresas corporativas.
La intranet se desarrollará para mejorar la comunicación interna entre las aplicacones de la empresa, la gestión de enlaces y usuarios y la colaboración entre los diferentes departamentos de Central Uniformes.

Como tipos de usuarios encontramos el usuario administrador que tiene permitido acceder a home, modules, users y role, y gestionar los datos relacionados a estos, así como crear nuevas entradas de datos, y el usuario básico que tiene permitido el acceso a home y la capacidad de acceder a los enlaces básicos. Además de estos el administrador puede crear nuevos roles para los usuarios el cual permite modificar el acceso individual de cada uno a un determinado área, pero no modificar los datos.

Como requisitos funcionales, los usuarios deberán registrarse bajo credenciales seguras, además la aplicación cuenta con menús intuitivos y accesibles para cada tipo de usuario y una barra de búsqueda que facilita la búsqueda de información, en cuanto a la gestión de contenidos, podemos encontrar una subida y descarga segura de datos y archivos cuyo acceso está basado en roles.

Como requisitos no funcionales tenemos la velocidad de carga que no es mayor a 3 segundos, la seguridad de encriptación y contraseñas robustas, la compatibilidad entre navegadores y el diseño responsive entre tablet, movil y pc. Además tiene una buena escalabilidad debido a que al permitir crear modulos, roles y usuarios, crecerá y se adptará con el uso de la empresa. 

# Casos-de-uso
Este es el diagrama que define los casos de uso del sistema:
![UseCaseDiagramCentralUniformes](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/c47f03be-34e2-40d6-8020-dc1b42270bdb)
En este diagrama podemos ver que todos los usuarios pueden ver la vista general y sus módulos asociados anteriormente por el usuario administrador, mientras que el administrador puede gestionar, crear, modificar y eliminar permisos, usuarios y aplicaciones.

# Funcionamiento
La aplicación de intranet de Central Uniformes está diseñada para mejorar la eficiencia operativa y la colaboración interna. El sistema consta de una aplicación web. Aquí se describe el funcionamiento general: 
El inicio de sesión se realizará a traves de la aplicación, y se ha implementado un sistema de inicio de sesión seguro con autenticación de dos factores para garantizar la seguridad, todo esto a través de una interfa de usuario intuitiva y menús de usuario personalizados a cada uno con sus entradas relacionadasa.
El acceso a documentos estará controlado por roles, garantizando la privacidad y seguridad de la información.

En cuanto a las espicificaciones técnicas, se ha desarrollado en un entorno en la nube para facilitar la accesibilidad desde cualquier ubicación, se han utilizado tecnologías modernas y de gran capacidad para asegurar la actualización futura y seguridad de esta. El almacenamiento se realiza en MySQL una de las tecnnologías mas seguras de bases de datos. Además hay protocolos de seguridad básicos para garantizar la seguridad de los usuarios.

La funcionalidad de la app se resume en las posibilidades del uso de las rutas:                                                                        
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/91c6cafa-739b-40ca-b024-1d8637e36609)
Y el [postman](https://documenter.getpostman.com/view/29846283/2s9YkjB3zq)


# Interfaces
## Diseño-Inicial
El diseño de la interfaz la he realizado en Figma, una herramienta de diseño de aplicaciones, haz click [Aquí](https://www.figma.com/file/a9WsPZAvFzBYSJ3IYo0i4r/Central-uniformes?type=design&node-id=0%3A1&mode=design&t=4GP51U1oCj83aGM6-1) para ver la interfaz en funcionamiento y su diseño.

## Usabilidad-y-accesibilidad
### Usabilidad
Tras realizar la implementación de la aplicación, he procedido a estudiar sus aspectos de usbilidad y son los siguientes:

La interfaz resulta atractiva debido a su simplicidad, homogeneidad y la implementación de colores de la empresa, lo que facilita la identidad de su marca, así como la atracción del usuario debido a sus colores suaves y su diseño minimalista.
  ![1](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/c145f1ca-32af-43ef-ae89-a5f30f3ab741)

Además de esto, cuenta con un menu simple basado en iconos para no saturar de información al usuario:                                                                       
  ![2](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/0e8b7cb8-a94d-4650-9643-273d90c1533d)

Los iconos también resultan homogéneos con el diseño de la empresa debido a que predominan las curvas:                                                                                            
  ![3](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/d40feb28-0b2c-4a00-a14f-ac4969b9e6bc)

En cuanto a los botones, tienen un diseño redondeado y con los colores de la empresa, lo que fortalece la identidad de la marca y la familiaridad para el usuario:                                                 
  ![4](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/57f42dc8-dd72-4a77-878e-4a83c9c6d5f8)

El apartado de noticias busca resaltar a la vista del usuario y ser una manera intuitiva y atractiva para el usuario, por lo que he decidido hacer un carousel de imágenes y texto que se redirigen a la noticia a través de un botón:                           
  ![5](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/35f7c6ac-e9cf-4692-a211-3041ce54c42a)

En la versión de móvil y tablet he decidido ocultar las imágenes para mejorar la experiencia de usuario y simplificar la vista y no saturar la pantalla de información debido a su tamaño reducido:          
  ![6](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/6aea4cb9-d5da-440f-bda1-25966bf1ce74)

En la versión de móvil he decidido ocultar el icono superior del login para mejorar la experiencia de usuario y simplificar la vista, ya que este dato también se encuentra en el menú lateral:              
  ![7](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/ac9a2219-055d-4ef2-90ee-1b739b40ec1b)

En la versión estandar para la empresa según se nos ha solicitado, que es la de pc, destacan los iconos de login y logout con la información del estado de manera llamativa por el estado del icono:              
  ![8logout](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/8c172ab3-bdd0-45bf-9c40-3ff612fadc24)
  ![8login](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/081f8f45-aadb-499a-a0b8-0a726e18b420)

También hay un elemento bastante llamativo, que es la barra de filtrado de datos, la cual coincide con el resto del diseo homogéneo:                  
  ![9bb](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/889d61ea-a942-4788-a6e9-880b0be28c3d)

Hay otros elementos de diseño menos notorios, pero que favorecen la experiencia de usuario, tales como el nav dentro del carousel, el cual es homogéneo y ayuda al usuario a ver la infirmación deseada:            
  ![10](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/13fdbaab-5f6a-4334-8ce9-52b243de5f0b)

Otro elemento diseñado para facilitar la experiencia favorable del usuario es que la barra lateral permanece oculta en el login y register para no llenar la pantalla con información no relevante para el usuario en ese proceso, en cambio se ha cambiado por un icono más simple que redirige a home:
  ![11](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/240a3291-983e-4c0c-b936-1c13d9d9dcdc)

En cuanto a la experiencia del administrador, podemos encontrar el diseño de formularios, que es intuitivo y continua con el estilo de diseño:
  ![12](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b2ad3b57-d39a-4bce-9f2c-d0d740775eaf)

El boton de log out, puede comunicar ideas de forma más rápida y estética al usuario, aumentando la
eficiencia del sistema:
  ![13](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/a39e4f96-00db-48e4-9c4e-50f79b3b77a3)

La fuente de la aplicación favorece el entendimiento de la jerarquía y al equilibrio y la interacción entre los distintos caracteres de la pantalla:                          
  ![14](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b806ff8c-08e9-4632-b190-e28c2174bd01)


### Accesibilidad 
En cuanto al estudio de la accesibilidad, podemos encontrar lo siguiente:

El texto es adecuado a la resolución de la pantalla y varía dependiendo de esta, podemos verlo en la imagen, como no pone px, si no que tamaño, este varía al cambiar la resolución:                     
![15](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/0535d20a-72ac-4e5a-928c-85cece8d49ba)

El tamaño de los iconos cambia dependiendo de la resolución de la pantalla, ya que modifica el porcentaje del tamaño de la barra lateral que se rellena, además, la barra varía según el ancho de la pantalla:             
![16](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/6c6a600c-8031-4d9e-9680-a19f295c9af2)

Otro aspecto de la accesibilidad es la etiqueta descriptiva de las imágenes, la cuál permite mediante aplicaciones saber que realiza el click de la imagen:                    
![17](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/1fc61353-a631-46b9-98fc-a9865e6b947a)

Un aspecto de accesibilidad podría ser el contraste de colores entre el  el texto y el fondo puede dificultar la lectura para personas con discapacidades visuales o cognitivas:                   
![18](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b3f17369-fbd1-42ca-bb6a-dd8e5a60c993)

Además de esto, toda la aplicación se puede utilizar únicamente con el teclado, lo que favorece el uso para algunas personas con discapacidades motoras.                        
![19](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/2c6e48d9-b17a-4c54-a2bf-c063a632a4bf)

Los iconos de la aplicación tienen un gran tamaño y separación entre ellos para facilitar su uso a personas con enfermedades como el parkingson y similares:                          
![20](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/be0577bb-aca8-475b-bf0f-da471c0af9bd)

Los botones son grandes y están separados de otras opciones para asegurar su correcto uso a personas con discapacidades motoras:                      
![21](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/b29ce5b5-b78a-4411-8ffa-ab96cc441c0b)

Los inputs tienen un tamaño acorde y un espacio entre ellos para facilitar su uso ante discapacidades motoras:                           
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/e417d833-f112-4afd-99b7-780d22a96e43)

También tengo control de errores que facilitan la introducción de los requisitos de los inputs para el usuario y que tenga un feedback sobre sus errores:                        
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/0bc6bbd8-2848-4588-9159-19bd6ec0d1ac)


# Manuales
## Manual de usuario
El manual de usuario se encuentra en la carpeta public del frontend, y se accede desde el siguiente botón:
######################################### PONER IMAGEN BOTÓN para el manual de usuario
![user manual](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/c3f56ea5-7627-4f0e-ba4b-ab8bcc069caa)


# Test-de-prueba 
El test de prueba lo hice en el backend, el código es el siguiente:

Y las capturas de prueba son las siguientes:

![test tdd](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/6395b5b9-70ad-436a-8453-275c3dd418a0)

# Pila-tecnológica
Para descargar y utilizar el proyecto y la pila tecnológica, lo primero es clonar el repositorio y entrar al proyecto:
  ```bash
    git clone https://github.com/AdrianArmasRincon/CentralUniformes.git
    cd CentralUniformes
  ```
<p>
  Para el frontend he utilizado Reactjs  
  <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

Y para configurar e instalar React, lo primero que hay que hacer es descargar [Node.js](https://nodejs.org/en).
A continuación, deberas ir al frontend e instalar las dependencias.
```bash
  cd frontend
  npm install
```

Para iniciar el frontend, hay que meterse a él y poner este comando (se abrirá en http://localhost:3000):
```bash
  npm start
```

<p>
  Para el backend he utilizado Laravel
   <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

Y para configurar e instalar Laravel, hay que descargar [Composer](https://getcomposer.org/download/).
A continuación, deberás ir al backend e instalar composer.
```bash
  cd backend
  composer install
  cp .env.example .env
  php artisan key:generate
```
Edita el archivo .env con la configuración de tu base de datos.

Para iniciar el backend, deberás meterte a él e introducir este comando:
```bash
  php artisan serve
```
<p>
  Como ORM he utilizado Eloquent de Laravel
 <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

<p>
  Como base de datos he utilizado MySQL
   <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="Reactjs" width="50" height="50"/> 
  </a>
</p>

# Repositorios
Este proyecto ha sido realizado por [Adrián Armas](https://github.com/AdrianArmasRincon) en el repositorio de git: [https://github.com/AdrianArmasRincon/CentralUniformes](https://
github.com/AdrianArmasRincon/CentralUniformes)

La prueba del backend es la siguiente: [https://documenter.getpostman.com/view/29846283/2s9YkjB3zq](https://documenter.getpostman.com/view/29846283/2s9YkjB3zq)

# Planificación
Para la organización del proyecto he seguido la recomendación de la distribución de trabajo de [Tiburcio Cruz](https://github.com/tcrurav) y es la siguiente:
![image](https://github.com/AdrianArmasRincon/CentralUniformes/assets/146866842/50d57767-9160-4453-ac67-eb6f43c38a93)


# Conclusiones
