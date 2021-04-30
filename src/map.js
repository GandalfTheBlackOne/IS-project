import React, {useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
import sampleTrail from "./data/path.js";
import "./App.css";

mapboxgl.accessToken = 'pk.eyJ1IjoidHdoayIsImEiOiJja25meTJiajEwNm12MnZsd2ZzZmRldzQ2In0.G0bwOAkl_iZyFgAW5SL4xw';

class Mapp extends React.Component {
    // Set up states for updating map 
    constructor(props) {
        super(props);
        this.state = {
            lng: 113.94033995546874,
            lat: 22.265984077241928,
            zoom: 10
        }
    }
    // Create map and lay over markers
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: 'this.mapContainer',
            style: 'mapbox://styles/twhk/cknn091sr079i17pbk7nenj1x',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        sampleTrail.features.forEach(( each => {
            var marker = new mapboxgl.Marker({
            })
                .setLngLat(each.geometry.coordinates[0])
                //.setPopup(popup)
                .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h4>' + each.properties.name + '</h4>')
                    //.addClassName('path-marker')
                )
                .addTo(map);
                console.log("hi");
                
                // var popup = new mapboxgl.Popup({ offset: 30})
                //     .setHTML('<h4>' + each.properties.name + '</h4>')
                // popup.addClassName('path-marker')
        }))
    }

    render() {
        return (
            <div>
                <div 
                    ref={el => this.mapContainer = el} 
                    style={{ 
                        width: '80%', 
                        height: '90vh',
                    }} 
                />
            </div>
        )
    }
}

function submitForm(e) {
    e.preventDefault();


}




export default Mapp;