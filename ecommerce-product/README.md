# 📦 Panel de Administración con Supabase – Tutorial Paso a Paso

Este proyecto es un panel de administración web para la carga y gestión de productos. Está pensado como guía paso a paso para personas sin conocimientos previos de programación.

Permite:
- Cargar productos con nombre, descripción, precio e imagen 📸
- Editarlos y eliminarlos con facilidad 🧼
- Verlos listados en una tabla administrable 📋

Usa tecnologías modernas como:
- ⚛️ **React** (con Vite) para la interfaz
- 🔥 **Supabase** para base de datos y almacenamiento
- 🎯 Buenas prácticas para que el código sea limpio, modular y escalable

---

## 🧠 Tecnologías usadas

- React + Vite ⚛️
- Supabase (Database + Storage) ☁️
- JavaScript moderno ES6+ 🚀
- CSS básico para los estilos 🎨

---

## 📝 Estructura del proyecto

```bash
📦 admin-dashboard
├─ 📁 public
├─ 📁 src
│  ├─ 📁 components     # Componentes reutilizables
│  ├─ 📁 services       # Lógica de conexión con Supabase
│  ├─ 📁 pages          # Vistas principales
│  ├─ supabaseClient.js
│  └─ App.jsx
├─ 📁 docs             # Documentación y tutorial
│  └─ tutorial.md
├─ README.md           # Este archivo
└─ package.json
```

---

## 📘 Tutorial completo paso a paso

Este tutorial está pensado para personas sin conocimientos previos de programación. Vas a aprender a crear una app desde cero con React y Supabase. 

---

## 📘 Capítulo 1: ¿Qué vamos a construir?

Vamos a crear una **aplicación web** con un panel de administración para gestionar productos. Cada producto tendrá:
- Nombre
- Descripción
- Precio
- Imagen
- Indicación si es un producto nuevo

Usaremos:
- 🧠 **React** para la interfaz de usuario.
- 🛢️ **Supabase** como base de datos y almacenamiento de imágenes.
- 💡 Buenas prácticas para que el código sea reutilizable.

---

## 🛠️ Capítulo 2: Configurando el entorno

1. Instalá **Node.js** desde [nodejs.org](https://nodejs.org/).
2. Creamos un nuevo proyecto React con Vite:
```bash
npm create vite@latest nombre-proyecto -- --template react
cd nombre-proyecto
npm install
```
3. Instalá Supabase client:
```bash
npm install @supabase/supabase-js
```
4. Creá una cuenta en [supabase.com](https://supabase.com/) y un nuevo proyecto.

---

## 🧱 Capítulo 3: Estructura de la base de datos en Supabase

1. En Supabase, creá una nueva tabla llamada `products` con las siguientes columnas:
   - `id` (integer, primary key, auto-incremental)
   - `name` (text)
   - `description` (text)
   - `price` (numeric)
   - `imagen_url` (text)
   - `is_new` (boolean)

2. Creá un bucket en Storage llamado `product-images` para guardar las imágenes de productos.

---

## 🧩 Capítulo 4: Conectando React con Supabase

1. En tu proyecto React, creá un archivo `supabaseClient.js`:
```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'TU_SUPABASE_URL';
const supabaseKey = 'TU_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
```
2. Usá este cliente para insertar y leer datos desde tu app.

---

## 🖼️ Capítulo 5: Subiendo imágenes y creando productos

1. Usamos un formulario para cargar nombre, descripción, precio y subir una imagen.
2. La imagen se guarda en el bucket de Supabase.
3. Se guarda la URL de la imagen en la base de datos.

🔁 El formulario se puede usar tanto para crear como para editar productos.

---

## 📋 Capítulo 6: Mostrando productos en una tabla

1. Usamos `useEffect` para cargar los productos al montar el componente.
2. Mostramos los datos en una tabla con nombre, precio, imagen, y botones para editar o eliminar.

---

## 🧼 Capítulo 7: Buenas prácticas y organización

- Dividimos el código en componentes reutilizables.
- Agregamos comentarios para entender cada parte del código.
- Creamos una estructura de carpetas clara: `/components`, `/services`, `/assets`, etc.

---

## 🔄 Capítulo 8: Mejoras futuras (a desarrollar)

✅ Estas funcionalidades ya están pensadas para próximos capítulos:
- Autenticación de usuarios con Google o email.
- Panel multiusuario con control de roles.
- Subida de imágenes de portada del sitio.
- Gestión de textos de portada (título, subtítulo, promociones).
- Registro de ventas, control de stock, reportes.
- Administración de otras secciones de la tienda desde el mismo panel.

---

## 💾 Capítulo 9: Subida del proyecto a GitHub

1. Inicializamos el repositorio:
```bash
git init
git add .
git commit -m "Primer commit"
```
2. Creamos un repositorio en GitHub y lo conectamos:
```bash
git remote add origin https://github.com/usuario/nombre-repo.git
git push -u origin main
```

---

## ✨ Resultado final

Ya tenés una app funcional donde podés:
- Subir productos con imágenes
- Editarlos y eliminarlos
- Administrarlos desde un dashboard con estilo moderno y organizado

🎉 ¡Felicitaciones! Seguimos sumando más funcionalidades juntos.

---

> ¿Querés que sigamos agregando capítulos o funcionalidades? Solo decime y lo sumamos paso a paso. 💪

