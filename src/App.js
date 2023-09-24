import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Contact from "./components/contact";
import { useEffect } from "react";
import './styles.css'



function App() {
 
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
