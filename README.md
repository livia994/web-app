# 🍪 Sweet Delights Cookie Shop

A **full-stack Cookie Shop application** built with **React (front-end)** and **Node.js/Express (back-end)** featuring:

✅ Dynamic product display with API  
✅ JWT authentication and role-based access control  
✅ REST API with Swagger UI documentation  
✅ Pagination support  
✅ Responsive design with light/dark theme  
✅ Cart functionality

## 🗂️ Project Structure
.
├── public/
│   └── images/                # Cookie images accessible to React front-end
│
├── server/                    # Back-end Node.js API
│   ├── data/
│   │   ├── cookies.js         # Cookie data served via API
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── routes/
│   │   └── cookies.js         # CRUD API routes for cookies
│   ├── utils/
│   │   └── generateToken.js   # JWT token generation utility
│   ├── swagger.js             # Swagger documentation config
│   ├── index.js               # Express server entry point
│   ├── package.json
│
├── src/                       # Front-end React application
│   ├── assets/                # Static assets (imageMap)
│   ├── components/            # Reusable React components
│   ├── contexts/              # React Contexts for theme, cart, etc.
│   ├── data/                  # Front-end cookie data or token handling
│   ├── hooks/                 # Custom React hooks (e.g., useLocalStorage)
│   ├── pages/                 # Page components (Products, About, Contact, etc.)
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── Products.js
│   │   └── SpecialOffers.js
│   ├── styles/                # CSS files and page styling
│   ├── api.js                 # API connection helper 
│   ├── App.js
│   ├── App.css
│   ├── index.js               # React entry point
│
├── package.json               # Project dependencies and scripts
└── README.md                  # Project overview

## 🚀 Features

### Front-End
- **React-based SPA** with dynamic product display.
- Product filtering by category.
- Add to cart functionality with persistent state.
- Light/Dark theme toggle.
- Responsive, clean design.

### Back-End
- RESTful API using **Express**.
- **CRUD operations** for cookie entities.
- **JWT authentication** with role/permission support.
- Pagination using `?skip=N&limit=M` parameters.
- **Swagger UI** for API documentation.
- Static image serving for product images.

## 🔐 Authentication

- Implements **JWT authentication** for protected routes.
- Roles and permissions managed within the token payload.
- Supports secure product creation, updating, and deletion based on roles.

## 🖼️ Image Handling

- Images are served from the `public/images` directory on the front-end.
- The API provides relative image paths (`/images/c1.jpg`), ensuring seamless integration with React for rendering product images.


## ⚙️ Technologies

- **React**, **React Context API** (State Management)
- **Node.js**, **Express**
- **JWT** for authentication
- **Swagger UI** for API documentation
- **CSS** for styling with light/dark themes
- **Postman** for API testing


## 🎯 Highlights

- Demonstrates ability to build and connect a **RESTful API** with a React front-end.
- Implements **authentication and authorization** best practices using JWT.
- Clean, modular folder structure with separation of concerns.
- Fully functional front-to-back integration with dynamic data.
- Responsive, accessible, and visually appealing UI.
- Includes **pagination and documentation**, simulating production-readiness.


## 📈 Purpose

This project demonstrates:

- Proficiency in **React and front-end state management**.
- Ability to build **secure, maintainable REST APIs** with Node.js/Express.
- Implementation of **JWT authentication workflows**.
- Experience with **API documentation** using Swagger UI.
- Building **responsive, user-friendly interfaces**.


> **Sweet Delights is a practical showcase of full-stack capabilities, API integration, authentication workflows, and clean front-end design.**


