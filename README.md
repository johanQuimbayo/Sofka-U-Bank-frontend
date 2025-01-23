# Sofka-U-Bank-frontend

## Objetivo del Proyecto
El objetivo principal de este proyecto es desarrollar una aplicación web frontend para manejar el proceso de autenticación de usuarios, incluyendo login y registro. La aplicación consume un API desarrollado en Spring Boot, y está diseñada para cumplir con los principios de SOLID y Clean Code, ofreciendo una estructura de código clara, extensible y mantenible.

## Tecnologías Implementadas
- **Node.js**: Entorno de ejecución para el desarrollo del frontend.
- **TypeScript**: Lenguaje que extiende JavaScript con tipado estático.
- **Webpack**: Herramienta de empaquetado para organizar y optimizar los archivos del proyecto.
- **Axios**: Cliente HTTP utilizado para consumir el API del backend.
- **HTML5 y CSS3**: Para la estructura y estilos de la interfaz de usuario.
- **Google Fonts**: Para mejorar la apariencia tipográfica.

## Arquitectura
El proyecto sigue una arquitectura basada en el patrón **Model-View-Controller (MVC)**. Este patrón divide el proyecto en tres capas principales:

- **Model**: Maneja los datos y las estructuras necesarias para la lógica de negocio.
- **View**: Es la interfaz de usuario, definida en archivos HTML y estilizada con CSS.
- **Controller**: Gestiona la lógica de la aplicación y actúa como intermediario entre las vistas y los modelos.

Adicionalmente, se utiliza **Webpack** para manejar el empaquetado de los recursos, como JavaScript, CSS e imágenes.

## Patrón de Desarrollo
El proyecto implementa los principios de **SOLID** y **Clean Code**, lo que garantiza un código modular, reutilizable y fácil de mantener. Cada clase tiene una única responsabilidad, y las dependencias son gestionadas adecuadamente para minimizar el acoplamiento.

## Estructura de Archivos
```
login-app/
├── dist/                # Archivos generados por Webpack
├── src/
│   ├── assets/
│   │   ├── images/     # Imágenes como logos
│   │   └── styles/     # Estilos CSS
│   ├── controllers/    # Controladores (LoginController, RegisterController)
│   ├── services/       # Servicios (AuthService, RegisterService)
│   ├── views/          # Archivos HTML (login.html, register.html, dashboard.html)
│   ├── utils/          # Funciones auxiliares (e.g., manejo de localStorage, loaders)
│   └── index.ts        # Punto de entrada principal
├── package.json         # Dependencias del proyecto
├── webpack.config.js    # Configuración de Webpack
└── README.md            # Documentación
```

## Clases y Ficheros de la Aplicación

### **Controllers**
#### `AuthController`
- **Responsabilidad**: Manejar la lógica del inicio de sesión.
- **Métodos principales**:
  - `handleLogin()`: Captura los datos del formulario, realiza la validación y utiliza `AuthService` para autenticar al usuario.
  - `showErrorMessage(message: string)`: Muestra mensajes de error debajo del formulario.

#### `RegisterController`
- **Responsabilidad**: Gestionar el flujo de registro de nuevos usuarios.
- **Métodos principales**:
  - `handleRegister()`: Captura los datos del formulario y utiliza `RegisterService` para enviar los datos al backend.
  - `showErrorMessage(message: string)`: Muestra mensajes de error en caso de fallos en el registro.

### **Services**
#### `AuthService`
- **Responsabilidad**: Consumir el endpoint de login del API.
- **Métodos principales**:
  - `login(email: string, password: string)`: Realiza la solicitud de autenticación al backend y maneja las respuestas.

#### `RegisterService`
- **Responsabilidad**: Consumir el endpoint de registro del API.
- **Métodos principales**:
  - `register(userData: UserRequest)`: Envía los datos del usuario al backend para registrar un nuevo usuario.

### **Utils**
#### `Loader`
- **Responsabilidad**: Mostrar y ocultar una pantalla de carga mientras se realizan peticiones asíncronas.
- **Métodos principales**:
  - `showLoading()`: Muestra el loader.
  - `hideLoading()`: Oculta el loader.

#### `LocalStorageUtils`
- **Responsabilidad**: Manejar el almacenamiento y recuperación de datos en el localStorage.
- **Métodos principales**:
  - `saveItem(key: string, value: string)`: Guarda un dato en el localStorage.
  - `getItem(key: string)`: Recupera un dato del localStorage.
  - `clear()`: Limpia todos los datos del localStorage.

### **Views**
#### `login.html`
- **Descripción**: Contiene el formulario de inicio de sesión.
- **Integración**: Usa `LoginController` para manejar las interacciones del usuario.

#### `register.html`
- **Descripción**: Contiene el formulario de registro.
- **Integración**: Usa `RegisterController` para manejar las interacciones del usuario.

#### `dashboard.html`
- **Descripción**: Pantalla principal después de la autenticación. Muestra un resumen de información del usuario y opciones de navegación.
- **Integración**: Muestra mensajes personalizados como "Bienvenido <nombre del usuario>" utilizando datos almacenados en el localStorage.

## Cómo Ejecutar el Proyecto
1. Clona el repositorio: `git clone <URL del repositorio>`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm start`
4. Accede a la aplicación en tu navegador: [http://localhost:3000](http://localhost:3000)

---

Con esta estructura y documentación, el proyecto es fácil de entender, extender y mantener. ¡Feliz codificación! 🚀

