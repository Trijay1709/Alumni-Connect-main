import { io } from "socket.io-client";

const socket = io("http://192.168.83.147:8080"); // Update with your backend URL

// Notify server of the logged-in user
const userId = localStorage.getItem("userId"); // Example: User ID stored in localStorage
if (userId) {
  socket.emit("userLoggedIn", userId);
}

// Handle incoming new messages
socket.on("newMessage", (message) => {
  console.log("New message received:", message);
  // Add logic to display the message in the chat window
});

export default socket;
