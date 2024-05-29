import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Menu() {
    return (

        <div className="bg-black text-white h-[100px] flex justify-center place-items-center">
            {/* <span>Menu</span> */}
            <ul className="flex gap-5">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/map'}>Map</Link>
                </li>
                <li>
                    <Link to={'/catalogue'}>Catalogue</Link>
                </li>
                <li>
                    <Link to={'/historian-workshop'}>Atelier de l'historien</Link>
                </li>
                <li>
                    <Link to={'/spaceway-map'}>Carte Spatio-temporelle</Link>
                </li>
                <li>
                    <Link to={'/generique'}>Générique</Link>
                </li>
            </ul>
        </div>
    )
}