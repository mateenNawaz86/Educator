window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// FAQ functionality
const faqs = document.querySelectorAll(".faq");

// console.log(faqs);

faqs.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("answer");

    // change the icon
    let faqIcon = item.querySelector(".faqs__icon i");

    if (faqIcon.className == "uil uil-plus") {
      faqIcon.className = "uil uil-minus";
    } else {
      faqIcon.className = "uil uil-plus";
    }
  });
});

// Navbar show in Mobile devices
const hamburgerBtn = document.getElementById("open-menu-btn");

const menu = document.querySelector(".nav__menu");

hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("show");

  let toggleBtn = document.querySelector("button i");

  if (toggleBtn.className == "uil uil-bars") {
    toggleBtn.className = "uil uil-multiply";
  } else {
    toggleBtn.className = "uil uil-bars";
  }
});
