

/*ya pp*/
function updateCartDropdown(){
    const dropdown = document.getElementById("cart-dropdown");
    dropdown.innerHTML = "";

    if(cart.length === 0){
        // White box with message
        const emptyDiv = document.createElement("div");
        emptyDiv.style.height = "80px";        // box size
        emptyDiv.style.display = "flex";
        emptyDiv.style.alignItems = "center";
        emptyDiv.style.justifyContent = "center";
        emptyDiv.style.background = "white";
        emptyDiv.style.color = "#333";
        emptyDiv.style.fontWeight = "bold";
        emptyDiv.style.fontSize = "14px";
        emptyDiv.textContent = "No products in cart";
        dropdown.appendChild(emptyDiv);
        return;
    }

    cart.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.img}">
            <div>
                <strong>${item.title}</strong><br>
                ${item.price}<br>
                <button onclick="removeCartItem(${idx})" style="margin-top:5px; font-size:12px;">Remove</button>
            </div>
        `;
        dropdown.appendChild(div);
    });
}



/* Cart array */
// let cart = [];
// let cartCount = 0;

// // 1️⃣ Create modal (product box)
// function createModal(){
//     if(!document.getElementById("product-modal")){
//         const modal = document.createElement("div");
//         modal.id = "product-modal";
//         modal.className = "modal";
//         modal.innerHTML = `
//             <div class="modal-content">
//                 <span class="close" onclick="closeModal()">&times;</span>
//                 <img id="modal-img" src="" alt="Product">
//                 <h2 id="modal-title">Title</h2>
//                 <p id="modal-description">Description</p>
//                 <button id="modal-add-cart">Add to Cart</button>
//                 <button id="modal-buy-now">Buy Now</button>
//             </div>
//         `;
//         document.body.appendChild(modal);

//         document.getElementById("modal-add-cart").addEventListener("click", addToCartModal);
//         document.getElementById("modal-buy-now").addEventListener("click", buyNowModal);
//     }
// }

// // 2️⃣ Open modal with selected product info
// function openProduct(title,img, description){
//     createModal();
//     document.getElementById("modal-img").src = img;
//     document.getElementById("modal-title").textContent = title;
//     document.getElementById("modal-description").textContent = description;
//     document.getElementById("product-modal").style.display = "flex";
// }

// // Close modal
// function closeModal(){
//     document.getElementById("product-modal").style.display = "none";
// }

// // 3️⃣ Add to Cart (price empty)
// function addToCartModal(){
//     const title = document.getElementById("modal-title").textContent;
//     const description = document.getElementById("modal-description").textContent;
//     const img = document.getElementById("modal-img").src;

//     cart.push({title,price: "", img, description}); // price blank
//     cartCount = cart.length;
//     document.getElementById("cart-count").textContent = cartCount;
//     updateCartDropdown();
//     closeModal();
// }

// // 4️⃣ Buy Now (price empty)
// function buyNowModal(){
//     const title = document.getElementById("modal-title").textContent;
//     const description = document.getElementById("modal-description").textContent;
//     const img = document.getElementById("modal-img").src;

//     cart.push({title, price: "", img, description});
//     cartCount = cart.length;
//     document.getElementById("cart-count").textContent = cartCount;
//     updateCartDropdown();
//     closeModal();

    
// }

// // 5️⃣ Update cart dropdown
// function updateCartDropdown(){
//     const dropdown = document.getElementById("cart-dropdown");
//     dropdown.innerHTML = "";
//     if(cart.length === 0){
//         const emptyDiv = document.createElement("div");
//         emptyDiv.style.height = "80px";
//         emptyDiv.style.display = "flex";
//         emptyDiv.style.alignItems = "center";
//         emptyDiv.style.justifyContent = "center";
//         emptyDiv.style.background = "white";
//         emptyDiv.style.color = "#333";
//         emptyDiv.style.fontWeight = "bold";
//         emptyDiv.style.fontSize = "14px";
//         emptyDiv.textContent = "No products in cart";
//         dropdown.appendChild(emptyDiv);
//         return;
//     }

//     cart.forEach((item, idx) => {
//         const div = document.createElement("div");
//         div.className = "cart-item";
//         div.innerHTML = `
//             <img src="${item.img}">
//             <div>
                
//                 ${item.description}<br>
//                 <button onclick="removeCartItem(${idx})" style="margin-top:5px; font-size:12px;">Remove</button>
//             </div>
//         `;
//         dropdown.appendChild(div);
//     });
// }

// // 6️⃣ Remove from cart
// function removeCartItem(index){
//     cart.splice(index,1);
//     cartCount = cart.length;
//     document.getElementById("cart-count").textContent = cartCount;
//     updateCartDropdown();
// }

// // 7️⃣ Toggle cart dropdown
// document.getElementById("cart").addEventListener("click", () => {
//     const dropdown = document.getElementById("cart-dropdown");
//     dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
// });

// // 8️⃣ Click event for all product boxes
// const allBoxes = document.querySelectorAll(".boxes div, .boxes2 div, .boxes3 div, .boxes4 div, .boxes5 div");
// allBoxes.forEach((box, index)=>{
//     const img = box.querySelector("img").src;
//     const title = box.querySelector("figcaption").textContent || "Product "+(index+1);
//     const description = title; // description me bhi same figcaption use

//     box.style.cursor = "pointer";
//     box.addEventListener("click", ()=>{
//         openProduct(title, img, description);
//     });
// });

// // 9️⃣ Close modal if click outside
// window.addEventListener("click", function(event){
//     const modal = document.getElementById("product-modal");
//     if(modal && event.target === modal){
//         closeModal();
//     }
// });


/*=====================
=====contact=======*/
/* ================= CART ARRAY ================= */
/* ================= CART ARRAY ================= */
/* ================= CART ARRAY ================= */
/* ================= CART ARRAY ================= */
let cart = [];
let cartCount = 0;

/* ================= PRODUCT MODAL ================= */
function createModal(){
    if(!document.getElementById("product-modal")){
        const modal = document.createElement("div");
        modal.id = "product-modal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <img id="modal-img" src="" alt="Product">
                <p id="modal-description"></p>
                <button id="modal-add-cart">Add to Cart</button>
                <button id="modal-buy-now">Buy Now</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById("modal-add-cart")
            .addEventListener("click", addToCartModal);

        document.getElementById("modal-buy-now")
            .addEventListener("click", openOrderModal);
    }
}

function openProduct(description, img){
    createModal();
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("product-modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("product-modal").style.display = "none";
}

/* ================= ADD TO CART ================= */
function addToCartModal(){
    const description = document.getElementById("modal-description").textContent;
    const img = document.getElementById("modal-img").src;

    cart.push({ description, img });
    cartCount = cart.length;
    document.getElementById("cart-count").textContent = cartCount;
    updateCartDropdown();
    closeModal();
}

/* ================= ORDER MODAL (WHATSAPP) ================= */
function openOrderModal(){
    const description = document.getElementById("modal-description").textContent;
    const img = document.getElementById("modal-img").src;

    // Cart update
    cart.push({ description, img });
    cartCount = cart.length;
    document.getElementById("cart-count").textContent = cartCount;
    updateCartDropdown();
    closeModal();

    // Create order modal
    if(!document.getElementById("order-modal")){
        const modal = document.createElement("div");
        modal.id = "order-modal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeOrderModal()">&times;</span>
                <h2>Place Your Order</h2>
                <p id="order-description">${description}</p>
                <p><img src="${img}" style="max-width:100px;"></p>
                <label>Your Name:</label><br>
                <input type="text" id="order-name" placeholder="Enter your name" style="width:100%; margin-bottom:5px;"><br>
                <label>Quantity:</label><br>
                <input type="number" id="order-qty" value="1" style="width:100%; margin-bottom:5px;"><br>
                <button id="send-whatsapp">Send on WhatsApp</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById("send-whatsapp").addEventListener("click", sendWhatsAppMessage);
    } else {
        // Update existing modal description + image
        document.getElementById("order-description").textContent = description;
        document.querySelector("#order-modal img").src = img;
    }

    document.getElementById("order-modal").style.display = "flex";
}

function closeOrderModal(){
    document.getElementById("order-modal").style.display = "none";
}

/* ================= SEND WHATSAPP MESSAGE ================= */
function sendWhatsAppMessage(){
    const name = document.getElementById("order-name").value.trim();
    const qty = document.getElementById("order-qty").value;
    const description = document.getElementById("order-description").textContent;
    const img = document.querySelector("#order-modal img").src;

    if(name === ""){
        alert("Please enter your name!");
        return;
    }

    // WhatsApp message
    const message = `Hello, I want to order this product:\n${description}\nQuantity: ${qty}\nCustomer Name: ${name}\nImage: ${img}`;

    // Replace YOURNUMBER with your WhatsApp number (country code + number)
    const whatsappURL = `https://wa.me/00000011?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    closeOrderModal();
}

/* ================= CART DROPDOWN ================= */
function updateCartDropdown(){
    const dropdown = document.getElementById("cart-dropdown");
    dropdown.innerHTML = "";

    if(cart.length === 0){
        const emptyDiv = document.createElement("div");
        emptyDiv.style.height = "80px";
        emptyDiv.style.display = "flex";
        emptyDiv.style.alignItems = "center";
        emptyDiv.style.justifyContent = "center";
        emptyDiv.style.background = "white";
        emptyDiv.style.fontWeight = "bold";
        emptyDiv.textContent = "No products in cart";
        dropdown.appendChild(emptyDiv);
        return;
    }

    // ================= ADD CLOSE BUTTON =================
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×"; // cross symbol
    closeBtn.style.cssText = `
        float: right;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    `;
    closeBtn.addEventListener("click", () => {
        dropdown.style.display = "none"; // close dropdown
    });
    dropdown.appendChild(closeBtn);

    // ================= ADD CART ITEMS =================
    cart.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.img}">
            <div>
                ${item.description}<br>
                <button onclick="removeCartItem(${idx})"
                    style="margin-top:5px; font-size:12px;">
                    Remove
                </button>
            </div>
        `;
        dropdown.appendChild(div);
    });
}

function removeCartItem(index){
    cart.splice(index, 1);
    cartCount = cart.length;
    document.getElementById("cart-count").textContent = cartCount;
    updateCartDropdown();
}

/* ================= CART TOGGLE ================= */
document.getElementById("cart").addEventListener("click", () => {
    const dropdown = document.getElementById("cart-dropdown");
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});

/* ================= PRODUCT CLICK ================= */
const allBoxes = document.querySelectorAll(
    ".boxes div, .boxes2 div, .boxes3 div, .boxes4 div, .boxes5 div"
);

allBoxes.forEach((box, index) => {
    const img = box.querySelector("img").src;
    const description = box.querySelector("figcaption")?.textContent || "Product " + (index + 1);

    box.style.cursor = "pointer";
    box.addEventListener("click", () => {
        openProduct(description, img);
    });
});

/* ================= CLOSE MODAL ON OUTSIDE CLICK ================= */
window.addEventListener("click", function(event){
    const productModal = document.getElementById("product-modal");
    const orderModal = document.getElementById("order-modal");

    if(productModal && event.target === productModal) closeModal();
    if(orderModal && event.target === orderModal) closeOrderModal();
});
