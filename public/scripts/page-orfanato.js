//criando um objeto para evitar interações com o mapa

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

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
L.marker([-24.1591177, -46.7977846], { icon: icon })
  .addTo(map)
