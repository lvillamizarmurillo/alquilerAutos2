# Alquiler de Autos

Se pueden realizar varias consultas sobre un alquiler de datos, la tabla se puede visualizar en la imagen del fondo.

## Tecnologías utilizadas

- Node.js como plataforma de ejecución.
- Express.js para la creación del servidor web.
- MySQL como base de datos relacional.
- TypeScript para un desarrollo más estructurado.
- class-transformer y class-validator para la validación y transformación de datos.
- reflect-metadata
- dotenv para la gestión de variables de entorno.
- nodemon para reiniciar automáticamente el servidor en desarrollo.
- mysql2
- jose, libreria esencial para crear los JWT.

## Dependencias que se usaron

Se usó la `v18.16.1` de NojeJS para este proyecto

1. Clone este repositorio en su máquina local.

   ```
   git clone https://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:x-oauth-basic@github.com/lvillamizarmurillo/alquilerAutos2.git
   ```

2. Se pueden descargar las dependencias con el comando:

```
npm i -E -D nodemon express dotenv class-transformer reflect-metadata class-validator typescript mysql2 jose express-session
```

Se instala `nodemon` para que se reinicie el servidor cada vez que se haga un cambio en el código *Se instala nodemon en las dependecias de desarrollo* Se instala `express` para crear el servidor Se instala `dotenv` para cargar las variables de entorno Se instala `mysql2` para la conexión con la base de datos Se instala `jose` para la creacion de token Se instala `typescript` para el uso de typescript Se instala `class-transformer` para transformar los datos que se envían al servidor Se instala `class-validator` para validar los datos que se envían al servidor, es necesario el reflect-metadat y el jose para generar los tokens 4. Configuración del archivo .env Escribe el puerto que vayas a utilizar:

```
CONFIG = { "hostname" : "locahost", "port" : ""}
```

Antes de ejecutar el servidor, asegúrate de llenar los datos del archivo .env con la información de tu base de datos y las claves necesarias. El archivo .env debe tener la siguiente estructura:

```
MY_CONECTION = {"host":"localhost","user":"","password":"","database":"","port":3306}
```

Aparte debes tener la variable de entorno para usar JWT:

```
JWT_PRIVATE_KEY = "djfqoiwrue4reu23rksjd"
```

1. Para correr el servidor se usa el comando:

```
npm run dev
```



- Base de datos MySQL configurada y accesible, para crearla sencillo solo debes entrar a la carpeta db_campus_alquiler.sql
- Luego ejecutar cada código de arriba hacia abajo.

## Uso

Para utilizar el sistema de gestión de incidencias técnicas, primero debe obtener un token de permiso para acceder a los endpoints protegidos. Puede obtenerlo haciendo una solicitud a la siguiente URL:

```
GET http://localhost:port/autorizacion/:tabla?endpoint
```

Reemplace `:tabla` con los datos del usuario que va a utilizar los endpoints(users,publicaciones,animales,like). `RECUERDA` Que el port tienes que haberlo definido en el .env Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```

# Endpoints de Alquiler de Autos

A continuación, puede utilizar los siguientes endpoints para interactuar con el sistema:

### users

1. `GET /autorizacion/cliente?endpoint`: Obtiene el token de users, dura 1 h, recomendacion guardarlo.

Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```



- `GET /cliente`: Obtener todos los clientes registrados registrados.

- `GET /cliente/dni`: Obtiene un  cliente especifico por DNI.

  ```
  {
    "DNI": 12345678
  }
  ```


### Alquileres

`GET /autorizacion/alquileres?endpoint`: Obtiene el token de publicaciones, dura 1 h, recomendacion guardarlo.

Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```



- `GET /alquileres`: Obtener todos los alquileres activos registrados junto con la información del cliente referenciado .

- *`GET /alquileres/id`:* Obtiene la información de un alquiler especifico buscándolo por id.

  ```
  {
  	"ID-Alquiler": 2
  }
  ```

  

- `GET /alquileres/id`: Obtener el costo total del alquiler buscándolo por DNI del cliente.

  ```
  {
    "DNI": 12345678
  }
  ```


### Automovil

`GET /autorizacion/automovil?endpoint`: Obtiene el token de like, dura 1 h, recomendacion guardarlo.

Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```



- `GET /automovil`: Obtener todos los automóviles disponibles para  alquilar.

### Empleado

`GET /autorizacion/empleado?endpoint`: Obtiene el token de like, dura 1 h, recomendacion guardarlo.

Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```



- `GET /empleado`: Obtener todos los empleados con el cargo de vendedor.

### Reserva

`GET /autorizacion/reserva?endpoint`: Obtiene el token de like, dura 1 h, recomendacion guardarlo.

Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```



- `GET /reserva`: Obtener todas las reservas  con la información del cliente y aparte la información del automóvil.

## 

## Contacto

- Para cualquier pregunta o consulta, no dudes en contactarme al siguiente correo: lvillamizarmurillo@gmail.com

## Tablas

1. Imagen de referencia:

   ![](./img/Estructura.png)
