import { Outlet } from "react-router-dom";
import Navbar from "./Navbars/Navbar"; 
import Footer from "./Footers/Footer"; 

const Root = () => {
    return (
        <div>
           <Navbar></Navbar>  
           <Outlet></Outlet>
           <Footer>
            
           </Footer>
        </div>
    );
};

export default Root;
