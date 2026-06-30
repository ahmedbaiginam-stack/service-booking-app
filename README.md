# 🚀 Service Booking Application

### ⚙️ Java • Spring Boot • MongoDB • React • REST API • Microservices Style Architecture

A **full-stack Service Booking System** built with a powerful modern tech stack including **Java, Spring Boot, MongoDB, and React.js**.

This project is designed to simulate a real-world service marketplace where customers can seamlessly connect with service providers, explore available services, and book jobs in a structured and efficient way.

---

## 🔥 Key Highlights

- 🧠 Built with **Spring Boot backend architecture**
- 🗄️ Powered by **MongoDB NoSQL database**
- 🌐 Interactive **React.js frontend UI**
- 🔗 RESTful API integration between frontend & backend
- 📊 Clean separation of Controller → Service → Repository layers
- ⚡ Fast, scalable, and production-style project structure
- 🧾 Real-time job booking and tracking system

---

## 🧑‍💻 Developer Stack Representation

```text
☕ Java            → Core Backend Language
🍃 Spring Boot    → REST API & Business Logic
🍃 MongoDB        → NoSQL Database
⚛️ React          → Frontend UI
🔗 REST API       → Communication Layer
📦 Maven          → Dependency Management
---

## 📌 Project Overview

The Service Booking Application is a real-world platform that manages:

* 👤 Users who book services
* 🏢 Companies offering services
* 🛠 Services provided by companies
* 📦 Job booking and tracking system
* 🔐 Admin management system

---

## 🧑‍💻 Tech Stack

### Backend

* Java 17+
* Spring Boot
* Spring Data MongoDB
* REST APIs

### Frontend

* React.js
* Redux
* Bootstrap
* HTML
* CSS
* JavaScript

### Database

* MongoDB

---

## ⚙️ Features

### 👤 User Features

* View companies
* Browse services
* Filter services by category
* Book services
* Track booking status

### 🏢 Company Features

* Manage company profile
* Add and update services
* View job requests

### 🛠 Admin Features

* Manage users
* Manage companies
* Manage services
* Manage bookings
* Confirm or reject jobs

---

## 🔗 API Documentation

### 🏢 Company APIs

* `GET /api/company`
* `GET /api/company/{id}`
* `POST /api/company`
* `PATCH /api/company/{id}`
* `DELETE /api/company/{id}`

### 📦 Job APIs

* `GET /api/job`
* `GET /api/job?cid={id}`
* `POST /api/job`
* `PATCH /api/job/{id}`
* `PATCH /api/confirm/{id}`
* `DELETE /api/job/{id}`

### 🛠 Service APIs

* `GET /api/service`
* `GET /api/service/{id}`
* `GET /api/service?cat={id}&cid={id}`
* `POST /api/service`
* `PATCH /api/service/{id}`
* `DELETE /api/service/{id}`

### 👤 User APIs

* `GET /api/user`
* `POST /api/user`
* `PATCH /api/user/{id}`
* `DELETE /api/user/{id}`

---

## 🏗 Project Structure

```text
service-booking-app/
│
├── service/                 # Spring Boot Backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── config
│
├── client/                  # React Frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── redux
│
└── README.md
```

---

## 🚀 How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ahmedbaiginam-stack/service-booking-app.git
cd service-booking-app
```

### 2️⃣ Run the backend (Spring Boot)

```bash
cd service
mvn spring-boot:run
```

Backend runs at:

```text
http://localhost:8080
```

### 3️⃣ Run the frontend (React)

```bash
cd client
npm install
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

## 📊 System Architecture

```text
Frontend (React)
        ↓
REST API (Spring Boot)
        ↓
Service Layer (Business Logic)
        ↓
Repository Layer
        ↓
MongoDB Database
```

---

## 🔮 Future Improvements

* 🔐 JWT Authentication and Role-based Login
* 💳 Payment Gateway Integration
* 📧 Email Notifications
* 📱 Mobile Responsive UI
* 📊 Admin Analytics Dashboard
* ⭐ Rating and Review System

---

## 👨‍💻 Developer

**Ahmed Baig Inamdar**
Java Full Stack Developer
Skills: Java | Spring Boot | MongoDB | React | REST APIs

---

## ⭐ Project Highlights

* Real-world booking system
* Clean REST API design
* Scalable backend architecture
* Modular frontend structure
* Full-stack integration
* Production-ready project

---

## 📌 License

This project is created for learning and portfolio purposes.
