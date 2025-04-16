
import { Outlet } from "react-router-dom"
import Navbar from "../Component/Navbar"
import Touch from "../Component/Touch"
 function Layout() {
    

    return (<>
    
        <Navbar />
        <Outlet/>
        <Touch/>
    
    </>)

}

export default Layout