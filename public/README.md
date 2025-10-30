# 🌐 Portfolio - Mauro

Sitio web personal donde muestro mis proyectos y servicios como desarrollador Front-End.

## 🚀 Demo en vivo

Podés ver el sitio en vivo aquí: https://github.com/Mauromartinezgit/Mi-pagina.git

## 📂 Estructura del proyecto
```
portfolio/
│
├── public/                 # Archivos HTML públicos
│   ├── index.html         # Página principal
│   ├── portfolio.html     # Página de portfolio
│   ├── servicios.html     # Página de servicios
│   ├── contact.html       # Página de contacto
│   └── README.md          # Este archivo
│
└── src/                   # Archivos fuente (CSS y JS)
    ├── css/
    │   ├── global.css     # Estilos globales y variables
    │   ├── header.css     # Estilos del header
    │   ├── index.css      # Estilos página principal
    │   ├── portfolio.css  # Estilos página portfolio
    │   ├── servicios.css  # Estilos sección servicios
    │   ├── contact.css    # Estilos formulario contacto
    │   └── footer.css     # Estilos del footer
    │
    └── js/
        ├── header.js      # Header dinámico
        ├── footer.js      # Footer dinámico
        ├── servicios.js   # Integración Contentful
        ├── contact.js     # Lógica formulario
        └── Bienvenida.js  # Sección bienvenida
```

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modulares y responsive
- **JavaScript (Vanilla)** - Lógica del cliente
- **Contentful CMS** - Gestión de contenido dinámico
- **GitHub Pages** - Hosting gratuito

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Componentes reutilizables (header y footer dinámicos)
- ✅ Integración con Contentful para gestión de servicios
- ✅ Formulario de contacto funcional
- ✅ Animaciones y transiciones suaves
- ✅ Navegación fluida entre páginas
- ✅ Scroll suave a secciones

## 📄 Páginas

### 🏠 Home (`index.html`)
Página principal con bienvenida, presentación personal y todas las secciones integradas.

### 💼 Portfolio (`portfolio.html`)
Muestra de trabajos y proyectos realizados.

### 🛠️ Servicios (`servicios.html`)
Listado de servicios ofrecidos, gestionados dinámicamente desde Contentful.

### 📧 Contacto (`contact.html`)
Formulario de contacto para que los visitantes puedan comunicarse.

## 🚀 Cómo ejecutar localmente

1. **Clonar el repositorio:**
```bash
   git clone https://github.com/TU_USUARIO/portfolio.git
   cd portfolio
```

2. **Abrir el proyecto:**
```bash
   cd public
   open index.html
```
   O usa **Live Server** de VS Code para mejor experiencia de desarrollo.

3. **Estructura de enlaces:**
   - Asegurate de que los archivos HTML en `public/` apunten correctamente a `../src/css/` y `../src/js/`

## 🔧 Configuración de Contentful

Para que funcione la sección de servicios, necesitás configurar Contentful:

1. Creá una cuenta en [Contentful](https://www.contentful.com/)
2. Configurá un Content Type llamado `servicios` con los campos:
   - `misServicios` (Text) - Título de la sección
   - `imagen` (Media) - Primera imagen de servicio
   - `imagen2` (Media) - Segunda imagen de servicio
   - `imagen3` (Media) - Tercera imagen de servicio
3. Cada imagen puede tener:
   - `title` - Nombre del servicio
   - `description` - Descripción del servicio
4. Reemplazá las credenciales en `src/js/servicios.js`:
```javascript
   space: "TU_SPACE_ID",
   accessToken: "TU_ACCESS_TOKEN"
```

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)

## 🎨 Paleta de colores

- **Fondo principal:** `rgb(19, 13, 27)`
- **Fondo secundario:** `black`
- **Color primario:** `#00ADB5`
- **Texto:** `white` / `#ccc`

## 🌐 Navegación

El sitio cuenta con un sistema de navegación inteligente:
- Header y footer dinámicos que se adaptan según la página actual
- Links directos entre páginas
- Scroll suave a secciones específicas
- El botón del header cambia entre "Portfolio" y "Home" según la ubicación

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado por Mauro © 2025**
