import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import './index.scss'


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div className="page">
                <Outlet/>
            </div>
        </div>
     )
}
 
export default Layout;