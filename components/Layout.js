import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return ( 
    <div className="layout" >
      <Navbar/>
        <div className="container">
          {children}
        </div>
      
    </div>
    
   );
}
 
export default Layout;