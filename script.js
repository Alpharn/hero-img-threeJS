(function () {
  const navButton = document.querySelector("#nav-menu-button");
  const navUl = document.querySelector(".nav-ul");
  const navContainer = document.getElementById("nav-container");
  const card = document.querySelector(".card");
  const video = document.querySelector(".card-video");
  const startAnimation = document.querySelector('animate[id="start"]');
  const reverseAnimation = document.querySelector('animate[id="reverse"]');

  const toggleNav = () => {
      navUl.classList.toggle("hide-ul");
      navButton.classList.toggle("active");
      // Проверяем состояние меню и запускаем соответствующую анимацию
      if (navUl.classList.contains('hide-ul')) {
          reverseAnimation.beginElement();
      } else {
          startAnimation.beginElement();
      }
  };

  const playVideo = () => video.play();
  const pauseVideo = () => video.pause();

  navButton.addEventListener('click', toggleNav);
  card.addEventListener('mouseover', playVideo);
  card.addEventListener('mouseout', pauseVideo);

  document.addEventListener('click', function(event) {
      if (!navContainer.contains(event.target) && !navUl.classList.contains('hide-ul') && event.target !== navButton) {
          toggleNav();
      }
  });
})();