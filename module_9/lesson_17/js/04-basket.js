const PRODUCT_LS_KEY = 'basket';

const totalPrice = document.querySelector(".js-total-price");
const clearBtn = document.querySelector(".js-clear");
const container = document.querySelector(".js-list");

clearBtn.addEventListener("click", handlerClear);

const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
let totalCost;

//  ["alice"] => 1 => true
if(products.length) {
    clearBtn.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => {
        return acc + (qty * price);
    }, 0) 
}

totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";
container.insertAdjacentHTML("beforeend", createMarkup(products));

function createMarkup(arr) {
    return arr.map(({ img, name, qty, price }) => `
        <li class="product-card">
            <img src="${img}" alt="${name}" class="product-img"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price} грн</p>
        </li>
    `).join("");
}

function handlerClear() {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "03-shop.html";
}

