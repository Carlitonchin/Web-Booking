import React from 'react';
import NavHeader from './components/NavbarApp/NavHeader'
//import './styles/index.scss';
import Footer from "./components/Footer/Footer"
import Routing from './components/Routes/Routes';
function App() {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <NavHeader />
          <Routing />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
