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

//inciando a variavél vazia
let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //nessa parte estou colocando os valores latitude e longitute no input do mapa
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icone - caso a pessoa clique em um novo lugar do mapa, ele vai remover o icone anterior
    marker && map.removeLayer(marker)
    
    //adicionar icone - coloca um novo icone indicando local no mapa

    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})