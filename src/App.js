import React,{useState, useEffect} from 'react';
import NavHeader from './components/NavbarApp/NavHeader'
import './styles/index.scss';
import Footer from "./components/Footer/Footer"
import Routing from './components/Routes/Routes';
import './styles/transition.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
      width: undefined,
      height: undefined,
  });
  
  const menuToggleHandler = () => {
      setMenuOpen((p) => !p);
  }

  useEffect(() =>{
      const handleResize = () => {
         setSize({
             width: window.innerWidth,
             height: window.innerHeight,
         });
      };
      window.addEventListener("resize",handleResize);

      return () => window.removeEventListener("resize", handleResize)
  },[])

  useEffect(() => {
     if(size.width > 1059 && menuOpen) {
         setMenuOpen(false)
     }
  }, [size.width, menuOpen]);

  return (
    <>
    
      <div className="page-container">
      <NavHeader 
      menuOpen={menuOpen}
      menuToggleHandler={menuToggleHandler}
      />
      
      <div className={"page-container " + "transition " + (menuOpen?'hide':'')}>
          <Routing />
        <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
