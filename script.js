// ১. পেজ লোড হওয়ার পর কনসোল মেসেজ
console.log("তানজিম হার্ডওয়্যার সাইটে স্বাগতম!");

document.addEventListener("DOMContentLoaded", () => {
  // ২. টাইপিং অ্যানিমেশন (Hero Title)
  const heroTitle = document.querySelector(".hero-section h2");
  if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerText = "";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter();
  }

  // ৩. স্ক্রল রিভিল ইফেক্ট (Stat Cards ভেসে ওঠা)
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".stat-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease-out";
    observer.observe(card);
  });

  // ৪. স্মুথ স্ক্রলিং ইফেক্ট
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // ৫. মাউস মুভমেন্টে কার্ড রিঅ্যাকশন (Subtle Tilt)
  document.querySelectorAll(".stat-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });
});

// ৬. স্ক্রল করলে নেভিগেশন বারের শ্যাডো পরিবর্তন
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-2xl", "bg-blue-950"); // স্ক্রল করলে রঙ একটু গাঢ় হবে
    header.style.transition = "all 0.4s";
  } else {
    header.classList.remove("shadow-2xl", "bg-blue-950");
  }
});
