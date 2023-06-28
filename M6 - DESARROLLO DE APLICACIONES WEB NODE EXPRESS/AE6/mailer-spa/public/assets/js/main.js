const form = document.querySelector('form');
const validacionCorrecta = true;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const [{value: to}, {value: subject}, {value: text}] = event.target;
  // validar(to)
  if(!to || !subject || !text || validacionCorrecta != true) {
    return alert('Todos los datos son requeridos');
  }
  form.submit();
});

const validar = (to)=>{
  let regexmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
  if(regexmail.test(to)== false){
    document.querySelector(".errorMail").innerHTML = "El mail es requerido";
    validacionCorrecta = false;
  }
  return validacionCorrecta;
}