// local-server const baseUrl = process.env.REACT_APP_API_BASE_URL;

//hosting server
const baseUrl = "https://e-commerce-furni-reactjs.herokuapp.com/";

export async function getProducts(category) {
  const response = await fetch(baseUrl + "products?category=" + category);
  if (response.ok) return response.json();
  throw response;
}

export async function getProduct(id) {
  const response = await fetch(baseUrl + "products/" + id);
  if (response.ok) return response.json();
  throw response;
}
