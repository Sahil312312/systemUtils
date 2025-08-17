# System Utility Frontend

This project is a **Node-based backend** that provides system utility storing and manupulation by fetching real-time data from the Daemon service.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Key Directories](#key-directories)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Improvent Scope](#improvement-scope)

---

## Overview

The System Utility Backend is designed to interact with system utility data such as:

- Disk Encryption status
- OS Update availability
- Antivirus presence and status
- Inactivity sleep settings

It consumes data from deamon service,store it in proper manner and server it to frontEnd.

### Technologies Used

- Node.js (Express) -- Backend framework
- MongoDB -- Database (two databases: one for application data, one for logging)
- Mongoose -- MongoDB object modeling and schema management

---

# Features

This project is a Node.js backend providing utility APIs, built with Express and MongoDB.

- The structure is modular, with clear separation of concerns for utilities, middleware, environment configuration, models, routes, and controllers.
- Different level of Logging with interval Batching using Winston.
- Well defined Schemas and validations
- Proper error handling and crash support with exit signals registration handled by using shutdown_handler.js.
- Proper Authentication.

---

## Folder Structure

```
backend/
│
├── Utils/                # Utility/helper modules
│   ├── appError.js
│   ├── catchAsync.js
│   ├── logger.js
│   ├── mongo_connection.js
│   ├── mongo_transport.js
│   ├── shutdown_handler.js
│   └── time.js
│
├── Middlewares/          # Custom Express middlewares
│   ├── daemonAuthCheck.js
│   └── frontendAuthChecker.js
│
├── ENV/                  # Environment configuration
│   └── env.js
│
├── Model/                # Mongoose models
│   └── machineDataModel.js
│
├── Routes/               # Express route definitions
│   └── systemUtilsRoute.js
│
├── Controller/           # Route controllers
│   └── systemUtiliesController.js
│
└── README.md
```

---

## Key Directories

### Utils/

- **appError.js**: Custom error class for consistent error handling.
- **catchAsync.js**: Utility to catch errors in async route handlers.
- **logger.js**: Configures Winston logger for application logging.
- **mongo_connection.js**: Handles MongoDB connection setup.
- **mongo_transport.js**: Winston transport for logging to MongoDB.
- **shutdown_handler.js**: Graceful shutdown logic for the server.
- **time.js**: Time/date utility functions.

### Middlewares/

- **daemonAuthCheck.js**: Middleware for authenticating daemon requests.
- **frontendAuthChecker.js**: Middleware for authenticating frontend requests.

### ENV/

- **env.js**: Loads and manages environment variables.

### Model/

- **machineDataModel.js**: Mongoose schema/model for storing machine data.

### Routes/

- **systemUtilsRoute.js**: Defines routes for system utility APIs.

### Controller/

- **systemUtiliesController.js**: Handles logic for system utility routes.

---

## Dependencies

- **cors**: Enables Cross-Origin Resource Sharing for APIs.
- **dotenv**: Loads environment variables from `.env` files.
- **express**: Web framework for building APIs.
- **mongoose**: ODM for MongoDB, manages data models and queries.
- **winston**: Logging library for structured logs.

---

## Getting Started(FOR LOCAL SYSTEM)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your `.env` file (see `ENV/env.js` for required variables).
3. Start the server:
   ```bash
   npm start
   ```

---

## API-Endpoints

### Set System Utils

**Endpoint:** `/api/v1/systemUtils/healthCheckData`  
**Method:** `POST`
**Authentication** `Bearer <Token>`

**Request Payload:**

```json
{
  "machineId": "string",
  "checkOSUpdate": true,
  "checkDiskEncryption": true,
  "checkAntivirus": true,
  "checkSleepSettings": true,
  "timestamp": "2025-08-17T14:00:00Z"
}
```

**Response**

- statusCode=200

```json
{
  "status": true
}
```

### Geet System Utils

**Endpoint:** `/api/v1/systemUtils/healthCheckfilteredData`  
**Method:** `POST`
**Authentication** `Bearer <Token>`

**Request Payload:**

```json
{
  "flags": {
    "feild": true
  },
  "sorting": {
    "feild": 1
  },
  "filter": {
    "feild": "value"
  },
  "page": 1,
  "limit": 10
}
```

-- For sorting 1 maens ascending and -1 means descending

**Response**

-- statusCode = 200

```json
{
  "status": true,
  "data": [
    {
      "_id": "id",
      "machineId": "machine_id",
      "utilsTime": "date",
      "os": "os",
      "checkOSUpdate": true,
      "checkDiskEncryption": false,
      "checkAntivirus": true,
      "checkSleepSettings": "<NUMBER>"
    }
  ],
  "pagination": {
    "total": "<Total Records>",
    "page": "<CurrentPage>",
    "limit": 10,
    "totalPages": "<Total Pages>"
  }
}
```

-- Here true means error exist and false mean everything is fine for checkOSUpdate,checkDiskEncryption,checkAntivirus.

---

## Technologies Used

- NodeJs (Vite) -- Backend framework
- Tailwind CSS -- Styling - Axios / Fetch API -- API communication - React Router DOM -- Navigation this is my fromt end readme.md file learn from this i will give you all info then write similar for my back end

```

```
