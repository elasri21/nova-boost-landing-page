const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("main-menu");
const menuIcon = document.getElementById("menu-icon");

// handle navigation menu
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Toggle icon between ☰ and ✖
  if (menu.classList.contains("active")) {
    menuIcon.textContent = "✖";
  } else {
    menuIcon.textContent = "☰";
  }
});

// handle FAQ section
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');

    const isActive = button.classList.contains('active');
    button.setAttribute('aria-expanded', !isActive);
    answer.setAttribute('aria-hidden', isActive);

    // Reset all
    document.querySelectorAll('.faq-question').forEach(otherBtn => {
      const otherIcon = otherBtn.querySelector('.faq-icon');
      const otherAnswer = otherBtn.parentElement.querySelector('.faq-answer');
      otherBtn.classList.remove('active');
      otherAnswer.style.maxHeight = '0';
      otherAnswer.style.paddingBottom = '0';
      if (otherIcon) otherIcon.textContent = '➕';
    });

    // Toggle clicked one
    if (!isActive) {
      button.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.paddingBottom = '16px';
      if (icon) icon.textContent = '✖';
    } else {
      if (icon) icon.textContent = '➕';
    }
  });
});

// handle scroll-to-top button!
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


