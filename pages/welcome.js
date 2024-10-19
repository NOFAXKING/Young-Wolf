import { getHTMLElementsById } from "../lib/utils.js";

const studentCard = getHTMLElementsById("student");
const mentorCard = getHTMLElementsById("mentor");

// Add click event listeners
studentCard.addEventListener("click", () => {
  // Set local storage to student
  localStorage.setItem("role", "student");

  // Navigate to index.html
  window.location.href = "/";
});

mentorCard.addEventListener("click", () => {
  // Set local storage to mentor
  localStorage.setItem("role", "mentor");

  // Navigate to login.html (assuming the file is in the /pages directory)
  window.location.href = "/pages/login.html";
});
