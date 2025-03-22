// Login modal functionality

function loginModal() {
  const loginButton = document.querySelector(".log-in-button");
  const loginModal = document.querySelector(".login-modal");
  const body = document.querySelector("body");

  function switchLoginModal() {
    body.classList.add("overlay");
    body.style.overflow = "hidden";
    loginModal.classList.toggle("active");
  }
  loginButton.addEventListener("click", switchLoginModal);

  const closeLoginButton = document.querySelector(".close-login-button");

  function closeLoginModal() {
    body.classList.remove("overlay");
    body.style.overflow = "visible";
    loginModal.classList.remove("active");
  }

  closeLoginButton.addEventListener("click", closeLoginModal);
}

// Search modal functionality

function searchModal() {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-modal input");

  function switchSearchModal() {
    searchInput.classList.toggle("active");
  }
  searchButton.addEventListener("click", switchSearchModal);
}

// Scroll top functionality

function scrollToTop() {
  const scrollButton = document.querySelector(".scroll-to-top-button");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  function showScrollButton() {
    if (document.documentElement.scrollTop > 100) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }

  window.addEventListener("scroll", showScrollButton);
  scrollButton.addEventListener("click", scrollToTop);
}

// Form validation

function formValidation() {
  const helpForm = document.querySelector(".help-section form");
  const helpNameInput = document.querySelector(
    '.help-section input[type="text"]'
  );
  const helpEmailInput = document.querySelector(
    '.help-section input[type="email"]'
  );

  function validateForm(event) {
    event.preventDefault();
    const regName = /^[а-яА-ЯёЁa-zA-Z]+$/;
    const regEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (helpNameInput.value.trim() === "") {
      helpNameInput.classList.add("error");
      console.log("error");
    } else {
      helpNameInput.classList.remove("error");
    }

    if (helpEmailInput.value.trim() === "") {
      helpEmailInput.classList.add("error");
    } else {
      helpEmailInput.classList.remove("error");
    }

    if (!regName.test(helpNameInput.value)) {
      helpNameInput.classList.add("error");
    } else {
      helpNameInput.classList.remove("error");
    }

    if (!regEmail.test(helpEmailInput.value)) {
      helpEmailInput.classList.add("error");
    } else {
      helpEmailInput.classList.remove("error");
    }
  }

  helpForm.addEventListener("submit", validateForm);
}

// Slider functionality

function slider() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".item-section-list");
  const totalSlides = slides.length;
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  document.querySelector(".total-slides").innerText = totalSlides;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    document.querySelector(".current-slide").innerText = index + 1;
    // Изменяем позицию слайдов
    const offset = -index * 100;
    document.querySelector(
      ".carousel-inner"
    ).style.transform = `translateX(${offset}%)`;
  }

  function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  prevButton.addEventListener("click", function () {
    moveSlide(-1);
  });

  nextButton.addEventListener("click", function () {
    moveSlide(1);
  });

  showSlide(currentSlide);
}

// Запуск функций модулей
window.addEventListener("load", function () {
  loginModal();
  searchModal();
  scrollToTop();
  formValidation();
  slider();
});
