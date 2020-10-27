const map = L.map('mapid').setView([-24.1591177,-46.7977846], 15);
//create and add tiereyer


L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [50, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar Das meninas <a href="orfanatos.html?id=1" class="escoolha-orfanato" <img  src=".public/images/arrow-white.svg"></a>')

L.marker([-24.1591177,-46.7977846], {icon})
    .addTo(map)
    .bindPopup('Essa é a casa do Matheus')