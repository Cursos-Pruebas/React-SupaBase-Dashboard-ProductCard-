# 💠 Admin Panel con Supabase + React + Vite

Bienvenido a este proyecto de **Panel de Administración** para gestionar productos, imágenes y más funciones comerciales. Está desarrollado en **React** con **Vite**, conectado a una base de datos en **Supabase** y diseñado para escalar a múltiples tiendas 🚀

---

## ✨ Características actuales

- ✅ **Carga de productos con imágenes** subidas a Supabase Storage
- ✅ **CRUD completo** (Crear, Leer, Editar, Eliminar)
- ✅ Refrescado automático del listado luego de guardar un producto
- ✅ Manejo de estado con `useState` y `useEffect`
- ✅ Estilo con CSS tradicional (no CSS Modules)
- ✅ Preparado para extender con nuevas secciones como:
  - Gestión de texto e imágenes del sitio
  - Administración de ventas
  - Control de stock
  - Panel por tienda con base de datos aislada

---

## 🧱 Tecnologías utilizadas

| Herramienta    | Descripción                                |
| -------------- | ------------------------------------------ |
| ⚛️ React       | Librería para construir interfaces         |
| ⚡ Vite         | Bundler ultrarrápido                       |
| 🐘 Supabase    | Backend as a Service (DB + Auth + Storage) |
| 🧪 React Icons | Iconografía moderna y amigable             |
| 🎨 CSS         | Estilo base sin módulos                    |

---

## 📁 Estructura del proyecto

```bash
📆 src/
🔹 components/
│   🔹 AdminPanel.jsx     # Componente principal del panel
│   🔹 ProductCard.jsx    # (opcional para mostrar productos)
🔹 styles/
│   🔹 admin.css          # Estilos globales del panel
🔹 supabase/
│   🔹 client.js          # Conexión con Supabase
🔹 App.jsx                # Punto de entrada principal
```

---

## 📷 Subida de imágenes

Las imágenes de los productos se cargan automáticamente a Supabase Storage. Una vez subida la imagen, se obtiene la URL pública y se guarda junto con el resto del producto en la tabla `products`.

> ⚠️ Requiere configuración previa del **bucket** en Supabase y permisos de lectura pública o firma temporal.

---

## ⚙️ Configuración

1. Clonar el repo:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` con tus claves de Supabase:

```env
VITE_SUPABASE_URL=https://tu-url.supabase.co
VITE_SUPABASE_KEY=tu-clave-publica
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

---

## 🤝 Contribuciones

Este proyecto está siendo desarrollado con 💡 ideas en tiempo real, así que toda mejora, sugerencia o colaboración ¡es más que bienvenida!

---

## 🧠 Lecciones aprendidas

- Parar un rato ayuda a resolver errores 😉
- Siempre validar los IDs antes de insertar
- Evitar campos innecesarios como `id: null`
- Usar `location.reload()` después de guardar es útil, pero puede mejorarse con optimización de estado

