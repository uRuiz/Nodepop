#Práctica MEAN

## Nodepop API


## Requisitos de instalación

- Node >= 6.9.1 
- Puedes ver la versión de Node instalada a través del terminal, con el comando _node -v_
- MongoDB
- Git

## Instrucciones de instalación

	$ git clone https://github.com/uRuiz/Nodepop
	$ cd nodepop
	$ npm install
	
## Creación e inicialización de la base de datos
	$ npm run installDB
	
## Arrancar aplicación
	$ npm start
		
## Servicios proporcionados por la API

- **Registro** (nombre, email, contraseña)

    POST _http://localhost:3000/apiv1/usuarios/register_

- **Autenticación** (email, contraseña, token)

    POST _http://localhost:3000/apiv1/usuarios/authenticate_

- **Lista de anuncios** (paginada, con filtros de búsqueda)

    GET _http://localhost:3000/apiv1/anuncios_ (Devuelve todos los anuncios)
    
    GET _http://localhost:3000/apiv1/anuncios?tag=mobile&venta=true&nombre=iphone&limit=2&sort=precio&precio=-150 (Ejemplo de filtro)_
    

- **Lista de tags existentes** (categorías de anuncios)

    _localhost:3000/apiv1/tags_

- **En todos los servicios debe pasarle el token, bien por GET, POST o en la cabecera de la petición**

- **La visualización de errores por defecto es en Español, para visualizar los errores en inglés puede utilizarse el parámetro lang=en en las peticiones (GET o POST)**

## Visualización de fotos

- http://localhost:3000/images/bici.jpg
- http://localhost:3000/images/iphone-3g.jpg
- http://localhost:3000/images/galaxy.jpg
