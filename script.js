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

// ৭. ইন-পেজ লাইভ চ্যাট লজিক
document.addEventListener("DOMContentLoaded", () => {
  const chatWindow = document.getElementById("chat-window");
  const chatTrigger = document.getElementById("chat-trigger");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  // চ্যাট উইন্ডো ওপেন/ক্লোজ
  chatTrigger.addEventListener("click", () =>
    chatWindow.classList.toggle("hidden"),
  );
  closeChat.addEventListener("click", () => chatWindow.classList.add("hidden"));

  // মেসেজ পাঠানোর ফাংশন
  function sendMessage() {
    const text = chatInput.value.trim();
    if (text === "") return;

    // ইউজারের মেসেজ যোগ করা
    appendMessage(text, "user");
    chatInput.value = "";

    // অটো-রিপ্লাই সিমুলেশন (১.৫ সেকেন্ড পর)
    setTimeout(() => {
      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        appendMessage(
          "ধন্যবাদ আপনার মেসেজের জন্য। আমাদের একজন প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করবেন। জরুরি প্রয়োজনে কল করুন: ০১৭৫৬৪৬৭৬৭০",
          "bot",
        );
      }, 1500);
    }, 500);
  }

  function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    if (sender === "user") {
      msgDiv.className =
        "bg-blue-600 text-white p-3 rounded-lg rounded-tr-none ml-auto max-w-[85%]";
    } else {
      msgDiv.className =
        "bg-blue-100 text-blue-900 p-3 rounded-lg rounded-tl-none max-w-[85%]";
    }
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // অটো স্ক্রল নিচে
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.className = "text-xs text-gray-500 italic";
    typingDiv.innerText = "সাপোর্ট টাইপ করছে...";
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();
  }

  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
