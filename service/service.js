const root = document.getElementById("root");

// ১. ডাটা বা তথ্যের লিস্ট
const services = [
  {
    title: "হোম ডেলিভারি",
    icon: "fa-truck",
    desc: "ঝিনাইদহ শহরের যেকোনো প্রান্তে দ্রুত হোম ডেলিভারি।",
    longDesc:
      "আমরা ঝিনাইদহ শহরের মধ্যে অত্যন্ত দ্রুততার সাথে হোম ডেলিভারি নিশ্চিত করি। সাধারণত ২-৬ ঘণ্টার মধ্যে আপনি আপনার কাঙ্ক্ষিত পণ্যটি হাতে পেয়ে যাবেন। ৫০০ টাকার বেশি অর্ডারে আমরা বিশেষ ডেলিভারি সুবিধা প্রদান করি এবং ক্যাশ অন ডেলিভারি সুবিধাও রয়েছে।",
  },
  {
    title: "যন্ত্রপাতি মেরামত",
    icon: "fa-tools",
    desc: "পুরানো ড্রিল বা পাওয়ার টুলস মেরামত করে দেওয়া হয়।",
    longDesc:
      "আপনার ড্রিল মেশিন, গ্রাইন্ডার বা যেকোনো পাওয়ার টুলস যদি কাজ না করে, তবে আমাদের দক্ষ টেকনিশিয়ানদের কাছে নিয়ে আসতে পারেন। আমরা অরিজিনাল পার্টস দিয়ে মেরামত করে থাকি যাতে আপনার যন্ত্রটি দীর্ঘস্থায়ী হয়।",
  },
  {
    title: "খুচরা ও পাইকারি",
    icon: "fa-store",
    desc: "সাশ্রয়ী মূল্যে খুচরা এবং পাইকারি মালামাল পাওয়া যায়।",
    longDesc:
      "হার্ডওয়্যার শপ বা কন্সট্রাকশন প্রজেক্টের জন্য বড় অংকের মালামাল প্রয়োজন? আমরা পাইকারি রেটে সেরা পণ্য সরবরাহ করি। সরাসরি আমাদের সাথে যোগাযোগ করে আপনার প্রজেক্টের জন্য কোটেশন নিতে পারেন।",
  },
  {
    title: "ইন্সটলেশন সাপোর্ট",
    icon: "fa-user-cog",
    desc: "ভারী যন্ত্রপাতি বসানোর জন্য আমাদের দক্ষ টেকনিশিয়ান আছে।",
    longDesc:
      "নতুন কেনা জেনারেটর বা বড় কোনো ইন্ডাস্ট্রিয়াল মেশিন সেটআপ করতে পারছেন না? আমাদের অভিজ্ঞ টিম আপনার লোকেশনে গিয়ে সম্পূর্ণ ইন্সটলেশন এবং ট্রায়াল রান সম্পন্ন করে দেবে।",
  },
  {
    title: "অনলাইন পরামর্শ",
    icon: "fa-comments-alt",
    desc: "সঠিক সরঞ্জাম নির্বাচনে আমাদের অভিজ্ঞ টিমের সাথে ভিডিও কলে কথা বলুন।",
    longDesc:
      "আপনার নির্দিষ্ট কাজের জন্য কোন টুলসটি সেরা হবে তা নিয়ে দ্বিধায় থাকলে আমাদের সাথে সরাসরি কথা বলতে পারেন। আমাদের বিশেষজ্ঞ আপনাকে আপনার বাজেট অনুযায়ী সঠিক গাইডলাইন প্রদান করবে।",
  },
  {
    title: "গ্যারান্টি ও ওয়ারেন্টি",
    icon: "fa-shield-check",
    desc: "প্রতিটি অরিজিনাল ব্র্যান্ডের সাথে পাচ্ছেন অফিশিয়াল ওয়ারেন্টি সাপোর্ট।",
    longDesc:
      "আমরা কোনো নকল বা ক্লোন পণ্য বিক্রি করি না। প্রতিটি ব্রান্ডেড পণ্যের সাথে আপনি অফিশিয়াল ম্যানুফ্যাকচারার ওয়ারেন্টি কার্ড পাবেন, যা আমাদের শপ এবং সংশ্লিষ্ট কোম্পানির সার্ভিস সেন্টার থেকে গ্রহণ করতে পারবেন।",
  },
  {
    title: "বাল্ক ডিসকাউন্ট",
    icon: "fa-percent",
    desc: "বড় প্রজেক্ট বা পাইকারি অর্ডারে বিশেষ মূল্যছাড় ও কিস্তি সুবিধা।",
    longDesc:
      "কর্পোরেট ক্লায়েন্ট বা কন্সট্রাকশন ফার্মের জন্য আমাদের রয়েছে বিশেষ বাল্ক প্রাইসিং পলিসি। নিয়মিত বড় অর্ডারের ক্ষেত্রে বিশেষ ছাড়ের পাশাপাশি সুবিধাজনক পেমেন্ট মেথড বা কিস্তি সুবিধাও থাকছে।",
  },
  {
    title: "জরুরি সাপোর্ট",
    icon: "fa-headset",
    desc: "যেকোনো যান্ত্রিক সমস্যায় ২৪/৭ ফোন কলের মাধ্যমে পরামর্শ প্রদান।",
    longDesc:
      "কাজের মাঝে হঠাৎ মেশিন নষ্ট হয়ে গেছে? চিন্তার কারণ নেই। আমাদের ইমারজেন্সি হেল্পলাইনে কল করুন, আমাদের টেকনিশিয়ান ফোনের মাধ্যমেই আপনাকে প্রাথমিক সমস্যা সমাধানের পরামর্শ দেবেন।",
  },
];

// ২. মেইন কন্টেইনার তৈরি
const container = document.createElement("div");
container.className = "container mx-auto px-4 py-20";

// ৩. নতুন ও সুন্দর ব্যাক বাটন (উপরে স্থানান্তরিত)
const topNav = document.createElement("div");
topNav.className = "mb-12 flex justify-start";
topNav.innerHTML = `
    <a href="../index.html" class="group flex items-center space-x-4 bg-white px-6 py-3 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
        <div class="w-10 h-10 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
            <i class="fas fa-home"></i>
        </div>
        <span class="font-bold text-blue-950">হোম পেজে ফিরে যান</span>
    </a>
`;
container.appendChild(topNav);

// ৩. হেডার তৈরি (JS দিয়ে)
const header = document.createElement("div");
header.innerHTML = `
    <div class="text-center mb-20">
        <span class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">Premium Services</span>
        <h1 class="text-5xl font-black text-blue-950 mb-4 italic">আপনার বিশ্বস্ত সেবা পার্টনার</h1>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">আধুনিক যন্ত্রপাতি এবং অভিজ্ঞ টেকনিশিয়ানের সমন্বয়ে আমরা দিচ্ছি সেরা মানের হার্ডওয়্যার সলিউশন।</p>
        <div class="h-1.5 w-32 bg-yellow-500 mx-auto rounded-full mt-6"></div>
    </div>
`;
container.appendChild(header);

// ৪. সার্ভিস কার্ড গ্রিড তৈরি
const grid = document.createElement("div");
grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24";

services.forEach((item, index) => {
  const card = document.createElement("div");
  card.className =
    "service-card bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden group";

  // কার্ডের কন্টেন্ট
  card.innerHTML = `
        <div class="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full group-hover:bg-blue-600 transition-all duration-500 opacity-20"></div>
        <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <i class="fas ${item.icon}"></i>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-blue-950">${item.title}</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">${item.desc}</p>
        <div class="details-btn flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest cursor-pointer hover:text-yellow-500 transition">
            বিস্তারিত জানুন <i class="fas fa-chevron-right ml-2 text-[10px]"></i>
        </div>
    `;

  card
    .querySelector(".details-btn")
    .addEventListener("click", () => showModal(item));
  grid.appendChild(card);
});

container.appendChild(grid);

// ৫. "কিভাবে আমরা কাজ করি" (Process Section)
const processSection = document.createElement("div");
processSection.className =
  "bg-blue-950 text-white rounded-[3rem] p-12 md:p-20 mb-20 shadow-2xl relative overflow-hidden";
processSection.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
            <h2 class="text-3xl md:text-4xl font-black mb-6">কিভাবে আমাদের <span class="text-yellow-400 text-italic">সেবা নিবেন?</span></h2>
            <p class="text-blue-200 mb-10">তিনটি সহজ ধাপে আপনার প্রয়োজনীয় যন্ত্রপাতি বা মেরামত সেবা ঘরে বসেই পেতে পারেন।</p>
            <div class="space-y-8">
                <div class="flex items-center space-x-6">
                    <span class="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center font-bold text-xl text-yellow-500">১</span>
                    <div>
                        <h4 class="font-bold text-lg">পণ্য বা সেবা নির্বাচন করুন</h4>
                        <p class="text-sm text-blue-300">আমাদের ক্যাটালগ থেকে আপনার প্রয়োজনীয় পণ্যটি বাছাই করুন।</p>
                    </div>
                </div>
                <div class="flex items-center space-x-6">
                    <span class="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center font-bold text-xl text-yellow-500">২</span>
                    <div>
                        <h4 class="font-bold text-lg">আমাদের সাথে যোগাযোগ করুন</h4>
                        <p class="text-sm text-blue-300">সরাসরি কল বা অনলাইন মেসেজের মাধ্যমে অর্ডার কনফার্ম করুন।</p>
                    </div>
                </div>
                <div class="flex items-center space-x-6">
                    <span class="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center font-bold text-xl text-yellow-500">৩</span>
                    <div>
                        <h4 class="font-bold text-lg">ডেলিভারি বুঝে নিন</h4>
                        <p class="text-sm text-blue-300">খুব দ্রুততম সময়ের মধ্যে আপনার ঠিকানায় সেবা পৌঁছে যাবে।</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:block">
            <div class="bg-blue-900/50 p-8 rounded-3xl border border-blue-800">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Work Process" class="rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition duration-500">
            </div>
        </div>
    </div>
    <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
`;
container.appendChild(processSection);
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

// ৮. মডাল লজিক (Details Popup)
const modalOverlay = document.createElement("div");
modalOverlay.className =
  "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4 transition-opacity duration-300";
modalOverlay.innerHTML = `
    <div id="modalContent" class="bg-white rounded-[2.5rem] max-w-lg w-full p-8 md:p-12 relative shadow-2xl transform transition-all duration-300 scale-90 opacity-0">
        <button id="closeModal" class="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors text-xl">
            <i class="fas fa-times"></i>
        </button>
        <div id="modalIcon" class="w-20 h-20 bg-blue-50 text-blue-900 rounded-3xl flex items-center justify-center text-3xl mb-8"></div>
        <h2 id="modalTitle" class="text-3xl font-black text-blue-950 mb-4 italic"></h2>
        <p id="modalDesc" class="text-gray-600 leading-relaxed mb-10 text-lg"></p>
        <a href="../Call_Korun/call.html" class="inline-block bg-blue-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-blue-900 transition-all shadow-lg active:scale-95 text-center">সরাসরি যোগাযোগ করুন</a>
    </div>
`;
document.body.appendChild(modalOverlay);

function showModal(service) {
  document.getElementById("modalTitle").innerText = service.title;
  document.getElementById("modalDesc").innerText = service.longDesc;
  document.getElementById("modalIcon").innerHTML =
    `<i class="fas ${service.icon}"></i>`;

  modalOverlay.classList.remove("hidden");
  setTimeout(() => {
    const content = document.getElementById("modalContent");
    content.classList.remove("scale-90", "opacity-0");
    content.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeModal() {
  const content = document.getElementById("modalContent");
  content.classList.add("scale-90", "opacity-0");
  setTimeout(() => {
    modalOverlay.classList.add("hidden");
  }, 300);
}

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.getElementById("closeModal").addEventListener("click", closeModal);
