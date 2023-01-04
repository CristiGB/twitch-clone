import React from 'react';
import { Avatar } from '@mui/material';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
          <div className="home__link">
            <figure>
              <svg overflow="visible" width="40px" height="40px" version="1.1" viewBox="0 0 40 40" x="0px" y="0px">
                <g>
                  <polygon points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" className="icon-bord"></polygon>
                  <polygon points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25" className="icon-filling"></polygon>
                  <g>
                  <path d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z" className="icon-bord icon-eye"></path>
                  </g>
                </g>
              </svg>
            </figure>
          </div>
          <p>Siguiendo</p>
          <p>Explorar</p>
          <div className="header__verticalLine ">
            <i className="ri-more-2-fill iconButton"></i>
          </div>
        </div>

        <div className="header__center">
          <input type="text"className="inputSearch" placeholder="Buscar" />
          <div className="header__centerLogoContainer">
            <i className="ri-search-line"></i>
          </div>
        </div>

        <div className="header__right">
          <div className="header__rightContainer">
            <i className="header__right-icon ri-vip-crown-line iconButton"></i>
            <i className="header__right-icon ri-inbox-line iconButton"></i>
            <i className="header__right-icon ri-chat-2-line iconButton"></i>

            <div className="header__rightBit iconButton">       
              <svg width="20px" height="20px" version="1.1" viebox="0 0 20 20" x="0px" y="0px" className="icon iconSVG iconSVG__bit">
                <path fillRule="evenodd" d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"></path>
              </svg>
              <h4>Comprar Bits</h4>
            </div>

            <div className="header_avatarUser">
              <Avatar sx={{ width: 30, height: 30 }}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header