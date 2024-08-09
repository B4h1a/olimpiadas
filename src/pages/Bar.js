import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './bar.css';
import { FaHouseChimney, FaUserGraduate, FaMedal } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";

function Bar() {
  const location = useLocation(); // Hook para obter a URL atual
  const [isSportsOpen, setIsSportsOpen] = useState(false); // Estado para o submenu de esportes

  // Função para determinar se o item é o ativo
  const isActive = (path) => location.pathname === path;

  return (
    <div className="menu-lateral">
      <nav>
        <div className="btn-expandir">
          <i className="bi bi-list"></i>
        </div>
        <div className="btn-fechar">
          <i className="bi bi-x"></i>
        </div>
        <ul>
          <li className={`item-menu ${isActive('/') ? 'ativo' : ''}`}>
            <a href="/">
              <span className="icon"><FaHouseChimney /></span>
              <span className="txt-link">Home</span>
            </a>
          </li>
          <li className={`item-menu ${isActive('/salas') ? 'ativo' : ''}`}>
            <a href="/salas">
              <span className="icon"><IoSchoolSharp /></span>
              <span className="txt-link">Salas</span>
            </a>
          </li>
          <li className={`item-menu ${isActive('/sobre') ? 'ativo' : ''}`}>
            <a href="/sobre">
              <span className="icon"><FaUserGraduate /></span>
              <span className="txt-link">Sobre</span>
              
            </a>
          </li>
          <li className={`item-menu ${isActive('/esporte') ? 'ativo' : ''}`} onClick={() => setIsSportsOpen(!isSportsOpen)}>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              <span className="icon"><FaMedal /></span>
              <span className="txt-link">Esportes</span>
            </a>
            <ul className={`submenu ${isSportsOpen ? 'open' : ''}`}>
              {['Futsal', 'Handebol', 'Vôlei', 'Queimada', 'Basquete', 'Futmesa', 'Tênis/Mesa', 'Atletismo'].map((sport, index) => (
                <li key={index}><a href={`/${sport.toLowerCase()}`}>{sport}</a></li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Bar;
