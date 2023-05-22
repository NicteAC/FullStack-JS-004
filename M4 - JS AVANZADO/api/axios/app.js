const url = "https://jsonplaceholder.typicode.com/posts/";

/* axios.get(url).then((res) => {
  console.log(res.data);
}); */
window.addEventListener("DOMContentLoaded", () => {
    getData();
  });
async function getData() {
  try {
    const response = await axios.put(url);
    console.log(response.data)
  } catch (error) {
    console.error(error);
  }
}
