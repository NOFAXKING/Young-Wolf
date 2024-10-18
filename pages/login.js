import { mentorsData } from "../data/data.js";
import { getHTMLElementsById } from "../lib/utils.js";

const userNameField = getHTMLElementsById("username");
const passwordField = getHTMLElementsById("password");
const formSubmit = getHTMLElementsById("submitForm");

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (userNameField.value === "" || passwordField.value === "") {
    alert("Please fill all the fields");
    return;
  }
  login(userNameField.value, passwordField.value);
});

function login(username, password) {
  const user = mentorsData.find(
    (mentor) => mentor.name === username && mentor.name === password
  );

  if (user) {
    return alert("You are logged in");
  } else {
    return alert("Invalid username or password");
  }
}
