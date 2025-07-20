# CHAT-APPLICATION

**COMPANY**: CODTECH IT SOLUTIONS

**NAME**: GADDUPALLI REVANTH

**INTERN ID**: CT08DF1030

**DOMAIN**: FULL STACK WEB DEVELOPMENT

**DURATION**: 8 WEEKS

**MENTOR**: NEELA SANTHOSH KUMAR

## DESCRIPTION
This is a **real-time chat application** built using **Node.js**, **Express**, and **Socket.IO** on the backend, with a sleek, responsive frontend using plain **HTML, CSS**, and **JavaScript**. The goal was to create a minimalist but functional chat room experience, allowing users to connect, exchange messages, see who’s typing, and leave the chat room gracefully.

### Why I Built This :
I wanted to build a chat application that demonstrates real-time communication in its simplest form, without depending on large frontend frameworks like React or Angular. Socket.IO made it possible to implement two-way communication between the server and clients seamlessly. By keeping the frontend lightweight, I could focus on learning real-time events, user state management, and clean UI principles.

### Features :
- Multiple users can join and chat simultaneously
- Real-time messaging using WebSockets
- Live typing indicators
- System messages for join/leave events
- Auto-scroll to latest message
- User initials with dynamic color avatars
- Responsive design for desktop and mobile

### Technologies Used :
**Frontend**

- **HTML5** & **Vanilla JavaScript**
- **CSS3** with modern responsive design and minimalistic UI
- Socket.IO (client-side)

**Backend**

- **Node.js**
- **Express** (to serve static frontend files)
- **Socket.IO** (for WebSocket communication)

### Project Structure :
```
chat-app/
├── client/
│   ├── index.html
│   ├── login.html
│   ├── script.js
│   └── style.css
└── server.js
```

### How It Works :
1. **User Authentication (Lightweight)**  
   The app begins with a simple `login.html` page. Users are asked to input a username. Once submitted, the username is stored in the browser's `sessionStorage` (not persistent across sessions but good enough for our purpose). Then, the user is redirected to `index.html`, the main chat interface.

2. **Real-Time Messaging**  
   Once in the chat room, the frontend establishes a Socket.IO connection to the backend. When a user sends a message:
   - It emits a `chat message` event with the message text and username.
   - The server listens for that event and broadcasts it to all connected clients using `io.emit()`, along with a timestamp.
   - On the frontend, messages are styled differently based on whether they were sent or received, providing a clean, bubble-style chat interface.

3. **Typing Indicator**  
   This was a fun feature to implement. When a user begins typing:
   - A `typing` event is emitted.
   - Other clients receive this event and show a "User is typing..." message.
   - A debounce timer ensures the indicator disappears after 2 seconds of inactivity.

4. **System Notifications**  
   When a user joins or leaves:
   - The backend emits a `system message` to all other users.
   - These messages are displayed differently from chat messages (italic, centered, grayed out), helping distinguish between user activity and conversation.

5. **Leaving the Chat**  
   Clicking the “Leave Chat” button brings up a modal confirmation box. If confirmed, the user is redirected back to the login page. On disconnect, the server sends out a "user left" system message.

### How To Run Locally :
1. **Clone the Repository**
   
   ```
   bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```
2. **Install dependencies**
   
   ```
   bash
   npm install
   ```
3. **Start the Server**
   
   ```
   bash
   node server.js
   ```
4. **Access the App**
   
   Open your browser and visit `http://localhost:3000`
You can open multiple tabs or windows to simulate multiple users.

### Conclusion :
This project was a great way to explore real-time web development using Socket.IO. It’s simple, functional, and designed with clean code and UI in mind — a solid base to learn from or expand into something bigger.

## OUTPUT
<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/5177f683-98b2-4356-85c4-f26a67be89e3" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/59097eab-7a33-4448-94cb-fc5249013782" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/eab233ee-27e1-4855-ae01-4acc1f7b8ae6" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/ed6347bf-7981-4d1a-8644-260387a4b75a" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/6018c8be-3802-44c1-8807-384225de2ead" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/b188ec82-5343-4d54-9171-88e10b2fd4d3" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/f2ac4060-6fd5-475a-8818-90f0c408f6bb" />
