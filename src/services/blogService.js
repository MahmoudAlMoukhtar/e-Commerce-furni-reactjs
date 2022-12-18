const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getBlogs() {
  const response = await fetch(baseUrl + "blogs");
  if (response.ok) return response.json();
  throw response;
}
