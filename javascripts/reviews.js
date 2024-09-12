"use strict";

const ui = {
  reviewContainer: document.querySelector("#review-container"),
  openNewFormEl: document.querySelector("#open-new-review-form"),
  newReviewFormEL: document.querySelector("#new-post-review"),
  submitButton: document.querySelector(".button-submit-review"),
  locationSelection: document.querySelector("#numberToSelect"),
};

(function init() {
  server.getReviews().then((reviews) => {
    renderReviews(reviews);
  });
  initEventListeners();
})();

function renderReviews(reviews) {
  ui.reviewContainer.innerHTML = "";
  reviews.forEach(renderReview);
}

function renderReview(review) {
  const htmlContent = `
    <div id="card-review" class="card my-4 posted-card">
      
      <div class="card-header" style="color: #4c6ef5"> 
        ${review.location} 
      </div>
      <div class="card-body">
      <div class="card-header">${review.title}
      </div>
      <div class="card-body">
    <blockquote class="blockquote mb-0 ">
      <p>${review.text}</p>
      <footer class="blockquote-footer">Adăugat de <cite title="Source Title">${
        review.name
      }</cite></footer>
      
      <div class="card-footer text-body-secondary">${new Date(
        review.time
      ).toLocaleString("ro")}</div>
      
    </blockquote>
  </div>
</div>
    `;

  ui.reviewContainer.insertAdjacentHTML("beforeend", htmlContent);
}

function initEventListeners() {
  ui.openNewFormEl.addEventListener("click", () => {
    ui.submitButton.textContent = "Adaugă";
    if (ui.newReviewFormEL.classList.contains("hidden")) {
      ui.newReviewFormEL.classList.remove("hidden");
      ui.newReviewFormEL.style.display = "block";
    } else {
      ui.newReviewFormEL.classList.add("hidden");
      ui.newReviewFormEL.style.display = "none";
      ui.newReviewFormEL.name.value = "";
      ui.newReviewFormEL.text.value = "";
    }
  });

  ui.newReviewFormEL.addEventListener("submit", (event) => {
    const newReview = {
      location: ui.locationSelection.value,
      name: document.querySelector("#form-name").value,
      title: document.querySelector("#form-title").value,
      text: document.querySelector("#form-textarea").value,
      time: Date.now(),
    };
    server.addNewReview(newReview);

    ui.newReviewFormEL.style.display = "none";
    ui.newReviewFormEL.name.value = "";
    ui.newReviewFormEL.text.value = "";
    ui.openNewFormEl.style.display = "inline";
    event.preventDefault();
  });
}
