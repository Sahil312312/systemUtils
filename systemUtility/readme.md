# System Utility Frontend

This project is a **Node-based backend** that provides system utility data to backend.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Key Directories](#key-directories)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Improvement Scope](#improvement-scope)

---

## Overview

The System Utility Daemon is used to collect genreal information about the system;

- Disk Encryption status
- OS Update availability
- Antivirus presence and status
- Inactivity sleep settings

### Technologies Used

- Node.js (Express) -- Backend framework

---

# Features

This project is a Node.js backend providing system utils data to backend

- The structure is modular, with clear separation of concerns for utilities, services,jobs,daemon start/stop configuration, ENV and Consts.
- Utilize very minimal resources of the system.
- Well defined and structured code.
- Proper error handling and crash support with exit signals registration handled by using stopDaemon.js.
- Proper Authentication.

---

## Folder Structure

```
config/
│   ├── consts.js
│   └── Env.js
│
daemon/
│   ├── startDaemon.js
│   └── stopDeamon.js
│
jobs/
│   ├── antiVirus.js
│   ├── diskEncryption.js
│   ├── osUpdate.js
│   └── sleepSettings.js
│
logs/
│   └── app.log
│
services/
│   ├── apiObj.js
│   └── requestHandler.js
│
utils/
│   ├── exitSignalRegister.js
│   ├── getMacAddress.js
│   ├── logger.js
│   └── objChangeChecker.js
│
README.md
```

---

## Key Directories

### config/

- **consts.js**: Application constants.
- **Env.js**: Loads and manages environment variables.

### daemon/

- **startDaemon.js**: Script to start the daemon process.
- **stopDeamon.js**: Script to stop the daemon process and handle exit signals.

### jobs/

- **antiVirus.js**: Logic for checking antivirus status.
- **diskEncryption.js**: Logic for checking disk encryption.
- **osUpdate.js**: Logic for checking OS updates.
- **sleepSettings.js**: Logic for checking inactivity sleep settings.

### logs/

- **app.log**: Application log file.

### services/

- **apiObj.js**: API object definitions.
- **requestHandler.js**: Handles API requests.

### utils/

- **exitSignalRegister.js**: Registers exit signals for graceful shutdown.
- **getMacAddress.js**: Utility to fetch MAC address.
- **logger.js**: Configures application logging.
- **objChangeChecker.js**: Utility to check for object changes.

## Dependencies

- **dotenv**: Loads environment variables from `.env` files.

---

## Getting Started(FOR LOCAL SYSTEM)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your `.env` file (see `ENV/env.js` for required variables).
3. Start the Deamon(See app.service file for configuring the systemd service):
4. Then we have to set our systemd config file to our local machine to daemon-manager,I have given exapmle for ubuntu distro of linux:

```bash
  cp <app.service path> ./etc/sysytemd/system
```

4. After configuring app.service we have to reload our deamon manger

```bash
  sudo systemctl deamon-reload
```

5. Then we have to enable our daemon

```bash
  sudo systemctl enable app.service
```

6. Then we have to start it:

```bash
   sudo systemctl start app.service
```

7. To check the status daemon is started or not:

```bash
   sudo systemctl status app.service
```

---

## API-Endpoints

### Send System Utils

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

## Improvement Scope

1. we can decrease the priority of the daemon to make it more optimal(using nice command).
2. we can use CPUlimiter to restrict the resources and make an alert system for further improvements.
3. It is not necessay to run daemon all the time if the interval is long we can stop daemon and set a cron JOB to start it after interval this mthod is only good very more functionailty is added on daemon on future which require constant resources of CPU.
4. We can put cap on heap used by node application while starting by analysiing the gneral performance of our application.
