//criando um objeto para evitar interações com o mapa

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-24.1591177, -46.7977846], 15);
//create and add tiereyer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "../public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([-24.1591177, -46.7977846], { icon: icon }).addTo(map);

/*IMAGE GALLERY*/

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orfanato-detalhes > img");
  //atualizar o container de imagem
  imageContainer.src = image.src;
  //adicionar a classe active
  button.classList.add("active");
}
