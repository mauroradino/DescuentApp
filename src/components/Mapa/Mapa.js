import React, { useContext, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import Context from '../../context';
import "./Mapa.css"

const customIcon = new L.Icon({
    iconUrl: require('../../marcador-de-posicion.png'),
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});



const points = [
    { lat: -32.891737274370335, lng: -68.8494342605302, popupText: "CARREFOUR EXPRESS" },
    { lat: -32.8886298426376, lng: -68.84904750858, popupText: "COTO" },
    { lat: -32.88903253581918, lng: -68.84102064502329, popupText: "SUPER A" },
    { lat: -32.88977579657587, lng: -68.83902508151623, popupText: "ATOMO" },
    { lat: -32.88264666121473, lng: -68.8540651550578, popupText: "COTO" },
    { lat: -32.87765167193289, lng: -68.8572718174005, popupText: "COTO" },
    { lat: -32.88445035659297, lng: -68.8415292520556, popupText: "SUPER A" },
    { lat: -32.879991719444256, lng: -68.83257754623635, popupText: "CARREFOUR EXPRESS" },
];

const Mapa = () => {
    let puntosMapa
    const { setSelectedStore } = useContext(Context)
    const [resultadoBusqueda, setResultadoBusqueda] = useState("")


    resultadoBusqueda === "" ? puntosMapa = points : puntosMapa = points.filter(punto => punto.popupText === resultadoBusqueda)

    const seleccionarTienda = (tienda) => {
        setSelectedStore(tienda);
        sessionStorage.setItem("tienda", tienda)
    };

    const handleChangeBusqueda = (e) => {
        let target = e.target.value
        if (target) {
            target = target.toUpperCase()
        }
        setResultadoBusqueda(target)
    }

    return (
        <>
            <div className='divInput'>
                <input className='inputBusqueda' id='busqueda' onChange={handleChangeBusqueda} type='text' />
                <button className='buscarBtn'>Buscar</button>
            </div>
            <MapContainer className='mapa' center={[-32.9, -68.85]} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {puntosMapa.map((point, idx) => (
                    <Marker key={idx} position={[point.lat, point.lng]} icon={customIcon}>
                        <Popup><Link to="/Local" onClick={() => seleccionarTienda(point.popupText)}>{point.popupText}</Link></Popup>

                    </Marker>
                ))}
            </MapContainer>
        </>
    )
}

export default Mapa