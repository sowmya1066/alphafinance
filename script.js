const operation_tab = document.querySelectorAll(".operations--tab");
const operation_content = document.querySelectorAll(".operations1--tab");

operation_tab.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    operation_tab.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    operation_content.forEach((content) => {
      content.classList.remove("active");
    });
    operation_content[index].classList.add("active");
  });
});

//Testimonials
var btn = document.getElementsByClassName("testimonilas--btn");
var slide = document.getElementById("testimonial--slider");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

document.querySelectorAll(".nav_link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
