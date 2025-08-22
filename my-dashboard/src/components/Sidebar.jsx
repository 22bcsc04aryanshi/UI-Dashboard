import React from "react";
import "../styles/sidebar.css";

function Sidebar({ activeScreen, setActiveScreen }) {
  return (
    
    <div className="sidebar">
      
      <ul className="sidebar-menu">
        <li
          className={activeScreen === "cards1" ? "active" : ""}
          onClick={() => setActiveScreen("cards1")}
        >
          Cards 1
        </li>
        <li
          className={activeScreen === "cards2" ? "active" : ""}
          onClick={() => setActiveScreen("cards2")}
        >
          Cards 2
        </li>
        
      </ul>
    </div>
    
  );
}

export default Sidebar;
