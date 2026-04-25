document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const noProduct = document.getElementById("noProduct");

  // ২০টি হার্ডওয়্যার পণ্যের ডাটা লিস্ট
  const products = [
    {
      name: "পাওয়ার ড্রিল মেশিন",
      price: "৪,৫০০",
      icon: "fa-hammer",
      desc: "হেভি ডিউটি এবং টেকসই মোটর",
      tag: "নতুন",
    },
    {
      name: "টুল বক্স সেট",
      price: "১,৮০০",
      icon: "fa-tools",
      desc: "১২০ পিস অল-ইন-ওয়ান প্রফেশনাল সেট",
      tag: "",
    },
    {
      name: "ইলেক্ট্রিক স্ক্রু-ড্রাইভার",
      price: "২,২০০",
      icon: "fa-screwdriver",
      desc: "রিচার্জেবল এবং ফাস্ট চার্জিং সুবিধা",
      tag: "জনপ্রিয়",
    },
    {
      name: "মেজারমেন্ট টেপ (৫মিঃ)",
      price: "৩৫০",
      icon: "fa-ruler-combined",
      desc: "নির্ভুল মাপের জন্য সেরা স্টিল টেপ",
      tag: "",
    },
    {
      name: "অ্যাডজাস্টেবল রেঞ্জ",
      price: "৬৫০",
      icon: "fa-wrench",
      desc: "মরিচাসীন ও মজবুত গ্রিপ হ্যান্ডেল",
      tag: "",
    },
    {
      name: "প্লায়ার্স সেট",
      price: "৫৫০",
      icon: "fa-cut",
      desc: "সব ধরণের তার কাটার জন্য উপযোগী",
      tag: "",
    },
    {
      name: "হ্যান্ড করাত (Hack-Saw)",
      price: "৪০০",
      icon: "fa-file-alt",
      desc: "ধারালো ব্লেড ও উন্নত মানের ফ্রেম",
      tag: "",
    },
    {
      name: "গ্রাইন্ডিং মেশিন",
      price: "৩,৮০০",
      icon: "fa-cog",
      desc: "উচ্চ গতি সম্পন্ন শক্তিশালী গ্রাইন্ডার",
      tag: "অফার",
    },
    {
      name: "বড় হাতুড়ি (Hammer)",
      price: "৩০০",
      icon: "fa-gavel",
      desc: "ভারী কাজের জন্য উন্নত রাবার গ্রিপ",
      tag: "",
    },
    {
      name: "ভাইস গ্রিপ প্লায়ার্স",
      price: "৮৫০",
      icon: "fa-compress-arrows-alt",
      desc: "স্ট্রং হোল্ড ও লকিং মেকানিজম",
      tag: "",
    },
    {
      name: "ডিজিটাল লেভেল মিটার",
      price: "১,২০০",
      icon: "fa-layer-group",
      desc: "নির্ভুল কোণ মাপার লেজার সেন্সর",
      tag: "নতুন",
    },
    {
      name: "সোল্ডারিং আয়রন সেট",
      price: "৪৫০",
      icon: "fa-fire",
      desc: "ইলেক্ট্রনিক্স মেরামতের ফুল কিট",
      tag: "",
    },
    {
      name: "পাইপ রেঞ্জ (১২ ইঞ্চি)",
      price: "৯৫০",
      icon: "fa-stream",
      desc: "প্লাম্বিং ও পাইপ ফিটিং এর জন্য সেরা",
      tag: "",
    },
    {
      name: "ওয়্যার স্ট্রিপার",
      price: "২৮০",
      icon: "fa-cut",
      desc: "তারের ইনসুলেশন ছাড়ানোর জন্য উপযোগী",
      tag: "",
    },
    {
      name: "গ্লু গান (Heavy Duty)",
      price: "৬০০",
      icon: "fa-tint",
      desc: "দ্রুত জোড়া লাগানোর জন্য হট মেল্ট গান",
      tag: "",
    },
    {
      name: "কার্বন ব্রাশ সেট",
      price: "১২০",
      icon: "fa-brush",
      desc: "মেশিনের আয়ু বাড়াতে উন্নত কার্বন",
      tag: "",
    },
    {
      name: "সেফটি হেলমেট",
      price: "৫০০",
      icon: "fa-hard-hat",
      desc: "ইন্ডাস্ট্রিয়াল গ্রেড ও টেকসই সুরক্ষা",
      tag: "প্রয়োজনীয়",
    },
    {
      name: "উড চিজেল সেট (বাটালি)",
      price: "৭৫০",
      icon: "fa-pencil-ruler",
      desc: "কাঠের নিখুঁত নকশা করার সরঞ্জাম",
      tag: "",
    },
    {
      name: "ইলেক্ট্রিক ব্লয়ার মেশিন",
      price: "২,৪০০",
      icon: "fa-wind",
      desc: "ধুলোবালি পরিষ্কারের উচ্চ ক্ষমতা সম্পন্ন",
      tag: "",
    },
    {
      name: "বেঞ্চ ভাইস (Table Clamp)",
      price: "১,৫৫০",
      icon: "fa-border-style",
      desc: "ভারী বস্তু আটকে রাখার লোহার ভাইস",
      tag: "",
    },
  ];

  // পণ্য প্রদর্শনের ফাংশন
  function displayProducts(filteredList) {
    productGrid.innerHTML = "";

    if (filteredList.length === 0) {
      noProduct.classList.remove("hidden");
    } else {
      noProduct.classList.add("hidden");
      filteredList.forEach((product) => {
        const card = document.createElement("div");
        card.className =
          "product-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition duration-300";

        card.innerHTML = `
          <div class="h-48 bg-gray-100 flex items-center justify-center relative group">
              <i class="fas ${product.icon} text-5xl text-blue-300 group-hover:scale-110 transition duration-300"></i>
              ${product.tag ? `<span class="absolute top-3 right-3 bg-yellow-500 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-full italic shadow-sm">${product.tag}</span>` : ""}
          </div>
          <div class="p-5">
              <h4 class="font-bold text-lg mb-1 text-gray-800">${product.name}</h4>
              <p class="text-xs text-gray-500 mb-4 italic h-8 overflow-hidden">${product.desc}</p>
              <div class="flex justify-between items-center">
                  <span class="text-xl font-black text-blue-700">৳ ${product.price}</span>
                  <a href="call.html" class="bg-blue-900 text-white p-2.5 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition shadow-md">
                      <i class="fas fa-shopping-cart text-sm"></i>
                  </a>
              </div>
          </div>
        `;
        productGrid.appendChild(card);
      });
    }
  }

  // পেজ লোড হওয়ার সময় সব পণ্য দেখানো
  displayProducts(products);

  // সার্চ ফিল্টার লজিক
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term),
    );
    displayProducts(filtered);
  });
});
