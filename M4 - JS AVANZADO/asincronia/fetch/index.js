const getData = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.error(res.statusText);
    }
  } catch (error) {
    console.error(error);
  }
};

getData("https://pokeapi.co/api/v2/pokemon");
