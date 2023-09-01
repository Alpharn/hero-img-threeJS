(function () {
  const navButton = document.querySelector("#nav-menu-button");
  const navUl = document.querySelector(".nav-ul");
  const card = document.querySelector(".card");
  const video = document.querySelector(".card-video");
  
  const toggleNav = () => {
    navUl.classList.toggle("hide-ul");
    navButton.classList.toggle("active");
  };

  const playVideo = () => video.play();
  const pauseVideo = () => video.pause();

  navButton.addEventListener('click', toggleNav);
  card.addEventListener('mouseover', playVideo);
  card.addEventListener('mouseout', pauseVideo);

})();
