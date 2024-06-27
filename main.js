const products = [
  {
    "id": 1,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 2,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 3,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 4,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 5,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 6,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 7,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 8,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 9,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  },
  {
    "id": 10,
    "name": "Game Boy",
    "price": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/640px-Game-Boy-FL.png"
  }
]

const productsContainer = document.querySelector('.products__container');

for (let i = 0; i < products.length; i++) {
  let product = products[i];

  if(i == 0 || i % 3 == 0) {
    const tr = document.createElement('tr');
    tr.setAttribute("class", "products__container__row");
    productsContainer.appendChild(tr);
  }

  const rows = document.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];

  lastRow.innerHTML += `
    <td class="product">
      <img class="product__image" src=${product.image} alt=${product.name}/>
      <p class="product__name">${product.name}</p>
      <div class="product__footer">
        <span class="product__price">
          R$ ${product.price.toFixed(2)}
        </span>
        <img class="product__trash" src="images/trashcan.svg" alt="Remover"/>
      </div>
    </td>
  `;  
}