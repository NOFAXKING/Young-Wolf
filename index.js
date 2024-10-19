import { mentorsData } from "./data/data.js";
import { getHTMLElementsById, truncateString } from "./lib/utils.js";

const mentorList = getHTMLElementsById("mentor-container");
const mentorDetails = getHTMLElementsById("mentor-details");
const role = localStorage.getItem("role");

const mentorsHTML = mentorsData.map((mentor, index) => {
  const mentorLinkId = `#mentor/${index + 1}`;
  const html = `<div class="mentor-card">
  <div>
  <img height=90 src="${mentor.image}" alt="${
    mentor.name
  }" class="mentor-image" />
  </div>
      <p>${mentor.name}</p>
      <p>${truncateString(mentor.education)}</p>
      <a href=${mentorLinkId}>
      <button>See more details</button>
      </a>
    </div>`;
  return html;
});

mentorList.innerHTML = mentorsHTML.join("");

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;

  if (hash.startsWith("#mentor/")) {
    const mentorId = parseInt(hash.split("/")[1], 10) - 1;

    if (!role) {
      console.log(`${role} is not defined`);

      window.location.href = "/pages/welcome.html";
    }
    if (role === "") {
      console.log(`${role} is not empty`);
      window.location.href = "/pages/welcome.html";
    }
    // Get the mentor details by ID
    const mentor = mentorsData[mentorId];
    if (mentor) {
      mentorList.style.display = "none";
      mentorDetails.style.display = "block";

      // Create the mentor details HTML
      mentorDetails.innerHTML = `
          <button id="backBtn">Go Back</button>
      <div class="mentors-detail-container">
        <div class="mentor-detail-card roboto-light">
          <img src="${mentor.image}" alt="${mentor.name} />
          <h3>${mentor.name}</h3>
          <p>${mentor.education}</p>
          <p>${mentor?.phone}</p>
          <p>${mentor.email[0]}</p>
        <h2>Faculty: ${mentor.staffType}</h2>
        </div>
        <div>
        <p class="roboto-regular">Book a one-on-one sessions with ${
          mentor.staffType
        } ${mentor.name}</p>
        <form class="available-hours mentor-form-detail" action="mailto:${
          mentor.email[0]
        }.com" method="post" enctype="text/plain">
        <div class="form-group">
            <label class="roboto-light" for="time"> ${
              mentor.name
            } is available from ${mentor.availableHours.map(
        (hour) => `${hour.start} to ${hour.end}`
      )}</label>
            <input type="time" name="time" id="time" required>
            </div>
        <button class="book-session-button">Book session</button>
        </form>
        </div>
      </div>
        `;

      // Handle the "Go Back" button
      document.getElementById("backBtn").addEventListener("click", () => {
        mentorDetails.style.display = "none";
        mentorList.style.display = "block";
        history.replaceState(null, null, " ");
        location.reload();
      });
    }

    window.addEventListener("popstate", () => {
      location.reload();
    });
  }
});

// Trigger the initial hash change event (in case the user directly lands on a mentor's page)
window.dispatchEvent(new Event("hashchange"));

// Disable the unavailable hours of mentors
const timeInput = getHTMLElementsById("time");

timeInput.addEventListener("input", function () {
  const selectedTime = this.value;

  let isValid = false;

  // Check if the selected time is within any of the available time ranges
  const availableTimes = mentorsData.map(
    (availableTime) => availableTime.availableHours
  );
  availableTimes.forEach((timeRange) => {
    if (selectedTime >= timeRange.start && selectedTime <= timeRange.end) {
      isValid = true;
    }
  });

  if (!isValid) {
    timeInput.classList.add("disabled-hour");
  } else {
    timeInput.classList.remove("disabled-hour");
  }

  if (!isValid) {
    alert(
      "The selected time is not available. Please choose a time between the available hours."
    );
    this.value = ""; // Clear the invalid input
  }
});
