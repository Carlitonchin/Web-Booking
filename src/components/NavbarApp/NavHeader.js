import React, { useEffect, useState } from 'react';

import classes from "../../styles/NavbarStyle/Navheader.module.scss"

import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom"

const NavHeader = ({menuOpen, menuToggleHandler}) => {

   
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
                  <Link to="/" onClick={menuToggleHandler}>Alojamiento</Link>
                </li>
                <li>
                  <Link to="/vuelos" onClick={menuToggleHandler}>Vuelos</Link>
                </li>
                <li>
                  <Link to="/coches" onClick={menuToggleHandler}>Alquiler de Coches</Link>
                </li>
                <li>
                  <Link to="/turismo" onClick={menuToggleHandler}>Atracciones Turisticas</Link>
                </li>
                <li>
                  <Link to="/taxi" onClick={menuToggleHandler} >Taxi al Aereopuerto</Link>
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
