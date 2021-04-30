import './App.css';
import Mapp from "./map";
import Leaflet from "./Leaflet"
import ReactMapGL from "./Reactmapgl"
import sampleData from "./data/path.js";

const App = () => {

  return(
    <div className="App">
      <ReactMapGL />
    </div>
  )
}

export default App