import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Works from "./pages/Works/";
import Work from "./pages/Work";
import Erro from "./pages/Erro";
import Header from "./components/Header";
import Footer from "./components/Footer";




function RoutesApp(){
return(
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/works" element={ <Works/> } />
          <Route path="/works/:id" element={ <Work/> } />

          <Route path="*" element={ <Erro/> } />

        </Routes>
      <Footer/>
        
    </BrowserRouter>
    )
}

export default RoutesApp;