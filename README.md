# 🛒 Haq Electronics Full-Stack Project

![GitHub repo size][https://img.shields.io/github/repo-size/yourusername/haq-electronics](https://github.com/Muhammad-Ayub830/Electroincs)
![GitHub top language][https://img.shields.io/github/languages/top/yourusername/haq-electronics](https://github.com/Muhammad-Ayub830/Electroincs)
![GitHub last commit][https://img.shields.io/github/last-commit/yourusername/haq-electronics](https://github.com/Muhammad-Ayub830/Electroincs)
![License][https://img.shields.io/github/license/yourusername/haq-electronics](https://github.com/Muhammad-Ayub830/Electroincs)

This is a **full-stack e-commerce application** built for **Haq Electronics**. The project includes **complete admin and customer management**, product listings, and an admin panel to manage inventory and orders.

**Live Demo:** [https://www.haq1.com/](https://www.haq1.com/)

---

## 📌 Table of Contents

* [Tech Stack](#-tech-stack)
* [Features](#-features)
* [Getting Started](#-getting-started)
* [Project Structure](#-project-structure)
* [Screenshots / Demo](#-screenshots--demo)
* [Resources Used](#-resources-used)
* [Contributing](#-contributing)
* [License](#-license)

---

## 🛠 Tech Stack

* **Frontend:** Next.js, React
* **Backend:** Node.js, Express.js
* **Authentication:** JWT, Cookies
* **File Storage / Media:** Cloudinary
* **Database:** (MongoDB / PostgreSQL / your DB)
* **Libraries:** Axios, bcrypt, react-hot-toast, dotenv, cors

---

## ✨ Features

### **Admin Panel**

* 🔒 Admin login with secure JWT authentication
* 📊 Dashboard for managing products, categories, and orders
* ✏️ Full CRUD operations for all resources
* 🛡️ Protected admin-only routes

### **Customer Panel / Store**

* 🛍️ Browse products across categories:

  * LED Lights (Bulbs, Downlights, Panel Lights, COB Spotlights)
  * Cables, Irons, Solar Inverters
  * Rods (Original Italy Rods, Thermostate Rods)
  * LED Lights Spare Parts (AC/DC/Other)
* 🔍 Product search and filtering
* 🖼️ Product images with Cloudinary integration

### **Authentication & Security**

* 🔑 JWT-based authentication with cookies
* 🛡️ Role-based protected routes for Admin and Customer
* 🔒 Password hashing with bcrypt

### **Extras**

* 📱 Fully responsive design
* 🔔 Notifications for user actions (react-hot-toast)

---

## 🚀 Getting Started

### **Prerequisites**

* Node.js >= 16.x
* npm or yarn
* MongoDB / Your database setup

### **Installation**

#### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

#### Backend (Express.js + Node.js)

```bash
cd backend
npm install
npm run dev
```

### **Environment Variables**

**Backend (`.env`):**

```bash
PORT=5000
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
```

**Frontend (`.env`):**

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🗂 Project Structure

```text
/frontend
 ├─ pages/
 ├─ components/
 ├─ styles/
 └─ public/

/backend
 ├─ routes/
 ├─ controllers/
 ├─ models/
 ├─ middleware/
 └─ server.js
```

---

## 📸 Screenshots / Demo

* **Admin Panel Dashboard**
* **Product Listings**
* **Customer Store Pages**
* **Login / Signup Pages**

*(Add screenshots or GIFs here for better presentation)*

---

## 🔧 Resources Used

* JWT & Cookies for authentication
* Cloudinary for image storage
* bcrypt for password hashing
* Axios for API requests
* react-hot-toast for notifications
* Helmet & CORS for security

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

---



---

