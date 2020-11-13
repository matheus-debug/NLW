//create map
const map = L.map("mapid").setView([-24.1591177, -46.7977846], 15);
//create and add tiereyer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//create icon
const icon = L.icon({
  iconUrl: "../public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent('Lar Das meninas <a href="orfanato.html?id=1" class="escolha-orfanato"> <img src="public/images/arrow-white.svg" alt=""> </a>')

//create and add marker
L
.marker([-24.1591177, -46.7977846], { icon })
  .addTo(map)
  .bindPopup(popup)
