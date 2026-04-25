const root = document.getElementById("root");

// ১. ডাটা বা তথ্যের লিস্ট
const services = [
  {
    title: "হোম ডেলিভারি",
    icon: "fa-truck",
    desc: "ঝিনাইদহ শহরের যেকোনো প্রান্তে দ্রুত হোম ডেলিভারি।",
  },
  {
    title: "যন্ত্রপাতি মেরামত",
    icon: "fa-tools",
    desc: "পুরানো ড্রিল বা পাওয়ার টুলস মেরামত করে দেওয়া হয়।",
  },
  {
    title: "খুচরা ও পাইকারি",
    icon: "fa-store",
    desc: "সাশ্রয়ী মূল্যে খুচরা এবং পাইকারি মালামাল পাওয়া যায়।",
  },
  {
    title: "ইন্সটলেশন সাপোর্ট",
    icon: "fa-user-cog",
    desc: "ভারী যন্ত্রপাতি বসানোর জন্য আমাদের দক্ষ টেকনিশিয়ান আছে।",
  },
];

// ২. মেইন কন্টেইনার তৈরি
const container = document.createElement("div");
container.className = "container mx-auto px-4 py-16";

// ৩. হেডার তৈরি (JS দিয়ে)
const header = document.createElement("div");
header.innerHTML = `
    <div class="text-center mb-16">
        <h1 class="text-4xl font-black text-blue-900 mb-2 italic">আমাদের বিশেষ সেবাসমূহ</h1>
        <div class="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
    </div>
`;
container.appendChild(header);

// ৪. সার্ভিস কার্ড গ্রিড তৈরি
const grid = document.createElement("div");
grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";

services.forEach((item, index) => {
  const card = document.createElement("div");
  card.className =
    "service-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-blue-600";

  // কার্ডের কন্টেন্ট
  card.innerHTML = `
        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl transition-colors duration-300">
            <i class="fas ${item.icon}"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-gray-800">${item.title}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">${item.desc}</p>
    `;

  // ৫. ইন্টারঅ্যাক্টিভ ইফেক্ট
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#f0f7ff";
    card.querySelector(".bg-blue-50").style.backgroundColor = "#ffffff";
  });
  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "white";
    card.querySelector(".bg-blue-50").style.backgroundColor = "#eff6ff";
  });

  grid.appendChild(card);
});

container.appendChild(grid);

// ৬. ব্যাক বাটন (Home Connection)
const backBtnWrapper = document.createElement("div");
backBtnWrapper.className = "text-center mt-16";

const backBtn = document.createElement("button");
backBtn.innerHTML = `<i class="fas fa-home mr-2"></i> হোম পেজে ফিরে যান`;
backBtn.className =
  "bg-blue-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300 transform active:scale-95";

// কানেকশন লজিক
backBtn.onclick = () => {
  // যদি আপনার index.html একই ফোল্ডারে থাকে
  window.location.href = "index.html";
};

backBtnWrapper.appendChild(backBtn);
container.appendChild(backBtnWrapper);

// সবশেষে রুট এলিমেন্টে যুক্ত করা
root.appendChild(container);

// ৭. এনিমেশন ইফেক্ট (Fade-in-up)
document.querySelectorAll(".service-card").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i * 0.15}s`;

  setTimeout(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, 100);
});
