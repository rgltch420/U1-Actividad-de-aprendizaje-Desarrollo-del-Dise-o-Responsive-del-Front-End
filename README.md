
# **SKYB2C**

SKYB2C: Un eCommerce que va más allá del cielo. Movemos lo imposible con logística de primera, ofreciendo envíos en 24 y 48 horas a cualquier parte del mundo. Bienvenidos a la experiencia de compras online más innovadora y eficiente.

---

## **Descripción**

**SKYB2C** es una plataforma de comercio electrónico diseñada para brindar a los usuarios una experiencia de compra fluida, rápida y segura. Inspirada en la excelencia logística, SKYB2C combina tecnología avanzada con un diseño responsivo que garantiza un acceso óptimo desde cualquier dispositivo.

Ya sea que estés buscando electrónicos, computadoras, productos Smart Home o artículos de arte y artesanías, en SKYB2C encontrarás todo lo que necesitas con la confianza de una logística premium.

**Nota**: SKYB2C se encuentra en su fase beta. Estamos trabajando constantemente para agregar nuevas funcionalidades y mejorar tu experiencia de usuario. Tu feedback es invaluable para nosotros.

---

## **Características Principales**

### **Frontend**
- **Diseño Responsivo**:
  - Compatible con todos los dispositivos: Desde smartphones hasta desktops.
  - Interfaz intuitiva: Navegación fácil para encontrar productos rápidamente.
  - Estilo moderno: Inspirado en los mejores estándares de diseño UI/UX.
- **Carrusel de Productos**:
  - Navegación fluida entre categorías.
- **Carrito de Compras**:
  - Persistencia usando `localStorage`.
  - Modal interactivo al agregar productos.
- **Autenticación de Usuarios**:
  - Formulario de inicio de sesión y registro con validaciones en frontend.
  - Modal dinámico para el registro.

### **Backend**
- **API Básica**:
  - Endpoint `/api/products`: Devuelve datos en formato JSON con una lista de productos.
  - Ejemplo de datos:
    ```json
    [
      {
        "id": 1,
        "name": "Producto 1",
        "category": "Electrónicos",
        "price": 10,
        "image": "https://via.placeholder.com/150"
      },
      ...
    ]
    ```

- **Servidor Express**:
  - Servidor básico desarrollado en Node.js para manejar la API.

### **Logística Premium**
- Envíos rápidos: 24 y 48 horas a nivel mundial.
- Seguimiento en tiempo real: Rastrea tus pedidos directamente desde la página web.
- Embalaje seguro: Garantizamos la protección de tus productos durante el envío.

---

## **Detalles Técnicos**

### **Tecnologías Utilizadas**
- **Frontend**:
  - HTML5, CSS3: Estructura semántica y estilos modernos.
  - JavaScript: Funcionalidades dinámicas e interactividad.
- **Backend**:
  - Node.js y Express.js: Desarrollo de la API.
  - JSON: Formato de intercambio de datos.
- **Almacenamiento Local**:
  - `localStorage` para persistencia del carrito.

---

## **Estructura del Proyecto**

```plaintext
U1-Actividad-de-aprendizaje-Desarrollo-del-Dise-o-Responsive-del-Front-End/
├── backend/                # Código del backend
│   ├── server.js           # Archivo principal del servidor
│   ├── package.json        # Dependencias del backend
│   ├── package-lock.json
│   └── node_modules/
├── html/                   # Archivos HTML del frontend
│   ├── index.html          # Página principal
│   ├── cart.html           # Página del carrito
│   └── Log_in.html         # Página de inicio de sesión
├── Style/                  # Archivos CSS
│   ├── index.css           # Estilos principales
│   └── cart.css            # Estilos para el carrito
├── js/                     # Archivos JavaScript
│   ├── app.js              # Lógica de frontend
│   └── index.js            # Funcionalidad dinámica
└── README.md               # Documentación del proyecto
```

---

## **Cómo Ejecutar el Proyecto**

### **Requisitos Previos**
1. Tener instalado:
   - [Node.js](https://nodejs.org/) (versión LTS recomendada).
   - [Git](https://git-scm.com/).
2. Editor de texto (opcional, recomendado: [VS Code](https://code.visualstudio.com/)).
3. Navegador web moderno (recomendado: Google Chrome o Firefox).

### **Pasos para Ejecutar**

#### **1. Clonar el repositorio**
```bash
git clone https://github.com/rgltch420/U1-Actividad-de-aprendizaje-Desarrollo-del-Dise-o-Responsive-del-Front-End.git
```

#### **2. Configurar el Backend**
1. Navega al directorio del backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```
   El servidor estará disponible en: **[http://localhost:5000](http://localhost:5000)**.

#### **3. Configurar el Frontend**
1. Abre el archivo `index.html` en tu navegador o usa un servidor local como **Live Server** en VS Code.
2. Asegúrate de que el servidor backend esté corriendo, ya que el frontend consume datos desde la API.

---

## **Cómo Contribuir**
SKYB2C está en continuo desarrollo, y nos encantaría contar contigo para hacerlo aún mejor. Si deseas contribuir:
1. Haz un fork del repositorio.
2. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature-nombre-cambio
   ```
3. Realiza tus modificaciones y haz un commit:
   ```bash
   git add .
   git commit -m "Descripción de tus cambios"
   ```
4. Envía un pull request detallando tus cambios.

---

## **Inspiración**
SKYB2C nace de la idea de romper barreras en el comercio electrónico. Más que una tienda, es una experiencia global que conecta a las personas con lo que aman, donde sea que estén. Estamos comprometidos a evolucionar y llevar esta plataforma al siguiente nivel.

---
