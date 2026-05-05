<div align="center">

# 🫓 COMAL

### Pupusería Contemporánea — San Salvador

![Status](https://img.shields.io/badge/status-en%20línea-3d5a2a?style=flat-square)
![Version](https://img.shields.io/badge/versión-1.0-c4451c?style=flat-square)
![License](https://img.shields.io/badge/licencia-MIT-1a1612?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**[ Demo en vivo ](#-demo-en-vivo)** · **[ Características ](#-características)** · **[ Instalación ](#-instalación-local)** · **[ Despliegue ](#-despliegue)** · **[ Equipo ](#-equipo)**

</div>

---

## 🌽 Sobre el proyecto

**COMAL** es la landing page de una pupusería contemporánea ficticia ubicada en San Salvador, El Salvador. El concepto rinde homenaje a la cocina tradicional salvadoreña con un enfoque editorial moderno: masa nixtamalizada en casa, comal de barro, leña de café e ingredientes locales (loroco de Sonsonate, queso curado de Chalatenango, maíz de Apopa).

El proyecto fue desarrollado como parte de la actividad académica **"Implementación de interactividad avanzada: manipulación del DOM, validación de formularios y publicación con control de versiones y apoyo de IA"**, eligiendo la temática de **Gastronomía de El Salvador**.

### 🎨 Decisiones de diseño

- **Paleta cálida** inspirada en el barro del comal, el maíz tostado, las brasas y el verde del loroco
- **Tipografía Fraunces** (display serif) para títulos — evoca tradición y oficio editorial
- **Manrope** para cuerpo — moderna, legible y cálida
- **JetBrains Mono** para etiquetas y meta-datos — aporta carácter editorial
- **Ilustración SVG personalizada** del comal con vapor animado y brasas pulsantes

---

## 🌐 Demo en vivo

**URL del sitio publicado:** [https://tu-equipo.github.io/comal-pupuseria/](https://tu-equipo.github.io/comal-pupuseria/)

> ⚠️ Reemplaza esta URL por la URL real una vez publicado en GitHub Pages, Netlify o Vercel.

---

## ✨ Características

### 🎯 Secciones implementadas (las 6 obligatorias)

| # | Sección | Descripción |
|---|---|---|
| 1 | **Hero** | Imagen completa con ilustración SVG del comal (vapor + brasas animados), título principal, subtítulo descriptivo y dos CTAs |
| 2 | **Navbar** | Fija con efecto glassmorphism, anclas a las secciones, indicador de estado abierto/cerrado en tiempo real y menú hamburguesa para móvil |
| 3 | **Nosotros** | Historia del negocio (María Esperanza, 2014), cita destacada y grid de estadísticas con contadores animados |
| 4 | **Servicios** | Seis tarjetas en CSS Grid responsivo: pupusas tradicionales, cena degustación, tour gastronómico, clases de cocina, catering y para llevar |
| 5 | **Formulario** | Reserva de mesa con 9 campos validados con JavaScript: nombre, email, teléfono, personas, fecha, hora, experiencia, notas y términos |
| 6 | **Footer** | Redes sociales, dirección, horario, año dinámico y créditos del equipo |

### 🛠️ Funcionalidades técnicas

- ✅ **Manipulación del DOM** — `IntersectionObserver`, `classList`, `querySelector`, generación dinámica de contenido y mensajes de confirmación
- ✅ **Validación de formulario en JavaScript** — 9 campos con reglas personalizadas usando expresiones regulares Unicode
- ✅ **Validación de fecha** — Bloquea fechas pasadas, lunes (cerrado) y fechas mayores a 60 días
- ✅ **Estado abierto/cerrado en vivo** — Cálculo dinámico según el día de la semana y la hora actual
- ✅ **Generación de número de ticket único** — Formato `CM-YYMMDD-XXXX`
- ✅ **Diseño 100% responsivo** — Breakpoints en 1000px, 900px, 768px y 600px
- ✅ **Animaciones CSS** — Vapor del comal, brasas pulsantes, marquee infinito de ingredientes, transiciones suaves
- ✅ **Efectos JavaScript** — Botones magnéticos, contadores animados con easing cúbico, reveals al hacer scroll
- ✅ **Accesibilidad** — Etiquetas semánticas, atributos ARIA, navegación por teclado, contraste adecuado

---

## 📁 Estructura del proyecto

```
comal-pupuseria/
├── index.html      → Estructura HTML semántica (6 secciones obligatorias)
├── styles.css      → Hoja de estilos completa (~1100 líneas, 11 módulos)
├── script.js       → Lógica JavaScript (~310 líneas, 10 módulos)
└── README.md       → Documentación del proyecto
```

---

## 💻 Instalación local

### Requisitos previos
Solamente necesitas un navegador moderno (Chrome, Firefox, Safari o Edge en sus versiones más recientes).

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-equipo/comal-pupuseria.git

# 2. Entra al directorio
cd comal-pupuseria

# 3. Abre el archivo en el navegador
# Opción A — Doble click sobre index.html
# Opción B — Servidor local con Python
python3 -m http.server 8000
# luego visita http://localhost:8000
```

> 💡 **Recomendación:** Para desarrollo, usa la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de VS Code para tener recarga automática al guardar cambios.

---

## 🌐 Despliegue

### Opción 1 — GitHub Pages (recomendada)

```bash
# 1. Sube tu código a GitHub (ver sección de commits)
git push origin main

# 2. En tu repositorio de GitHub:
#    Settings → Pages → Source → Deploy from branch → main → /(root) → Save
# 3. Espera 1-2 minutos. Tu sitio estará en:
#    https://tu-usuario.github.io/comal-pupuseria/
```

### Opción 2 — Netlify (Drag & Drop)

1. Visita [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta del proyecto
3. Listo — tendrás una URL en menos de 30 segundos

### Opción 3 — Vercel

```bash
npm i -g vercel
vercel
# Sigue las instrucciones interactivas
```

---

## 🌳 Historial de commits

Este proyecto cumple con el requisito de **mínimo 6 commits documentados**. Aquí la secuencia recomendada para construirlo desde cero con un historial limpio y profesional:

### Configuración inicial

```bash
# Crear repositorio
mkdir comal-pupuseria && cd comal-pupuseria
git init
git branch -M main

# Configurar identidad (reemplaza con tus datos)
git config user.name "Tu Nombre"
git config user.email "tu@correo.com"
```

### Los 8 commits del proyecto

```bash
# ========= COMMIT 1 — Estructura inicial =========
git add index.html
git commit -m "feat: estructura HTML inicial y configuración del proyecto

- Configuración de meta tags y SEO básico (OpenGraph)
- Importación de tipografías Fraunces, Manrope y JetBrains Mono
- Favicon embebido en SVG con identidad de COMAL
- Estructura semántica de las 6 secciones obligatorias
- Atributos ARIA para accesibilidad"

# ========= COMMIT 2 — Sistema de diseño base =========
git add styles.css index.html
git commit -m "style: paleta de colores y sistema de diseño base

- Variables CSS con paleta cálida (char, soil, bone, maize, ember, leaf)
- Reset CSS y configuración global
- Tipografía display (Fraunces), body (Manrope) y mono (JetBrains)
- Curvas de animación reutilizables (ease, ease-out)
- Scrollbar personalizado con tonos de tierra"

# ========= COMMIT 3 — Navbar y menú móvil =========
git add styles.css index.html script.js
git commit -m "feat: navbar fija con menú hamburguesa y estado en vivo

- Navbar con glassmorphism y backdrop-filter
- Logo SVG con marca de comal (círculo dentro de círculo)
- Anclas a secciones con underline animado en hover
- Indicador abierto/cerrado calculado en tiempo real según horario
- Menú hamburguesa con overlay full-screen para dispositivos móviles
- Comportamiento al hacer scroll (compactación del navbar)"

# ========= COMMIT 4 — Hero con ilustración SVG =========
git add styles.css index.html script.js
git commit -m "feat: sección hero con ilustración SVG animada del comal

- Ilustración SVG personalizada con tres pupusas (queso, frijol, loroco)
- Animación de vapor saliendo de las pupusas
- Brasas pulsantes debajo del comal
- Hojas decorativas de banano a los costados
- Título principal con tipografía Fraunces y palabra 'leña' en cursiva
- Dos CTAs con efecto magnético al pasar el mouse
- Marquee infinito con ingredientes salvadoreños"

# ========= COMMIT 5 — Secciones Nosotros y Menú =========
git add styles.css index.html script.js
git commit -m "feat: secciones de historia y experiencias gastronómicas

- Sección Nosotros con narrativa de la abuela María Esperanza (2014)
- Cita destacada con borde lateral en color brasa
- Grid 2x2 de estadísticas con contadores animados (easing cúbico)
- Sección Menú con tema oscuro contrastante
- Grid de 6 tarjetas con experiencias: tradicional, degustación, tour, clases, catering, para llevar
- Iconos SVG inline personalizados para cada experiencia
- Efectos de hover con elevación y rotación de iconos"

# ========= COMMIT 6 — Formulario de reserva con validación =========
git add styles.css index.html script.js
git commit -m "feat: formulario de reserva con validación JavaScript completa

- 9 campos: nombre, email, teléfono, personas, fecha, hora, experiencia, notas, términos
- Validación con expresiones regulares Unicode para nombres en español
- Validación de teléfono con formatos salvadoreños (+503)
- Bloqueo de fechas pasadas, lunes (cerrado) y fechas más allá de 60 días
- Generación de número de ticket único (CM-YYMMDD-XXXX)
- Validación en vivo al perder foco y al cambiar
- Estados visuales error/válido con feedback inmediato
- Mensaje de confirmación con datos formateados en español"

# ========= COMMIT 7 — Footer y micro-interacciones =========
git add styles.css index.html script.js
git commit -m "feat: footer informativo y micro-interacciones finales

- Footer con 4 columnas: marca, dirección, horario, navegación
- Iconos SVG de redes sociales (Instagram, Facebook, TikTok, WhatsApp)
- Mega-tipografía decorativa C O M A L espaciada
- Año dinámico calculado con new Date().getFullYear()
- Barra de progreso de scroll fija superior
- Reveals con IntersectionObserver al hacer scroll
- Diseño 100% responsivo con breakpoints en 1000px, 900px y 600px"

# ========= COMMIT 8 — Documentación =========
git add README.md
git commit -m "docs: README completo con instrucciones y guía de despliegue

- Descripción del proyecto y temática elegida (gastronomía salvadoreña)
- Listado de características y funcionalidades técnicas
- Estructura del proyecto y guía de instalación local
- Instrucciones para despliegue en GitHub Pages, Netlify y Vercel
- Historial documentado de los 8 commits del proyecto
- Información del equipo y créditos de IA"
```

### Subir todo a GitHub

```bash
# Crear el repositorio en GitHub primero (sin README, sin .gitignore)
# Luego conectar tu repo local:
git remote add origin https://github.com/tu-equipo/comal-pupuseria.git
git push -u origin main
```

> 📌 **Nota sobre el nombre del repositorio:** Las instrucciones piden que el nombre refleje la temática. Sugerencias válidas: `comal-pupuseria`, `comal-sv`, `pupuseria-comal`, `gastronomia-comal`.

---

## 👥 Equipo

| Nombre | Rol | GitHub |
|---|---|---|
| **[Integrante 1]** | Frontend / Diseño UI | [@usuario1](https://github.com/usuario1) |
| **[Integrante 2]** | JavaScript / Validación | [@usuario2](https://github.com/usuario2) |
| **[Integrante 3]** | Documentación / Despliegue | [@usuario3](https://github.com/usuario3) |

> ✏️ Reemplaza estos datos por la información real del equipo antes de la entrega.

---

## 🤖 Apoyo de IA

Este proyecto utilizó **Claude (Anthropic)** como asistente de desarrollo para:

- Generación inicial del código base (HTML semántico, CSS con variables, JavaScript modular)
- Sugerencias de paleta de colores y tipografía coherentes con la temática salvadoreña
- Implementación de la ilustración SVG del comal con animaciones
- Estructura de la validación del formulario con reglas personalizadas
- Redacción del contenido en español con tono editorial salvadoreño

Todo el código fue revisado, comprendido e integrado por el equipo. Las decisiones finales de diseño, contenido y estructura son responsabilidad de los integrantes.

---

## 🌶️ Sobre el contenido

El contenido del sitio es **ficticio pero culturalmente arraigado**. Se eligieron referencias auténticas de la gastronomía salvadoreña:

- **Apopa** — municipio conocido por su producción de maíz
- **Sonsonate** — región productora de loroco
- **Chalatenango** — zona de queseros artesanales
- **El Bálsamo** — cordillera con fincas de café (la leña)
- **Curtido, atol shuco, tiste, horchata** — bebidas y acompañamientos tradicionales
- **Quesadilla salvadoreña** — postre típico de queso

No se utilizó Lorem Ipsum en ninguna parte del sitio.

---

## 📜 Licencia

Este proyecto se distribuye bajo licencia **MIT**. Eres libre de usarlo, modificarlo y distribuirlo con atribución.

---

<div align="center">

**COMAL Pupusería** · v1.0 · 2026

*"La pupusa no se inventa. Se hereda."*

— María Esperanza, fundadora

</div>
