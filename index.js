import { mentorsData } from "./data/data.js";
import { getHTMLElementsById, truncateString } from "./lib/utils.js";

const mentorList = getHTMLElementsById("mentor-container");

const mentorsHTML = mentorsData.map((mentor) => {
  const html = `<div class="mentor-card">
  <div>
  <img height=90 src="${mentor.image}" alt="${
    mentor.name
  }" class="mentor-image" />
  </div>
      <p>${mentor.name}</p>
      <p>${truncateString(mentor.education)}</p>
      <button>See more details</button>
    </div>`;
  return html;
});

mentorList.innerHTML = mentorsHTML.join("");
