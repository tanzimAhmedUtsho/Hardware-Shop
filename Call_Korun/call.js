document.addEventListener("DOMContentLoaded", () => {
  const callForm = document.getElementById("callForm");
  const formWrapper = document.getElementById("formWrapper");
  const successState = document.getElementById("successState");
  const thanksMsg = document.getElementById("thanksMsg");

  callForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name").value;
    const submitBtn = callForm.querySelector("button");

    // লোডিং অ্যানিমেশন সিমুলেশন
    submitBtn.innerHTML = `<i class="fas fa-spinner animate-spin"></i> <span>প্রসেস হচ্ছে...</span>`;
    submitBtn.style.pointerEvents = "none";
    submitBtn.style.opacity = "0.7";

    setTimeout(() => {
      // ফর্ম হাইড করে সাকসেস মেসেজ দেখানো
      formWrapper.classList.add("hidden");
      successState.classList.remove("hidden");

      // ডাইনামিক নাম সেট করা
      thanksMsg.innerText = `ধন্যবাদ, ${nameInput}!`;

      console.log("Call Request Sent for:", nameInput);
    }, 1800);
  });
});
