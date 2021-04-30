import React, {useRef, useState} from "react";
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import useSWR, { SWRConfig } from 'swr';
import sampleTrail from "./data/path.js";
import "./App.css";

//const fetcher = {...args => fetch(...arg).then(response => response.json())};

const mapToken = 'pk.eyJ1IjoidHdoayIsImEiOiJja25meTJiajEwNm12MnZsd2ZzZmRldzQ2In0.G0bwOAkl_iZyFgAW5SL4xw';

function Reactmapgl(props) {
    const [viewport, setViewport ] = React.useState({
        longitude: 113.94033995546874,
        latitude: 22.265984077241928,
        zoom: 10,
        height: "90vh",
        width: "80vw"
    });
    const mapRef = useRef();

    //  get map bound

    //  get clusters

    const markers = sampleTrail.features.forEach(each => (
            <Marker
                key={each.properties['@id']}
                latitude={each.geometry.coordinates[0][0]}
                longitude={each.geometry.coordinates[0][1]}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <h4>{each.properties.name}</h4>
                <img src="./img/markers.png" />
            </Marker>
        )
    )

    //console.log(sampleTrail.features[0].geometry.coordinates[0][0])
    // loading coordinatas works
    // sampleTrail.features.forEach(each => {
    //     console.log(each.geometry.coordinates[0][0])
    // })
        console.log({...new Set(markers)})

    return (
        <>
            <div>{sampleTrail.features[0].geometry.coordinates[0][0]}</div>
        <ReactMapGL 
            mapStyle={"mapbox://styles/twhk/cknn091sr079i17pbk7nenj1x"}
            {...viewport} 
            width="80vw" 
            height="90vh" 
            onViewportChange={newViewport => {
                setViewport({...newViewport});
            }} 
            mapboxApiAccessToken={mapToken}
            maxZoom={20}
        >
            <marker/>
        </ReactMapGL>
        </>
    )
}
export default Reactmapgl

const marker = () => {
    for (var i = 1; i < 10; i++) {

        return (
            <Marker
                key={sampleTrail.features.id}
                longitude={sampleTrail.features[i].geometry.coordinates[0][0]}
                latitude={sampleTrail.features[i].geometry.coordinates[0][1]}
                className='path-marker'
            >Display
                <button onClick={() => { }}>
                    {sampleTrail.features[i].properties.name}
                </button>
            </Marker>
        )
    }
}
{
    sampleTrail.features.forEach(each => (
        <Marker
            key={each.id}
            latitude={each.geometry.coordinates[0][0]}
            longitude={each.geometry.coordinates[0][1]}
            className='path-marker'
        >
            {/* <div>Display</div>
                    <button className="map-marker">
                        <img src="./img/markers.png" alt="too shy" />
                    </button> */}
        </Marker>
    ))
}