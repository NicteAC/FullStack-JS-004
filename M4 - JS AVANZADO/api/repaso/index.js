const url = "https://jsonplaceholder.typicode.com/posts/";
const loading = document.getElementById("loading");
const cards = document.getElementById("cards");
const templateCard = document.getElementById("templateCards");
const fragment = document.createDocumentFragment();

window.addEventListener("DOMContentLoaded", () => {
  findPostById(100);
});

const pintarDatos = (datos) => {
  console.log(datos);
  datos.forEach((item) => {
    console.log(item);
    const clone = templateCard.content.cloneNode(true);
    console.log(clone);
    clone.querySelector("h5").textContent = `${item.id} - ${item.title}`;
    clone.querySelector("p").textContent = `${item.body}`;
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};


const findPostById = async (id) => {
  loading.classList.remove("d-none");
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      pintarDatos(data);
    } else {
      console.error(res.statusText);
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.classList.add("d-none");
  }
};
