
# Introducción a Server Side Rendering (SSR)

## Teoría

### Definición de SSR
Server Side Rendering (SSR) es una técnica de renderizado en la que el servidor genera el HTML completo de una página y lo envía al cliente. Esto significa que el contenido de la página ya está renderizado antes de que llegue al navegador del cliente, mejorando la velocidad de carga inicial y la optimización para motores de búsqueda (SEO).

### Ventajas de SSR
- **Mejor SEO**: Los motores de búsqueda pueden indexar el contenido fácilmente porque está disponible en el HTML inicial.
- **Mejor rendimiento en la carga inicial**: Los usuarios pueden ver el contenido de la página más rápido porque el HTML ya está generado.
- **Mejor accesibilidad**: El contenido está disponible inmediatamente para tecnologías asistivas, como lectores de pantalla.

### Desventajas de SSR
- **Mayor carga en el servidor**: El servidor debe generar el HTML completo para cada solicitud, lo que puede aumentar la carga del servidor.
- **Mayor complejidad del desarrollo**: La gestión del estado y la lógica de renderizado puede ser más compleja en SSR comparado con CSR.

## Práctica

### Configuración Básica
Vamos a crear un servidor básico usando Express.js para servir contenido HTML.

1. **Instalar Express.js**
   ```bash
   npm init -y
   npm install express
   ```

2. **Crear el servidor básico**
   ```javascript
   // server.js
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
       res.send('<h1>Hello from Server Side Rendering!</h1>');
   });

   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Ejecutar el servidor**
   ```bash
   node server.js
   ```

   Abre tu navegador y visita `http://localhost:3000` para ver el mensaje "Hello from Server Side Rendering!".



# SSR vs Client Side Rendering (CSR)

## Teoría

### SSR (Server Side Rendering)
- **Definición**: El servidor genera el HTML completo de la página y lo envía al cliente. El contenido está listo para ser mostrado tan pronto como el navegador lo recibe.
- **Ventajas**:
  - **Mejor SEO**: Los motores de búsqueda pueden indexar el contenido fácilmente porque está disponible en el HTML inicial.
  - **Mejor rendimiento en la carga inicial**: Los usuarios pueden ver el contenido de la página más rápido porque el HTML ya está generado.
  - **Mejor accesibilidad**: El contenido está disponible inmediatamente para tecnologías asistivas, como lectores de pantalla.
- **Desventajas**:
  - **Mayor carga en el servidor**: El servidor debe generar el HTML completo para cada solicitud, lo que puede aumentar la carga del servidor.
  - **Mayor complejidad del desarrollo**: La gestión del estado y la lógica de renderizado puede ser más compleja en SSR comparado con CSR.

### CSR (Client Side Rendering)
- **Definición**: El cliente (navegador) descarga una aplicación JavaScript y esta es responsable de renderizar el contenido dinámicamente. El servidor solo envía los archivos JavaScript y recursos necesarios.
- **Ventajas**:
  - **Menor carga en el servidor**: El servidor solo envía los archivos estáticos y no necesita generar el HTML para cada solicitud.
  - **Interactividad más rápida**: Una vez cargada la aplicación, las interacciones del usuario son rápidas y fluidas porque no se necesita volver a cargar la página.
  - **Desarrollo más sencillo**: La gestión del estado y la lógica de renderizado suelen ser más simples en CSR.
- **Desventajas**:
  - **SEO más complicado**: Los motores de búsqueda pueden tener dificultades para indexar contenido que se genera dinámicamente en el cliente.
  - **Mayor tiempo de carga inicial**: El usuario debe esperar a que se descargue y ejecute la aplicación JavaScript antes de ver el contenido.

## Práctica

### Ejemplo de SSR

1. **Instalar Express.js**
   ```bash
   npm init -y
   npm install express
   ```

2. **Crear el servidor básico**
   ```javascript
   // server.js
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
       res.send('<h1>Hello from Server Side Rendering!</h1>');
   });

   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Ejecutar el servidor**
   ```bash
   node server.js
   ```

   Abre tu navegador y visita `http://localhost:3000` para ver el mensaje "Hello from Server Side Rendering!".

### Ejemplo de CSR

1. **Crear una aplicación React**
   ```bash
   npx create-react-app my-csr-app
   cd my-csr-app
   npm start
   ```

2. **Modificar el componente App para mostrar un mensaje**
   ```javascript
   // src/App.js
   import React from 'react';

   function App() {
       return (
           <div className="App">
               <h1>Hello from Client Side Rendering!</h1>
           </div>
       );
   }

   export default App;
   ```

3. **Ejecutar la aplicación React**
   ```bash
   npm start
   ```

   Abre tu navegador y visita `http://localhost:3000` para ver el mensaje "Hello from Client Side Rendering!".


# Herramientas y Frameworks para SSR

## Teoría

### Next.js
- **Descripción**: Next.js es un framework para React que soporta SSR, renderizado estático, y renderizado híbrido.
- **Ventajas**:
  - **Configuración mínima**: Viene con configuración por defecto que facilita el inicio rápido.
  - **Pre-renderizado**: Soporta generación de páginas en el build time (SSG) y en el request time (SSR).
  - **Optimización automática**: Optimiza automáticamente las páginas para mejorar el rendimiento.

### Nuxt.js
- **Descripción**: Nuxt.js es un framework para Vue.js que soporta SSR y renderizado estático.
- **Ventajas**:
  - **Configuración sencilla**: Proporciona una estructura de proyecto y configuración que facilita el desarrollo.
  - **Modular**: Tiene una arquitectura modular que permite integrar fácilmente diferentes funcionalidades.
  - **SEO amigable**: Optimiza las aplicaciones para SEO de forma automática.

## Práctica

### Configuración Inicial con Next.js

1. **Instalar Next.js**
   ```bash
   npx create-next-app@latest my-ssr-app
   cd my-ssr-app
   npm run dev
   ```

2. **Estructura del Proyecto**
   La estructura del proyecto incluye carpetas como `pages`, `public`, y `styles`.

3. **Crear una Página Básica**
   ```javascript
   // pages/index.js
   export default function Home() {
       return <h1>Hello from Next.js SSR!</h1>;
   }
   ```

4. **Ejecutar la Aplicación**
   ```bash
   npm run dev
   ```

   Abre tu navegador y visita `http://localhost:3000` para ver el mensaje "Hello from Next.js SSR!".


# Renderizado Híbrido

## Teoría

### Renderizado Híbrido (SSR + CSR)
El renderizado híbrido combina Server Side Rendering (SSR) y Client Side Rendering (CSR) para aprovechar lo mejor de ambos mundos. En este enfoque, la página se renderiza inicialmente en el servidor para mejorar el SEO y la velocidad de carga inicial, y luego el cliente toma el control para manejar la interactividad y las actualizaciones dinámicas.

### Ventajas del Renderizado Híbrido
- **SEO y rendimiento mejorados**: La página está lista para ser indexada por motores de búsqueda y se carga rápidamente para el usuario.
- **Interactividad rica**: Una vez cargada, la página puede aprovechar las ventajas del CSR para una mejor experiencia de usuario.
- **Escalabilidad**: Reduce la carga en el servidor al pasar parte de la lógica al cliente.

### Desventajas del Renderizado Híbrido
- **Complejidad**: Implementar y mantener aplicaciones híbridas puede ser más complejo debido a la necesidad de gestionar tanto SSR como CSR.
- **Estado compartido**: Puede ser difícil mantener el estado sincronizado entre el servidor y el cliente.

## Práctica

### Implementación en Next.js

1. **Instalar Next.js**
   ```bash
   npx create-next-app@latest my-hybrid-app
   cd my-hybrid-app
   npm run dev
   ```

2. **Crear una Página Híbrida**
   ```javascript
   // pages/index.js
   import { useEffect, useState } from 'react';

   export default function Home() {
       const [data, setData] = useState(null);

       useEffect(() => {
           fetch('/api/data')
               .then(response => response.json())
               .then(data => setData(data));
       }, []);

       return (
           <div>
               <h1>Hybrid Rendering with Next.js</h1>
               {data ? (
                   <pre>{JSON.stringify(data, null, 2)}</pre>
               ) : (
                   <p>Loading data...</p>
               )}
           </div>
       );
   }

   export async function getServerSideProps() {
       const res = await fetch('https://api.example.com/data');
       const initialData = await res.json();

       return {
           props: { initialData },
       };
   }
   ```

3. **Crear una API Route para Datos Dinámicos**
   ```javascript
   // pages/api/data.js
   export default function handler(req, res) {
       res.status(200).json({ message: 'Hello from API route!' });
   }
   ```

4. **Ejecutar la Aplicación**
   ```bash
   npm run dev
   ```

   Abre tu navegador y visita `http://localhost:3000` para ver la página híbrida. La página se renderizará inicialmente en el servidor con los datos de `getServerSideProps`, y luego el cliente fetcheará datos adicionales de la API route.





# Rutas Dinámicas y Estáticas en SSR

## Teoría

### Rutas Estáticas
- **Definición**: Las rutas estáticas son aquellas que se generan en el momento de la compilación. El contenido de estas rutas no cambia y es el mismo para todos los usuarios.
- **Ventajas**:
  - **Rendimiento**: Las páginas estáticas se cargan rápidamente porque el contenido ya está pre-renderizado.
  - **SEO**: Las páginas estáticas son fácilmente indexables por los motores de búsqueda.
- **Desventajas**:
  - **Flexibilidad**: No se puede personalizar el contenido para diferentes usuarios.

### Rutas Dinámicas
- **Definición**: Las rutas dinámicas se generan en el momento de la solicitud. El contenido puede variar según el usuario o la solicitud específica.
- **Ventajas**:
  - **Personalización**: Permite mostrar contenido personalizado a los usuarios.
  - **Flexibilidad**: Puede manejar datos dinámicos y en tiempo real.
- **Desventajas**:
  - **Rendimiento**: Puede ser más lento que las rutas estáticas porque el contenido se genera en el momento de la solicitud.
  - **Carga del servidor**: Aumenta la carga del servidor debido a la necesidad de generar contenido dinámico.

## Práctica

### Implementación en Next.js

1. **Instalar Next.js**
   ```bash
   npx create-next-app@latest my-dynamic-static-app
   cd my-dynamic-static-app
   npm run dev
   ```

2. **Crear Rutas Estáticas**
   - **Archivo**: `pages/index.js`
     ```javascript
     export default function Home() {
         return <h1>Home Page - Static Route</h1>;
     }
     ```

   - **Archivo**: `pages/about.js`
     ```javascript
     export default function About() {
         return <h1>About Page - Static Route</h1>;
     }
     ```

3. **Crear Rutas Dinámicas**
   - **Archivo**: `pages/[id].js`
     ```javascript
     export async function getServerSideProps(context) {
         const { id } = context.params;
         return {
             props: { id },
         };
     }

     export default function Page({ id }) {
         return <h1>Dynamic Page with ID: {id}</h1>;
     }
     ```

4. **Crear una Página Dinámica con Datos Fetchados**
   - **Archivo**: `pages/post/[id].js`
     ```javascript
     export async function getServerSideProps(context) {
         const { id } = context.params;
         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
         const post = await res.json();

         return {
             props: { post },
         };
     }

     export default function Post({ post }) {
         return (
             <div>
                 <h1>{post.title}</h1>
                 <p>{post.body}</p>
             </div>
         );
     }
     ```

5. **Ejecutar la Aplicación**
   ```bash
   npm run dev
   ```

   Abre tu navegador y visita:
   - `http://localhost:3000` para ver la ruta estática "Home Page".
   - `http://localhost:3000/about` para ver la ruta estática "About Page".
   - `http://localhost:3000/1` para ver la ruta dinámica con el ID "1".
   - `http://localhost:3000/post/1` para ver la ruta dinámica con datos fetchados del post con ID "1".




# Optimización del Rendimiento en SSR

## Teoría

### Técnicas para Mejorar el Rendimiento en SSR
1. **Caching**: Almacenar en caché las respuestas del servidor para reducir la carga y mejorar los tiempos de respuesta.
   - **Caching a Nivel de Aplicación**: Almacenar en caché los resultados de las peticiones a APIs o consultas a la base de datos.
   - **Caching a Nivel de CDN**: Utilizar una red de entrega de contenido (CDN) para almacenar en caché y servir contenido estático.

2. **Lazy Loading**: Cargar componentes y datos solo cuando son necesarios, en lugar de cargarlos todos al inicio.
   - **Componentes Lazy**: Utilizar la funcionalidad de lazy loading en frameworks como React para cargar componentes bajo demanda.
   - **Imágenes Lazy**: Cargar imágenes solo cuando están a punto de entrar en la vista del usuario.

3. **Minificación y Compresión**: Reducir el tamaño de los archivos enviados al cliente.
   - **Minificación de CSS y JavaScript**: Eliminar espacios en blanco, comentarios y reducir el tamaño del código.
   - **Compresión Gzip/Brotli**: Utilizar compresión para reducir el tamaño de los archivos enviados.

4. **Optimización de Consultas a la Base de Datos**: Mejorar la eficiencia de las consultas a la base de datos.
   - **Índices**: Crear índices en las columnas que se consultan con frecuencia.
   - **Consultas Optimizadas**: Escribir consultas SQL eficientes y evitar las subconsultas innecesarias.

## Práctica

### Implementación en Next.js

1. **Caching a Nivel de Aplicación**
   - **Archivo**: `pages/data.js`
     ```javascript
     let cachedData = null;
     let cacheTime = null;

     export async function getServerSideProps() {
         const now = Date.now();
         if (!cachedData || (now - cacheTime) > 60000) { // Cache expiration: 1 minute
             const res = await fetch('https://jsonplaceholder.typicode.com/posts');
             cachedData = await res.json();
             cacheTime = now;
         }

         return {
             props: { posts: cachedData },
         };
     }

     export default function DataPage({ posts }) {
         return (
             <div>
                 <h1>Data with Caching</h1>
                 <ul>
                     {posts.map(post => (
                         <li key={post.id}>{post.title}</li>
                     ))}
                 </ul>
             </div>
         );
     }
     ```

2. **Lazy Loading de Componentes**
   - **Archivo**: `pages/index.js`
     ```javascript
     import dynamic from 'next/dynamic';

     const LazyComponent = dynamic(() => import('../components/LazyComponent'), {
         loading: () => <p>Loading...</p>,
     });

     export default function Home() {
         return (
             <div>
                 <h1>Home Page with Lazy Loading</h1>
                 <LazyComponent />
             </div>
         );
     }
     ```

   - **Archivo**: `components/LazyComponent.js`
     ```javascript
     export default function LazyComponent() {
         return <div>This component is loaded lazily!</div>;
     }
     ```

3. **Minificación y Compresión**
   - Next.js realiza automáticamente la minificación de CSS y JavaScript en el modo de producción.
   - Para habilitar la compresión Gzip, puedes utilizar un middleware como `compression`.

   - **Instalar y Configurar Compression**
     ```bash
     npm install compression
     ```

   - **Archivo**: `server.js` (si usas un servidor personalizado)
     ```javascript
     const express = require('express');
     const next = require('next');
     const compression = require('compression');

     const dev = process.env.NODE_ENV !== 'production';
     const app = next({ dev });
     const handle = app.getRequestHandler();

     app.prepare().then(() => {
         const server = express();

         // Utilizar compresión Gzip
         server.use(compression());

         server.get('*', (req, res) => {
             return handle(req, res);
         });

         server.listen(3000, (err) => {
             if (err) throw err;
             console.log('> Ready on http://localhost:3000');
         });
     });
     ```

4. **Optimización de Consultas a la Base de Datos**
   - **Ejemplo con MongoDB**
     ```javascript
     // Archivo: lib/db.js
     import { MongoClient } from 'mongodb';

     let cachedClient = null;
     let cachedDb = null;

     export async function connectToDatabase() {
         if (cachedClient && cachedDb) {
             return { client: cachedClient, db: cachedDb };
         }

         const client = await MongoClient.connect(process.env.MONGODB_URI, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
         });

         const db = client.db(process.env.MONGODB_DB);

         cachedClient = client;
         cachedDb = db;

         return { client, db };
     }
     ```

   - **Archivo**: `pages/api/posts.js`
     ```javascript
     import { connectToDatabase } from '../../lib/db';

     export default async function handler(req, res) {
         const { db } = await connectToDatabase();
         const posts = await db.collection('posts').find({}).toArray();
         res.status(200).json(posts);
     }
     ```
   



# Autenticación y Autorización

## Teoría

### Autenticación vs. Autorización
- **Autenticación**: Proceso de verificar la identidad del usuario. Ejemplo: login con usuario y contraseña.
- **Autorización**: Proceso de verificar si el usuario tiene permisos para realizar una acción específica o acceder a un recurso. Ejemplo: verificar roles de usuario para acceder a ciertas rutas.

### Implementación en SSR
En aplicaciones con SSR, la autenticación y autorización se manejan tanto en el servidor como en el cliente. Al realizar la autenticación en el servidor, se puede establecer una sesión o token de autenticación que el cliente utiliza para las solicitudes posteriores.

### Tokens y Sesiones
- **JWT (JSON Web Token)**: Un estándar para crear tokens de acceso que contienen información del usuario y su expiración.
- **Sesiones**: Mecanismo tradicional donde el servidor guarda el estado de la sesión y una cookie en el cliente para identificar la sesión.

### Tipos de Autenticación

1. **Autenticación Basada en Contraseña**
   - **Descripción**: El método más común donde los usuarios se autentican mediante un nombre de usuario y una contraseña.
   - **Ventajas**: Sencillo y ampliamente entendido.
   - **Desventajas**: Vulnerable a ataques de fuerza bruta, phishing y reutilización de contraseñas.

2. **Autenticación de Dos Factores (2FA)**
   - **Descripción**: Añade una capa adicional de seguridad mediante el uso de dos formas de verificación, como una contraseña y un código enviado a un dispositivo móvil.
   - **Ventajas**: Mayor seguridad al requerir dos formas de verificación.
   - **Desventajas**: Puede ser incómodo para los usuarios y requiere acceso a un segundo dispositivo.

3. **Autenticación Basada en Tokens (JWT)**
   - **Descripción**: Utiliza tokens que contienen información del usuario y su expiración. El token se envía en cada solicitud para verificar la identidad del usuario.
   - **Ventajas**: Stateless, escalable y seguro si se implementa correctamente.
   - **Desventajas**: Complejidad en la implementación y gestión de la seguridad del token.

4. **Autenticación OAuth**
   - **Descripción**: Protocolo de autorización que permite a los usuarios permitir que un tercero acceda a sus recursos sin compartir sus credenciales.
   - **Ventajas**: No se necesita compartir credenciales, seguro y estándar.
   - **Desventajas**: Complejo de implementar y mantener.

5. **Autenticación Basada en Certificados**
   - **Descripción**: Utiliza certificados digitales para autenticar a los usuarios. Comúnmente utilizado en entornos corporativos.
   - **Ventajas**: Muy seguro y difícil de falsificar.
   - **Desventajas**: Requiere infraestructura PKI y es complicado de gestionar.

### Tipos de Autorización

1. **Basada en Roles (RBAC)**
   - **Descripción**: Los permisos se asignan a roles y los roles se asignan a los usuarios.
   - **Ventajas**: Sencillo de entender y gestionar, adecuado para organizaciones grandes.
   - **Desventajas**: Menos flexible y puede ser excesivo para aplicaciones simples.

2. **Basada en Atributos (ABAC)**
   - **Descripción**: Las políticas de acceso se definen mediante atributos de los usuarios, recursos y entorno.
   - **Ventajas**: Muy flexible y puede manejar escenarios complejos.
   - **Desventajas**: Complejidad en la implementación y gestión de las políticas.

3. **Basada en Políticas (PBAC)**
   - **Descripción**: Utiliza políticas para definir los permisos de acceso. Similar a ABAC pero más centrado en las políticas.
   - **Ventajas**: Flexibilidad y control granular.
   - **Desventajas**: Complejidad en la creación y mantenimiento de políticas.

### Métodos Comunes de Autenticación en la Web

1. **Formularios de Login**
   - **Descripción**: Los usuarios ingresan sus credenciales en un formulario web.
   - **Uso Común**: Sitios web y aplicaciones web.

2. **OAuth/OpenID Connect**
   - **Descripción**: Proporciona autenticación federada permitiendo a los usuarios autenticarse utilizando sus cuentas de Google, Facebook, etc.
   - **Uso Común**: Aplicaciones que requieren integración con terceros.

3. **Single Sign-On (SSO)**
   - **Descripción**: Permite a los usuarios autenticarse una sola vez y acceder a múltiples aplicaciones.
   - **Uso Común**: Entornos corporativos y ecosistemas de aplicaciones.

4. **Autenticación Multi-Factor (MFA)**
   - **Descripción**: Combina dos o más métodos de autenticación, como contraseñas y tokens de seguridad.
   - **Uso Común**: Aplicaciones que requieren alta seguridad.

### Implementaciones Comunes

1. **Basic Auth**
   - **Descripción**: Envío de las credenciales de usuario (nombre de usuario y contraseña) en cada solicitud.
   - **Ventajas**: Sencillo de implementar.
   - **Desventajas**: No seguro si no se utiliza HTTPS.

2. **Token-Based Auth (JWT)**
   - **Descripción**: Uso de tokens para mantener la sesión del usuario.
   - **Ventajas**: Stateless, escalable.
   - **Desventajas**: Gestión de la seguridad de los tokens.

3. **OAuth2**
   - **Descripción**: Protocolo de autorización que permite acceso a recursos sin compartir credenciales.
   - **Ventajas**: Seguro, estándar.
   - **Desventajas**: Complejo de implementar.


# Autenticación y Autorización en SSR

## Práctica

### Implementación de Autenticación con JWT en Next.js

1. **Instalar Dependencias**
   ```bash
   npm install jsonwebtoken bcryptjs
   ```

2. **Configurar JWT y Hashing de Contraseñas**
   - **Archivo**: `lib/auth.js`
     ```javascript
     import jwt from 'jsonwebtoken';
     import bcrypt from 'bcryptjs';

     const SECRET_KEY = 'your_secret_key';

     export const hashPassword = async (password) => {
         return await bcrypt.hash(password, 12);
     };

     export const verifyPassword = async (password, hashedPassword) => {
         return await bcrypt.compare(password, hashedPassword);
     };

     export const generateToken = (user) => {
         return jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
     };

     export const verifyToken = (token) => {
         try {
             return jwt.verify(token, SECRET_KEY);
         } catch (error) {
             return null;
         }
     };
     ```

3. **Implementar API de Registro**
   - **Archivo**: `pages/api/register.js`
     ```javascript
     import { hashPassword } from '../../lib/auth';
     import { connectToDatabase } from '../../lib/db';

     export default async function handler(req, res) {
         if (req.method !== 'POST') {
             return res.status(405).end(); // Method Not Allowed
         }

         const { email, password } = req.body;

         const client = await connectToDatabase();
         const db = client.db();

         const existingUser = await db.collection('users').findOne({ email });

         if (existingUser) {
             return res.status(422).json({ message: 'User exists already!' });
         }

         const hashedPassword = await hashPassword(password);

         const result = await db.collection('users').insertOne({
             email,
             password: hashedPassword,
         });

         res.status(201).json({ message: 'Created user!' });
     }
     ```

4. **Implementar API de Login**
   - **Archivo**: `pages/api/login.js`
     ```javascript
     import { verifyPassword, generateToken } from '../../lib/auth';
     import { connectToDatabase } from '../../lib/db';

     export default async function handler(req, res) {
         if (req.method !== 'POST') {
             return res.status(405).end(); // Method Not Allowed
         }

         const { email, password } = req.body;

         const client = await connectToDatabase();
         const db = client.db();

         const user = await db.collection('users').findOne({ email });

         if (!user) {
             return res.status(401).json({ message: 'No user found!' });
         }

         const isValid = await verifyPassword(password, user.password);

         if (!isValid) {
             return res.status(401).json({ message: 'Invalid password!' });
         }

         const token = generateToken(user);

         res.status(200).json({ token });
     }
     ```

5. **Proteger Rutas con Autorización**
   - **Archivo**: `pages/profile.js`
     ```javascript
     import { verifyToken } from '../lib/auth';

     export async function getServerSideProps(context) {
         const { req } = context;
         const token = req.cookies.token;

         const decodedToken = verifyToken(token);

         if (!decodedToken) {
             return {
                 redirect: {
                     destination: '/login',
                     permanent: false,
                 },
             };
         }

         return {
             props: { userId: decodedToken.userId },
         };
     }

     export default function ProfilePage({ userId }) {
         return <div>Welcome to your profile, user {userId}!</div>;
     }
     ```

6. **Implementar Login y Registro en el Cliente**
   - **Archivo**: `pages/login.js`
     ```javascript
     import { useState } from 'react';
     import Router from 'next/router';

     export default function LoginPage() {
         const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');

         const handleSubmit = async (e) => {
             e.preventDefault();

             const res = await fetch('/api/login', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({ email, password }),
             });

             const data = await res.json();

             if (res.ok) {
                 document.cookie = `token=${data.token}; path=/`;
                 Router.push('/profile');
             } else {
                 alert(data.message);
             }
         };

         return (
             <form onSubmit={handleSubmit}>
                 <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                 />
                 <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                 />
                 <button type="submit">Login</button>
             </form>
         );
     }
     ```

   - **Archivo**: `pages/register.js`
     ```javascript
     import { useState } from 'react';
     import Router from 'next/router';

     export default function RegisterPage() {
         const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');

         const handleSubmit = async (e) => {
             e.preventDefault();

             const res = await fetch('/api/register', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({ email, password }),
             });

             const data = await res.json();

             if (res.ok) {
                 Router.push('/login');
             } else {
                 alert(data.message);
             }
         };

         return (
             <form onSubmit={handleSubmit}>
                 <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                 />
                 <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                 />
                 <button type="submit">Register</button>
             </form>
         );
     }
     ```
