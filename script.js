const correctEmail = "example@email.com";
const correctPassword = "password123";

function login(email, password) {
    // Check if the email and password match the correct ones
    if (email === correctEmail && password === correctPassword) {
        return true; // Login successful
    } else {
        return false; // Login failed
    }
}

// Example usage:
const emailInput = "example@email.com";
const passwordInput = "password123";

if (login(emailInput, passwordInput)) {
    console.log("Login successful");
} else {
    console.log("Login failed");
}

const db = firebase.database().ref('messages');

document.getElementById('send-btn').addEventListener('click', () => {
  const message = document.getElementById('message-input').value;
  db.push().set({
    user: firebase.auth().currentUser.email,
    message: message,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });
  document.getElementById('message-input').value = '';
});

db.on('child_added', (snapshot) => {
  const msg = snapshot.val();
  const messageElement = document.createElement('div');
  messageElement.textContent = `${msg.user}: ${msg.message}`;
  document.getElementById('messages').appendChild(messageElement);
});
