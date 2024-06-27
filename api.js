const apiUrl = "http://localhost:3000/products";

async function listProducts() {
  const products = await fetch(apiUrl)
    .then(res => res.json());

  return products;
}

async function addProduct({ name, price, image }) {
  await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "price": price,
      "image": image
    })
  }).then(res => res.json());
}

async function removeProduct(id) {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE',
  });
}

export const api = {
  listProducts,
  addProduct,
  removeProduct
}