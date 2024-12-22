// Parallax effect with smooth animation
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  requestAnimationFrame(() => {
    document.querySelector(".hero").style.backgroundPositionY =
      scrolled * 0.5 + "px";
  });
});

// Smooth reveal animations on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

// Observe elements for reveal animation
document
  .querySelectorAll(
    ".trending h2, .post-card, .cta h2, .subscribe-form, .about-header, .about-content, .team-member, .product-reviews h2, .carousel-item, .ingredients-header, .ingredient-card, .season-header, .season"
  )
  .forEach((el) => observer.observe(el));

// Enhanced 3D card effect for post cards and product cards
document
  .querySelectorAll(".post-card, .carousel-item, .ingredient-card, .season")
  .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 15).toFixed(2);
      const rotateY = ((centerX - x) / 15).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.5s ease";
    });
  });

// Add hover effect for team member images
document.querySelectorAll(".team-member").forEach((member, index) => {
  member.style.setProperty("--i", index + 1);

  member.addEventListener("mouseenter", () => {
    member.querySelector("img").style.transform = "scale(1.1) rotate(5deg)";
    member.querySelector("h4").style.color = "#3498db";
    member.querySelector("p").style.transform = "translateY(5px)";
    member.querySelector("p").style.color = "#2c3e50";
  });

  member.addEventListener("mouseleave", () => {
    member.querySelector("img").style.transform = "scale(1) rotate(0)";
    member.querySelector("h4").style.color = "#2c3e50";
    member.querySelector("p").style.transform = "translateY(0)";
    member.querySelector("p").style.color = "#666";
  });
});

// Add smooth scroll animation for about section, product images and ingredient images
document
  .querySelectorAll(
    ".about-image img, .carousel-item img, .ingredient-image img, .product-highlight img"
  )
  .forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });

// Auto-scroll carousel
const carousel = document.querySelector(".carousel");
let currentPosition = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

setInterval(() => {
  currentPosition = (currentPosition + 1) % totalItems;
  carousel.style.transform = `translateX(-${currentPosition * 100}%)`;
}, 5000);

// Auto-scroll benefits lists
document.querySelectorAll(".scrolling-benefits ul").forEach((list) => {
  setInterval(() => {
    list.style.animation = "scrollBenefits 12s infinite";
  }, 1000);
});

// Cta section
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".subscribe-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;

    if (email) {
      alert(
        "Thank you for subscribing! You will receive our latest updates at " +
          email
      );
      form.reset();
    } else {
      alert("Please enter a valid email address");
    }
  });
});
