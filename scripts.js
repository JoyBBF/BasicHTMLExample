
function submitForm() {
  alert('Felicidades, te has registrado exitosamente'); 
  
  let hobbiesList = []
  document.querySelectorAll('input[name="hobbies"]:checked').forEach(input => hobbiesList.push(input.value))

  const user = {
    email: document.getElementById('username').value,
    name: document.getElementById('name').value,
    birthdate: document.getElementById('birthdate').value,
    region: document.getElementById('countrySelect').value,
    sex: document.querySelector('input[name="sex"]:checked').value,
    hobbies: hobbiesList
  };
  
  console.log(user);

  addRow(user)

  clearForm();
}

function addRow(user){
  let tbody = document.getElementById("tbody");
  let div = document.createElement('div');
  div.classList.add("table-row");

  div.innerHTML = 
  "<div class='table-item'>"+user.email+"</div>"+
  "<div class='table-item'>"+user.name+"</div>"+
  "<div class='table-item'>"+user.birthdate+"</div>"+
  "<div class='table-item'>"+user.region+"</div>"+
  "<div class='table-item'>"+user.sex+"</div>"+
  "<div class='table-item'>"+user.hobbies.toString()+"</div>";

  tbody.appendChild(div);
  
}

function clearForm(){
  document.getElementById('username').value = '';
  document.getElementById('name').value = '';
  document.getElementById('birthdate').value = '';
  document.getElementById('countrySelect').value = '';
  document.querySelector('input[name="sex"]:checked').checked = false;
  document.querySelectorAll('input[name="hobbies"]:checked').forEach(input => input.checked = false);
}

/*
AGREGUEMOS MAS CAMPOS

PAIS con un select box
SEXO GENERO con un radio button (alinear con flexbox horizontal)
INTERESES HOBBIES con un checkbox (alinear con flexbox horizontal)

Antes de limpiar los datos se debe crear un objeto
con los valores que el usuario selecciono e imprimir en pantalla
y despues limpiar los datos.


alinear titulo, formulario y boton al centro

 */