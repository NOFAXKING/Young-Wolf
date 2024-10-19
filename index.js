import { mentorsData } from "./data/data.js";
import { getHTMLElementsById, truncateString } from "./lib/utils.js";

const mentorList = getHTMLElementsById("mentor-container");
const mentorDetails = getHTMLElementsById("mentor-details");

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
          <img src="${mentor.image}" alt="${mentor.name}" />
          <h3>${mentor.name}</h3>
          <p>${mentor.education}</p>
          <p>${mentor?.phone}</p>
          <p>${mentor.email[0]}</p>
        <h2>Faculty: ${mentor.staffType}</h2>
        </div>
        <div>
        <p class="roboto-regular">Book a one-on-one sessions with ${mentor.staffType} ${mentor.name}</p>
        <form class="available-hours mentor-form-detail">
        <div class="form-group">
            <label class="roboto-bold" for="time">Available hours</label>
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
