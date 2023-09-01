(function () {
    const navButton = document.querySelector("#nav-menu-button");
    const navUl = document.querySelector(".nav-ul");
  
    navButton.onclick = () => {
      navUl.classList.toggle("hide-ul");
      navButton.classList.toggle("active");
    }
})();

(function () {
  const card = document.querySelector(".card");
  const video = document.querySelector(".card-video");
  card.onmouseover = () => {
    video.play();
  }

  card.onmouseout = () => {
    video.pause();
  }
})();