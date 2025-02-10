# 🚀 Proyecto: Frontend y Backend con TypeScript

Este proyecto consta de un **Frontend** desarrollado con **Vite** y un **Backend** en **Node.js con Express**, ambos escritos en **TypeScript**. La aplicación permite obtener datos desde un JSON almacenado localmente en el servidor, manteniéndolo actualizado con un endpoint externo y agregando información ingresada por el usuario. Luego, esta API es consumida por el cliente, mostrando en formato de tarjetas a los "usuarios" de la base. El cliente puede filtrar la informacion o agregar nueva.

---

## 🛠 Tecnologías Usadas

<p align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />


---

## ✨ Características

### 🖥️ **Frontend (Vanilla JavaScript + TypeScript + Vite)**
- ✅ Solicita datos al backend mediante una API.
- ✅ Muestra la información actualizada al usuario.
- ✅ Permite crear nueva información para enviarla al backend y que este la almacene localmente.
- ✅ Filtro para limitar qué usuarios queremos solicitar.

### ⚙️ **Backend (Node.js + Express + TypeScript)**
- ✅ Lee los datos desde un JSON local.
- ✅ Compara con un endpoint externo para verificar si hay cambios.
- ✅ Si hay cambios, actualiza el JSON local.
- ✅ Retorna los datos del JSON local + los registros agregados por el usuario mediante POST (consta de dos bases de datos `.json`).
- ✅ Permite que la información del usuario se mantenga, independientemente de las actualizaciones del endpoint externo.

---

## 📌 Requisitos
- **Node.js** (versión recomendada: 18+)

---

## 🚀 Instalación y ejecución
Para probar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone <url_repo>
   cd <carpeta_repo>
   ```

2. Abre dos terminales:

### **Backend** 🛠️
En la primera terminal, navega a la carpeta `BackEnd` y ejecuta:
   ```sh
   cd BackEnd
   npm install
   npm run dev
   ```

### **Frontend** 🎨
En la segunda terminal, navega a la carpeta `FrontEnd` y ejecuta:
   ```sh
   cd FrontEnd
   npm install
   npm run dev
   ```

3. Abre el navegador y accede a la URL del frontend (`http://localhost:5173`).

---

## 📂 Estructura del Proyecto
```
📂 Proyecto
 ├── 📂 FrontEnd   # 🎨 Aplicación frontend con Vite y TypeScript
 ├── 📂 BackEnd    # ⚙️ API backend con Express y TypeScript
 └── 📜 README.md 
```

---
