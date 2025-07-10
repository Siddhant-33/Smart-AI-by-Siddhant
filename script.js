
// Greeting based on time
const hour = new Date().getHours();
let greeting = "Good evening!";
if (hour < 12) greeting = "Good morning!";
else if (hour < 17) greeting = "Good afternoon!";
document.getElementById("greeting").textContent = greeting;

// Live Clock
function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// To-do list
function addTask() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (task === "") return;
  const li = document.createElement("li");
  li.innerHTML = task + ' <button onclick="this.parentElement.remove()">Done</button>';
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

// Simple Q&A logic
function answerQuestion() {
  const q = document.getElementById("question").value.toLowerCase();
  let answer = "I'm not sure about that. Try asking something simple.";
  if (q.includes("your name")) answer = "I'm your-own-ai, created by Siddhant Ray.";
  else if (q.includes("2 + 2")) answer = "2 + 2 is 4.";
  else if (q.includes("president of india")) answer = "As of 2025, the President of India is Droupadi Murmu.";
  else if (q.includes("who made you")) answer = "I was created by Siddhant Ray.";
  document.getElementById("response").textContent = answer;
}

// Motivational Quotes
const quotes = [
  "You are braver than you believe.",
  "Start where you are. Use what you have.",
  "Great things take time. Keep going.",
  "Every day is a new chance to grow.",
  "You were born to do great things."
];
function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}
