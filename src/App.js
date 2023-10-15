import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Footer3 from "./components/Footer3";
import Footer4 from "./components/Footer4";
import Sale from "./components/Sale";
import Bag from "./components/Bag";

import { Routes, Route } from "react-router-dom";
import Carddesc from "./components/Carddesc";

function App() {
  return (
    <>
  <Marque/>
   <Navbar/>
<Routes>

   
  <Route path="/" element={<Home/>}> </Route>  
  <Route path="/sale" element={ <Sale/>}></Route>
 <Route path="/Prdoucts/:id" element={<Carddesc/>}></Route>
 <Route path="/bag" element={<Bag/>}></Route>
    
    

   </Routes>
   <Footer1/>
   <Footer2/>
   <Footer3/>
   <Footer4/>
   
   
  
  
   
   
   </>
  )
}

export default App;
