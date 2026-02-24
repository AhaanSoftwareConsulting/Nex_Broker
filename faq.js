document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let visibleCount = 4;

  // Show first 4 FAQs initially
  for (let i = 0; i < visibleCount; i++) {
    faqItems[i].classList.add("active");
  }

  // Open first question by default
  const firstItem = faqItems[0];
  firstItem.classList.add("expanded");
  firstItem.querySelector(".faq-answer").style.display = "block";
  firstItem.querySelector(".toggle-icon").textContent = "–";

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggleIcon = item.querySelector(".toggle-icon");

    question.addEventListener("click", () => {
      const isExpanded = item.classList.contains("expanded");

      // Close all
      faqItems.forEach(i => {
        i.classList.remove("expanded");
        i.querySelector(".faq-answer").style.display = "none";
        i.querySelector(".toggle-icon").textContent = "+";
      });

      // Toggle clicked one
      if (!isExpanded) {
        item.classList.add("expanded");
        answer.style.display = "block";
        toggleIcon.textContent = "–";
      }
    });
  });

  // Load More functionality
  loadMoreBtn.addEventListener("click", () => {
    if (visibleCount < faqItems.length) {
      faqItems[visibleCount].classList.add("active");
      visibleCount++;
      if (visibleCount === faqItems.length) {
        loadMoreBtn.style.display = "none";
      }
    }
  });
});
