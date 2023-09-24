import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";

import { useEffect } from "react";
import './styles.css'



function App() {
 
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
