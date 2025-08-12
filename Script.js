function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();

  if (userText === "") return;

  // Show user message
  chatBox.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

  // Generate bot response
  let botResponse = getBotResponse(userText);
  chatBox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  // General Knowledge
  if (input.includes("capital of france")) return "The capital of France is Paris.";
  if (input.includes("romeo and juliet")) return "Romeo and Juliet was written by William Shakespeare.";
  if (input.includes("boiling point of water")) return "Water boils at 100°C or 212°F.";
  if (input.includes("gravity")) return "Gravity was discovered by Isaac Newton.";
  if (input.includes("largest planet")) return "Jupiter is the largest planet in our solar system.";
  if (input.includes("speed of light")) return "The speed of light is approximately 299,792 km/s.";
  if (input.includes("mona lisa")) return "The Mona Lisa was painted by Leonardo da Vinci.";
  if (input.includes("smallest country")) return "Vatican City is the smallest country in the world.";
  if (input.includes("currency of japan")) return "The currency of Japan is the Yen.";
  if (input.includes("longest river")) return "The Nile is considered the longest river in the world.";

  // Time & Date
  if (input.includes("time")) return `It's currently ${new Date().toLocaleTimeString()}`;
  if (input.includes("date")) return `Today's date is ${new Date().toLocaleDateString()}`;
  if (input.includes("day")) return `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;
  if (input.includes("leap year")) return (new Date().getFullYear() % 4 === 0) ? "Yes, it's a leap year." : "No, it's not a leap year.";
  if (input.includes("hours in a day")) return "There are 24 hours in a day.";

  // Tech
  if (input.includes("ai")) return "AI stands for Artificial Intelligence.";
  if (input.includes("microsoft")) return "Microsoft was founded by Bill Gates and Paul Allen.";
  if (input.includes("html")) return "HTML stands for HyperText Markup Language.";
  if (input.includes("ram")) return "RAM stands for Random Access Memory.";
  if (input.includes("cloud computing")) return "Cloud computing delivers computing services over the internet.";
  if (input.includes("http")) return "HTTPS is secure; HTTP is not encrypted.";
  if (input.includes("chatbot")) return "A chatbot is a program that simulates human conversation.";

  // Entertainment
  if (input.includes("taylor swift")) return "Taylor Swift is a popular American singer-songwriter.";
  if (input.includes("netflix")) return "Netflix offers a wide range of movies and TV shows.";
  if (input.includes("joke")) return "Why don’t scientists trust atoms? Because they make up everything!";
  if (input.includes("marvel")) return "The latest Marvel movie is part of the MCU.";

  // Health
  if (input.includes("calories in an apple")) return "An average apple has about 95 calories.";
  if (input.includes("bmi")) return "BMI stands for Body Mass Index.";
  if (input.includes("reduce stress")) return "Try deep breathing, meditation, or exercise.";
  if (input.includes("mental health")) return "Mental health includes emotional, psychological, and social well-being.";

  // Education
  if (input.includes("photosynthesis")) return "Photosynthesis is how plants convert sunlight into energy.";
  if (input.includes("newton's laws")) return "Newton's laws describe motion and force.";
  if (input.includes("pythagorean theorem")) return "a² + b² = c²";
  if (input.includes("noun")) return "A noun is a person, place, thing, or idea.";
  if (input.includes("translate hello")) return "Hello in Spanish is 'Hola'.";

  // Productivity
  if (input.includes("reminder")) return "Reminder set!";
  if (input.includes("calendar")) return "You have no events today.";
  if (input.includes("focus")) return "Try the Pomodoro technique!";
  if (input.includes("resume")) return "A resume summarizes your skills and experience.";

  // Finance
  if (input.includes("bitcoin")) return "Bitcoin is a decentralized digital currency.";
  if (input.includes("stock market")) return "The stock market is where shares are bought and sold.";
  if (input.includes("save money")) return "Track your spending and set a budget.";
  if (input.includes("credit score")) return "A credit score reflects your creditworthiness.";

  // Travel
  if (input.includes("places to visit in india")) return "Try Goa, Kerala, or Himachal Pradesh!";
  if (input.includes("tallest mountain")) return "Mount Everest is the tallest mountain.";
  if (input.includes("largest ocean")) return "The Pacific Ocean is the largest.";
  if (input.includes("weather")) return "Check your local forecast for accurate weather.";

  // Personal Assistant
  if (input.includes("your name")) return "I'm your friendly AI assistant!";
  if (input.includes("drink water")) return "Reminder: Stay hydrated!";
  if (input.includes("open google")) {
    window.open("https://www.google.com", "_blank");
    return "Opening Google...";
  }
  if (input.includes("search python")) {
    window.open("https://www.google.com/search?q=python+tutorials", "_blank");
    return "Searching for Python tutorials...";
  }
  if (input.includes("goodbye") || input.includes("bye")) return "Goodbye! Have a great day!";

  // Default
  return "Muze Patana tere Bas ki Bat nahi hau, Aaage Ja Chuta nahi he.";
}
  