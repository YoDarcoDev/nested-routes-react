import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./components/Home";
import Map from "./components/Map";
import Catalogue from "./components/Catalogue";
import SpaceWayMap from "./components/SpaceWayMap";
import HistorianWorkshop from "./components/HistorianWorkshop";
import Generique from "./components/Generique";
import Note from "./components/Note";
import Source from "./components/Source";
import Notice from "./components/Notice";

export default function App() {

    const location = useLocation();
    const previousLocation = location.state?.previousLocation;


    return (
        <Routes>
            <Route path='/' element={ <Layout/> } >
                <Route index element={ <Home/> } />

                <Route path='/map' element={ <Map/> }>
                    <Route path='notice/:id' element={ <Notice/> } >
                        <Route path='note/:id' element={ <Note/> } >
                            <Route path='source/:id' element={ <Source/> }/>
                        </Route>
                    </Route>
                </Route>

                <Route path='/catalogue' element={ <Catalogue/> }>
                    <Route path='note/:id' element={ <Note/> }>
                        <Route path='source/:id' element={ <Source/> }/>
                    </Route>
                </Route>

                <Route path='/spaceway-map' element={ <SpaceWayMap/> } />

                <Route path='/historian-workshop' element={ <HistorianWorkshop/> } />

                <Route path='/generique' element={ <Generique /> } />
            </Route>
        </Routes>
    )
}

