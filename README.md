# 🚀 Service Booking Marketplace Ecosystem

An enterprise-grade, full-stack service booking platform engineered to connect service providers with clients. Built with a modern, microservices-inspired architecture, this application leverages a robust RESTful API to drive a dynamic, state-managed frontend interface. It is designed for scalability, clear separation of concerns, and efficient data handling.

---

## 🏗 System Architecture & Tech Stack

The application is built on a decoupled architecture, separating the client-side presentation layer from the backend business logic and data persistence layers.

| Tier | Technology | Primary Function |
| :--- | :--- | :--- |
| **Core Language** | Java 17+ | Core backend processing and object-oriented structure |
| **Backend Framework**| Spring Boot | REST API generation, dependency injection, and MVC routing |
| **Database** | MongoDB | Scalable NoSQL document storage for users, companies, and jobs |
| **Frontend UI** | React.js | Component-based, interactive user interface |
| **State Management** | Redux | Global client-side state management |
| **Styling** | Bootstrap, CSS | Responsive, mobile-first design framework |
| **Build Tools** | Maven, npm | Package and dependency management |

---

## 🔥 Core Features

**Client Portal (Users)**
* Browse registered companies and filter services by specific categories
* Book jobs dynamically through an intuitive user interface
* Track real-time booking statuses and historical service requests

**Provider Dashboard (Companies)**
* Manage comprehensive business profiles
* Publish, update, and manage service catalogs
* Monitor, accept, or manage incoming job requests from users

**Administrative Console**
* Full CRUD control over users, companies, and service listings
* Moderate marketplace activity and ensure platform integrity
* Authoritatively confirm, reject, or manage high-level booking actions

---

## 🔗 REST API Reference

The backend exposes a structured RESTful API. Below is a high-level overview of the available endpoints and their supported HTTP methods.

| Resource | Endpoint | Supported Methods |
| :--- | :--- | :--- |
| **Company Details** | `/api/company` | `GET`, `POST` |
| **Company Operations**| `/api/company/{id}` | `GET`, `PATCH`, `DELETE` |
| **Job Details** | `/api/job` | `GET`, `POST` |
| **Job Filtering** | `/api/job?cid={id}` | `GET` |
| **Job Operations** | `/api/job/{id}` | `PATCH`, `DELETE` |
| **Job Confirmation** | `/api/confirm/{id}` | `PATCH` |
| **Service Details** | `/api/service` | `GET`, `POST` |
| **Service Filtering** | `/api/service?cat={id}&cid={id}` | `GET` |
| **Service Operations**| `/api/service/{id}` | `GET`, `PATCH`, `DELETE` |
| **User Details** | `/api/user` | `GET`, `POST` |
| **User Operations** | `/api/user/{id}` | `PATCH`, `DELETE` |

---

## 📂 Project Structure

```text
service-booking-app/
│
├── service/                  # Spring Boot Application
│   ├── src/main/java/...
│   │   ├── controller/       # API Route Handlers
│   │   ├── service/          # Core Business Logic
│   │   ├── repository/       # MongoDB Data Access Layer
│   │   ├── model/            # Data Entities & DTOs
│   │   └── config/           # Application Configuration
│   └── pom.xml               # Maven Dependencies
│
├── client/                   # React.js Application
│   ├── src/
│   │   ├── components/       # Reusable UI Components
│   │   ├── pages/            # View Templates
│   │   └── redux/            # Store, Actions, and Reducers
│   └── package.json          # Node Dependencies
│
└── README.md
