import { Outlet } from "react-router-dom"
import Header from "./src/components/Header";
import Footer from "./src/components/Footer"
import Topmenu from "./src/components/Navbar";




const Layout=()=>{
    return(
        <>
          
          <Topmenu/>
          <Header/>

          <Outlet/>
          <Footer/>
          
        </>
    )
}
export default Layout;