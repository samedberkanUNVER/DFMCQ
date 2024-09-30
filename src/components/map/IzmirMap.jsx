import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {GoogleMapsLink} from "../link/GoogleMapsLink";

export const IzmirMap = ({ markers = [] }) => {

    const userLocationIcon = L.icon({
        iconUrl: require('../../icons/red-marker.png'),
        iconSize: [24, 24],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });
    const izmirPosition = [38.4237, 27.1428];
    const mapStyle = {
        height: '800px',
        width: '100%'
    };
    const [userPosition, setUserPosition] = useState(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserPosition([latitude, longitude]);
                },
                (error) => {
                    console.error("Konum alınırken hata oluştu:", error);
                }
            );
        } else {
            console.error("Tarayıcı Geolocation API'sini desteklemiyor.");
        }
    }

    useEffect(() => {
        getUserLocation();
    }, []);

    return (
        <MapContainer center={izmirPosition} zoom={13} style={mapStyle}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            {markers.map((marker) => {
                const markerIcon = L.icon({
                    iconUrl: marker.icon,
                    iconSize: [24, 24],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });
                return (<Marker key={marker.id} position={marker.position} icon={markerIcon}>
                    <Popup>
                        <h3>{marker.name}</h3>
                        <p>{marker.description}</p>
                        <GoogleMapsLink enlem={marker.position[0]} boylam={marker.position[1]} />
                    </Popup>
                </Marker>);
            })}
            {userPosition && <Marker position={userPosition} icon={userLocationIcon}>
                <Popup>Bu sizin anlık konumunuz.</Popup>
            </Marker>}
        </MapContainer>
    );
};