import React from 'react'
import "./navBar.css"

const navBar = () => {
    return (
        <header>
          <nav className="navbar">
            <div className="logo">
              <a href="#">Estética Mafi</a>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Tratamentos Corporais</a></li>
              <li><a href="#services">Tratamentos Faciais</a></li>
              <li><a href="#about">Sobre Nós</a></li>
              <div className="hero-right">
              <div>
              <span
                href="https://wa.me/5547996277454?text=Olá%20Vim%20através%20do%20site%20EsteticaMariaLuiza.com.br"
                class="hero-get-started"
              >
                <span className="text-whatsaap">Contato</span>
              </span>
            </div>    
            </div>        
            </ul>
          </nav>
        </header>
      );
    }


export default navBar