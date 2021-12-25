import React, { useEffect, useState } from 'react';

import classes from "../../styles/NavbarStyle/Navheader.module.scss"

import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom"

const NavHeader = () => {

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
        <header className={classes.header}>
          <div className={classes.header_content}>
            <h2 className={classes.header_content_logo}>suTravl.com</h2>
            <nav
              className={`${classes.header_content_nav} ${
                menuOpen ? classes.isMenu : ""
              }`}
            >
              <ul>
                <li>
                  <Link to="/">Alojamiento</Link>
                </li>
                <li>
                  <Link to="/vuelos">Vuelos</Link>
                </li>
                <li>
                  <Link to="/coches">Alquiler de Coches</Link>
                </li>
                <li>
                  <Link to="/turismo">Atracciones Turisticas</Link>
                </li>
                <li>
                  <Link to="/taxi">Taxi al Aereopuerto</Link>
                </li>
              </ul>
            </nav>
            <div className={classes.header_content_toggle}>
              {menuOpen ? (
                <AiOutlineClose onClick={menuToggleHandler} />
              ) : (
                <BiMenuAltRight onClick={menuToggleHandler} />
              )}
            </div>
          </div>
        </header>
       
      </>
    );
}

export default NavHeader
