//create map
const map = L.map("mapid").setView([-24.1591177, -46.7977846], 15);
//create and add tiereyer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "../public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//inciando a variavél vazia
let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //nessa parte estou colocando os valores latitude e longitute no input do mapa
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remover icone - caso a pessoa clique em um novo lugar do mapa, ele vai remover o icone anterior
  marker && map.removeLayer(marker);

  //adicionar icone - coloca um novo icone indicando local no mapa

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar campo de fotos
function addPhotoField() {
  //pega o container de imagens
  const container = document.querySelector("#images");

  //duplica o container fotos - new image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //Verificar se o campo esta vazio, não adicionar o campo vazio
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    alert("Primeiro adicione uma Foto");
    return;
  }
  //limpar o clone antes de adicionar ao container de imagens
  newFieldContainer.children[0].value = "";
  //adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo

  span.parentNode.remove();
}

//selecionar o botão sim e não no fim da pagina

function toggleSelect(event) {
  //retirar a class active
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });
  //adionar a classe active
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar input hidden
  const input = document.querySelector('[name="open-on-weekends"]');

  //verificar se o valor é sim ou não

  input.value = button.dataset.value;
}
