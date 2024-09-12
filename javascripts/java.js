const imagesList = [
  "../assets/1.jpg",
  "../assets/2.jpg",
  "../assets/3.jpg",
  "../assets/3.jpg",
  "../assets/4.jpg",
  "../assets/5.jpg",
  "../assets/6.jpg",
  "../assets/7.jpg",
  "../assets/8.jpg",
];

const ui = {
  buttonShowPetEl: document.querySelector(".random-photo-button"),
  photoContainerEl: document.querySelector(".random-photo-container"),
  photoRandomEl: document.querySelector(".random-photo"),
};

function random() {
  const photoRandom = Math.trunc(Math.random() * imagesList.length);
  if (photoRandom !== 0) {
    ui.photoRandomEl.src = `../assets/${photoRandom}.jpg`;

    const canvas = document.getElementById("canvas");
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      // confettiColors: [
      //   "#ff0a54",
      //   "#ff477e",
      //   "#ff7096",
      //   "#ff85a1",
      //   "#fbb1bd",
      //   "#f9bec7",
      // ],
      // confettiRadius: 6,
      // confettiNumber: 500,
      emojis: ["💚"],
      emojisSize: 100,
      confettiNumber: 15,
    });
  }
}
