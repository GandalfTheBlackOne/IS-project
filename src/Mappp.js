import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
import sampleTrail from "./data/path.js";
import "./App.css";

mapboxgl.accessToken = 'pk.eyJ1IjoidHdoayIsImEiOiJja25meTJiajEwNm12MnZsd2ZzZmRldzQ2In0.G0bwOAkl_iZyFgAW5SL4xw';

function Mappp() {
    const [viewport, setViewport] = React.useState({
        longitude: 113.94033995546874,
        latitude: 22.265984077241928,
        zoom: 10,
        height: "90vh",
        width: "80vw"
    });
    const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/twhk/cknn091sr079i17pbk7nenj1x',
                center: [viewport.longitude, viewport.latitude],
                zoom: viewport.zoom
    })


    console.log(map.o)

    useEffect(() => {
        {map}
        sampleTrail.features.forEach((each => {
            var marker = new mapboxgl.Marker({ })
                .setLngLat(each.geometry.coordinates[0])
                //.setPopup(popup)
                .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h4>' + each.properties.name + '</h4>')
                    //.addClassName('path-marker')
                )
                .addTo(map);
            console.log("hi");
         }))
    })      

    return (
        <div>
            {/* <div
                ref={el => mapContainer = el}
                style={{
                    width: '80%',
                    height: '90vh',
                }}
            /> */}

            {map}
        </div>
    )
}

export default Mappp