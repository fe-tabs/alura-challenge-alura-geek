const productsContainer = document.querySelector('.products__container');

async function loadProducts() {
  let products = 
    await fetch("http://localhost:3000/products")
      .then(res => res.json());

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
}

loadProducts();