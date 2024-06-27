import { api } from "./api.js";

const productsContainer = document.querySelector('.products__container');
const form = document.querySelector('.form');

function createProductCell({ id, name, price, image }) {
  const productCell = document.createElement('td');
  productCell.classList.add("product");
  productCell.innerHTML += `
    <img class="product__image" src=${image} alt=${name}/>
    <p class="product__name">${name}</p>
    </div>
  `;

  const productFooter = document.createElement('div');
  productFooter.classList.add("product__footer");
  productFooter.innerHTML += `
    <span class="product__price">
      R$ ${Number(price).toFixed(2)}
    </span>
  `;

  const productTrash = document.createElement('img');
  productTrash.classList.add("product__trash");
  productTrash.src = "images/trashcan.svg";
  productTrash.alt = "Remover";
  productTrash.addEventListener("click", async() => {
    await api.removeProduct(id)}
  );

  productFooter.appendChild(productTrash);
  productCell.appendChild(productFooter);

  return productCell;
}

async function loadProducts() {
  const products = await api.listProducts();

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if(i == 0 || i % 3 == 0) {
      const tr = document.createElement('tr');
      tr.setAttribute("class", "products__container__row");
      productsContainer.appendChild(tr);
    }

    const rows = document.querySelectorAll('tr');
    const lastRow = rows[rows.length - 1];

    lastRow.appendChild(createProductCell(product));
  }
}

async function addProduct() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  await api.addProduct({ name, price, image });
}

form.addEventListener("submit", () => addProduct());

loadProducts();