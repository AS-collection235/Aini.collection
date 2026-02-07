
  const texts = [
    "🌟Welcome to AS.colection🌟",
          "  🌟New collection just arrived 🌟 ",
          " 🌟Delivery all over Pakistan 🌟",
          " 🌟 Cash on delivery🌟  "
  ];

  let index = 0;
  const textElement = document.getElementById("changingText");

  setInterval(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
  }, 3000); // 3 seconds
/*neww iiiii*/

 const image = [
  "images/pic1.png",
  "images/pic.png",
  "images/pic3.png"
];

let indexs = 0;
const imagesElement = document.getElementById("changingImage");

setInterval(() => {
  indexs = (indexs + 1) % image.length;
  imagesElement.src = image[indexs];  // yahan imageContent ki jagah src hona chahiye
}, 3000); // 3 seconds
/*search box*/
// Simple JS for Search & Cart functionality

// Search Button Click
document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search").value;
    if(query) {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a product name to search!");
    }
});

// Cart Icon Click
document.getElementById("cart").addEventListener("click", function() {
    alert("Your cart has " + document.getElementById("cart-count").innerText + " items.");
});

/*end*/
/* YA NEW HA RESPONE KA LIYA */
// web.js
const searchInput = document.getElementById("search");

// saare products (pure page se)
const products = document.querySelectorAll(
  ".boxes div, .boxes2 div, .boxes3 div, .boxes4 div, .boxes5 div"
);

// no result message create
const noResult = document.createElement("p");
noResult.innerText = "No product found";
noResult.style.textAlign = "center";
noResult.style.fontSize = "20px";
noResult.style.margin = "40px";
noResult.style.display = "none";

document.querySelector("main").appendChild(noResult);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  let found = false;

  products.forEach(product => {
    const name = product.innerText.toLowerCase();

    if (name.includes(query)) {
      product.style.display = "";
      found = true;
    } else {
      product.style.display = "none";
    }
  });

  // agar kuch bhi match na ho
  if (!found && query !== "") {
    noResult.style.display = "block";
  } else {
    noResult.style.display = "none";
  }
});


// // ====== PRODUCT SEARCH FUNCTIONALITY ======
// const searchBtn = document.getElementById("search-btn");
// const searchInput = document.getElementById("search");

// // Sab product boxes select karo
// const allBoxes = document.querySelectorAll(".boxes .box1, .boxes .box2, .boxes .box3, .boxes .box4, .boxes .box5, .boxes2 .box1, .boxes2 .box2, .boxes2 .box3, .boxes2 .box4, .boxes2 .box5, .boxes3 .box1, .boxes3 .box2, .boxes3 .box3, .boxes3 .box4, .boxes3 .box5");

// // Product names for search (update according to your products)
// const productNames = [
//     "Winter collection","Summer collection", "Lawn Dress","Top Sellings","top sellings"
// ];

// searchBtn.addEventListener("click", () => {
//     const query = searchInput.value.toLowerCase().trim();

//     let found = false;
//     allBoxes.forEach((box, index) => {
//         // Match product name with query
//         if (productNames[index] && productNames[index].toLowerCase().includes(query)) {
//             box.scrollIntoView({ behavior: "smooth", block: "center" });
//             box.style.border = "3px solid #ffeb3b"; // Highlight
//             setTimeout(() => {
//                 box.style.border = "none"; // Remove highlight
//             }, 2000);
//             found = true;
//         } else {
//             box.style.border = "none"; // Remove highlight from non-matching
//         }
//     });

//     if (!found) {
//         alert("No matching product found!");
//     }
// });

// // ====== OPTIONAL: Press Enter to search ======
// searchInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         searchBtn.click();
//     }
// });
// Home button -> top par scroll
document.getElementById("homeBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Categories button -> ek-ek box highlight karte hue scroll
document.getElementById("categoriesBtn").addEventListener("click", () => {
    const categories = document.querySelectorAll(".boxes, .boxes2, .boxes3, .boxes4, .boxes5");
    let delay = 0;

    categories.forEach((categoryBox) => {
        setTimeout(() => {
            categoryBox.scrollIntoView({ behavior: "smooth", block: "start" });
            categoryBox.style.border = "3px solid #ffeb3b"; // Highlight
            setTimeout(() => {
                categoryBox.style.border = "none"; // Remove highlight
            }, 2000);
        }, delay);
        delay += 2200; // thoda gap har category ke liye
    });
});

// Contact button -> number show
document.getElementById("contactBtn").addEventListener("click", () => {
    alert("📞 Contact us at: +92 300 1234567");
});



/* home  */
// Home button -> scroll top + show all products
document.getElementById("homeBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show all product boxes (jo search ke wajah se hide ho gaye)
    const allProducts = document.querySelectorAll(
        ".boxes div, .boxes2 div, .boxes3 div, .boxes4 div, .boxes5 div"
    );
    allProducts.forEach(product => {
        product.style.display = ""; // wapas show
    });

    // Agar Categories box khula hai, to hide kar do
    const catBox = document.getElementById("categoriesBox");
    if (catBox) catBox.style.display = "none";

    // No result message hide kar do
    const noResult = document.querySelector("#noResultMessage");
    if (noResult) noResult.style.display = "none";
});
// Home button -> scroll top + show all products
document.getElementById("homeBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show all product boxes (jo search ke wajah se hide ho gaye)
    const allProducts = document.querySelectorAll(
        ".boxes div, .boxes2 div, .boxes3 div, .boxes4 div, .boxes5 div"
    );
    allProducts.forEach(product => {
        product.style.display = ""; // wapas show
    });

    // Agar Categories box khula hai, to hide kar do
    const catBox = document.getElementById("categoriesBox");
    if (catBox) catBox.style.display = "none";

    // No result message hide kar do
    const noResult = document.querySelector("#noResultMessage");
    if (noResult) noResult.style.display = "none";
});


/*===================================
ya naya mobile hamburger  abla ka lya
===================================== */
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.getElementById('search-btn');
    const navMenu = document.querySelector('.nav-menu');
    const searchInput = document.querySelector('.search-box input');

    searchBtn.addEventListener('click', () => {
        searchBox.classList.toggle('active');
        navMenu.classList.toggle('hidden');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            searchBox.classList.remove('active');
            navMenu.classList.remove('hidden');
        }
    });
});

// =============================
// end
// ===========================



document.addEventListener('DOMContentLoaded', () => {
    // List of all boxes sections
    const sections = document.querySelectorAll('.boxes, .boxes2, .boxes3, .boxes4, .boxes5');

    sections.forEach(section => {
        const items = section.children;
        if(items.length > 8){ // Agar 8 se zyada images hain
            // Show only first 8
            for(let i=8; i<items.length; i++){
                items[i].style.display = 'none';
            }

            // Create View All button
            const btn = document.createElement('button');
            btn.className = 'view-all-btn';
            btn.innerText = 'View All';
            section.after(btn);

            // Toggle functionality
            let expanded = false;
            btn.addEventListener('click', () => {
                expanded = !expanded;
                for(let i=8; i<items.length; i++){
                    items[i].style.display = expanded ? 'flex' : 'none';
                    items[i].style.flexDirection = 'column';// display flex because your boxes are flex
                }
                btn.innerText = expanded ? 'Collapse' : 'View All';
            });
        }
    });
});


// ====================
//     order
//     =======
function buyNowModal(){
    const title = document.getElementById("modal-title").textContent;
    const img = document.getElementById("modal-img").src;
    closeModal(); // product modal close
    document.getElementById("order-form-modal").style.display = "flex";

    // Optional: pre-fill product name or image
    document.getElementById("order-form-modal").dataset.product = title;
}

function closeOrderForm(){
    document.getElementById("order-form-modal").style.display = "none";
}

function submitOrder(){
    const first = document.getElementById("order-first").value;
    const last = document.getElementById("order-last").value;
    const address = document.getElementById("order-address").value;
    const phone = document.getElementById("order-phone").value;
    const product = document.getElementById("order-form-modal").dataset.product;

    if(!first || !last || !address || !phone){
        alert("Please fill all details!");
        return;
    }

    // Here you can send this info to server or Firebase
    alert(`Order confirmed for ${product}!\nName: ${first} ${last}\nAddress: ${address}\nPhone: ${phone}`);

    // Reset form & hide modal
    document.getElementById("order-form-modal").style.display = "none";
    document.getElementById("order-first").value = "";
    document.getElementById("order-last").value = "";
    document.getElementById("order-address").value = "";
    document.getElementById("order-phone").value = "";
}













