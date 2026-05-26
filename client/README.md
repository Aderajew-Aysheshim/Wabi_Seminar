# Wabi-Seminar | Google Meet Clone

**Group 2 - WabiSkills 6th Ronda Seminar Project**  
**Updated:** December 21, 2025

---

## Project Overview

This project is a **real-time video conferencing application** inspired by Google Meet. It allows users to:

- Register and log in securely (JWT-based authentication)  
- Create meetings with unique shareable codes  
- Join meetings using a code  
- Communicate via real-time audio/video (WebRTC)  
- Chat with persistent message history  
- Control microphone/camera and leave meetings  

It is built as a **full-stack application** with React (frontend), Node.js/Express (backend), MySQL database, and Socket.io for real-time communication.

---

## Technology Stack

### Frontend (Client)
- **Framework:** React 19  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **State Management:** Redux Toolkit + RTK Query  
- **Routing:** React Router v7  
- **Real-Time Media:** Simple-Peer (WebRTC wrapper)  
- **Real-Time Communication:** Socket.io-client  
- **Other Libraries:** axios, jwt-decode, date-fns, react-icons  

### Backend (Server)
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Real-Time:** Socket.io (signaling and chat)  
- **Authentication:** bcryptjs + jsonwebtoken (JWT)  
- **Database Driver:** mysql2  
- **Other:** cors, helmet, morgan, nanoid  

### Database
- **MySQL** for relational data storage  
- Ensures data integrity with foreign keys

---

## Folder Structure

