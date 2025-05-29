const socket = io();

// Asks for username and ensures not to be empty
let username = "";
while (!username) {
  username = prompt("Enter your username:");
}

// Sends username to server
socket.emit("set username", username);

//Send message on clicking send button
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Sends message on Enter key
document.getElementById("message-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Function to send message
function sendMessage() {
  const input = document.getElementById("message-input");
  const msg = input.value.trim();
  if (msg) {
    socket.emit("chat message", { user: username, text: msg });
    input.value = "";
  }
}

// Function to different colors in user initial icon
function getUserColor(username) {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `hsl(${hash % 360}, 70%, 60%)`;
  return color;
}

// Receives and displays chat message
socket.on("chat message", (data) => {
  const messages = document.getElementById("messages");
  const li = document.createElement("li");

  const bubble = document.createElement("div");
  bubble.classList.add("message-bubble");

  const initial = document.createElement("div");
  initial.classList.add("user-initial");
  initial.textContent = data.user.charAt(0).toUpperCase();

  initial.style.backgroundColor = getUserColor(data.user);

  const messageContent = document.createElement("div");
  messageContent.classList.add("message-content");

  const userMessage = document.createElement("div");
  userMessage.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;

  const timeStamp = document.createElement("div");
  timeStamp.classList.add("timestamp");
  timeStamp.textContent = data.time;

  messageContent.appendChild(userMessage);
  messageContent.appendChild(timeStamp);

  bubble.appendChild(initial);
  bubble.appendChild(messageContent);
  li.appendChild(bubble);
  li.classList.add(data.user === username ? "sent" : "received");

  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight; // Auto-scroll
});

// Receives and displays system message (e.g., user joined/left)
socket.on("system message", (msg) => {
  const messages = document.getElementById("messages");
  const li = document.createElement("li");
  li.textContent = msg;
  li.classList.add("system-message");
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Loads last saved theme on page load/refresh
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.textContent = "🌕";
}

// Toggle theme change on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "🌕" : "🌑";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});