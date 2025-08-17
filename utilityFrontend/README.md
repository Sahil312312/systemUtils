# System Utility Frontend

This project is a **React-based frontend** that provides system utility monitoring features by fetching and displaying real-time data from the backend API.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Technologies Used](#technologies-used)

---

## Overview

The System Utility Frontend is designed to visualize and interact with system utility data such as:

- Disk Encryption status
- OS Update availability
- Antivirus presence and status
- Inactivity sleep settings

It consumes backend APIs and displays the results in a user-friendly dashboard.

---

## Features

- ✅ Data fetching from backend API
- ✅ Dark theme UI (black background)
- ✅ System health status visualization
- ✅ Modular React components
- ✅ Easy-to-extend architecture

---

## Folder Structure

frontend/
- │ ── src/
- │  ├── api/ # API utilities (Axios, Fetch)
- │ ├── components/ # Reusable UI components
- │ │ ├── GetUtilityInfo/ # System utility main component
- │ ├── pages/ # Page-level components
- │ ├── styles/ # Global CSS / Tailwind setup
- │ ├── App.jsx # Root component
- │ └── main.jsx # Entry point
- │── .gitignore
- │── package.json
- │── README.md

---

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/system-utility-frontend.git
   cd system-utility-frontend

2. Install dependencies:
   npm install

3. Start the development server:
   1. npm run dev (for development)
   2. npm run build(for production)=> Then use it in your hosted machine

## Usage

Open http://localhost:5173/ in your browser.

The app will automatically fetch system utility data from the backend API and display it in the dashboard.

## API Integration

### API Endpoint: `/api/v1/systemUtils/getSystemUtilsFilteredData`

**Method:** `POST`  
**Authorization (Header):** `Bearer <Auth_Code>`

---

### Payload Example

```json
{
  "flags": {
    "CheckAntivirus": true,
    "CheckDiskEncryption": false
  },
  "sorting": {
    "field": -1
  },
  "filter": {
    "field": "<VALUE>"
  },
  "page": 1,
  "limit": 10
}
```

### Response Example

```json
{
  "status": true,
  "data": [
    {
      "_id": "64a9f4...",
      "machineId": "sas123",
      "CheckAntivirus": true,
      "CheckDiskEncryption": false,
      "Feild": "Value",
      "utilityTime": "2024-08-17T10:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 42,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
}
```

## Technologies Used

- React (Vite) -- Frontend framework
- Tailwind CSS -- Styling
- Axios / Fetch API -- API communication
- React Router DOM -- Navigation
