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
  {
    title: "অনলাইন পরামর্শ",
    icon: "fa-comments-alt",
    desc: "সঠিক সরঞ্জাম নির্বাচনে আমাদের অভিজ্ঞ টিমের সাথে ভিডিও কলে কথা বলুন।",
  },
  {
    title: "গ্যারান্টি ও ওয়ারেন্টি",
    icon: "fa-shield-check",
    desc: "প্রতিটি অরিজিনাল ব্র্যান্ডের সাথে পাচ্ছেন অফিশিয়াল ওয়ারেন্টি সাপোর্ট।",
  },
  {
    title: "বাল্ক ডিসকাউন্ট",
    icon: "fa-percent",
    desc: "বড় প্রজেক্ট বা পাইকারি অর্ডারে বিশেষ মূল্যছাড় ও কিস্তি সুবিধা।",
  },
  {
    title: "জরুরি সাপোর্ট",
    icon: "fa-headset",
    desc: "যেকোনো যান্ত্রিক সমস্যায় ২৪/৭ ফোন কলের মাধ্যমে পরামর্শ প্রদান।",
  },
];

// ২. মেইন কন্টেইনার তৈরি
const container = document.createElement("div");
container.className = "container mx-auto px-4 py-20";

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
        <div class="flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest cursor-pointer hover:text-yellow-500 transition">
            বিস্তারিত জানুন <i class="fas fa-chevron-right ml-2 text-[10px]"></i>
        </div>
    `;

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

// ৬. ব্যাক বাটন (Home Connection)
const backBtnWrapper = document.createElement("div");
backBtnWrapper.className = "text-center mt-16";

const backBtn = document.createElement("button");
backBtn.innerHTML = `<i class="fas fa-home mr-2"></i> হোম পেজে ফিরে যান`;
backBtn.className =
  "bg-blue-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300 transform active:scale-95";

// কানেকশন লজিক
backBtn.onclick = () => {
  // ইনডেক্স ফাইলটি এক ধাপ পেছনে (Parent folder) থাকায় ../ ব্যবহার করা হয়েছে
  window.location.href = "../index.html";
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
