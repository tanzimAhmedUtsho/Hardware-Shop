// পেজ লোড হওয়ার পর মেসেজ
console.log("তানজিম হার্ডওয়্যার সাইটে স্বাগতম!");

// স্মুথ স্ক্রলিং ইফেক্ট
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// স্ক্রল করলে নেভিগেশন বারের শ্যাডো পরিবর্তন
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-2xl");
  } else {
    header.classList.remove("shadow-2xl");
  }
});
