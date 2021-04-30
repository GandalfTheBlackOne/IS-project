import React, {useEffect} from "react";
import L from "leaflet";
import { MapContainer, TileLayer, useLeafletContext } from "react-leaflet";
import data from "./data/path.js";
import "./App.css";
import "leaflet/dist/leaflet.css";



class Leaflet extends React.Component {
//     state = {
//         lng: 113.94033995546874,
//         lat: 22.265984077241928,
//         zoom: 10
//     }

//     componentDidMount() {
//         console.log(data)
//     }

   


//    render() {
//        return(
//             <div>
//                Heelp
//                <MapContainer center={"113.94033995546874, 22.265984077241928"} >
//                    <TileLayer
//                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                    />
//                    <Square center={center} size={1000} />
//                 </MapContainer>

//             </div>

//        )
//    }
// }

// function Square(props) {
//     const context = useLeafletContext()

//     useEffect(() => {
//         const bounds = L.latLng(props.center).toBounds(props.size)
//         const square = new L.Rectangle(bounds)
//         const container = context.layerContainer || context.map
//         container.addLayer(square)

//         return () => {
//             container.removeLayer(square)
//         }
//     })

//     return null
}

export default Leaflet