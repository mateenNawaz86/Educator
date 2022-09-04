window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// FAQ functionality
const faqs = document.querySelectorAll(".faq");

console.log(faqs);

faqs.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("answer");

    // change the icon
    let faqIcon = document.querySelector(".faqs__icon i");

    if (faqIcon.className == "uil uil-plus") {
      faqIcon.className = "uil uil-minus";
    } else {
      faqIcon.className = "uil uil-plus";
    }
  });
});
