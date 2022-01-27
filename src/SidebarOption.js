import React from 'react';
import "./SidebarOption.css"

function SidebarOption({title, Icon}) {
  return <div>
      <div className="sidebarOption">
          {Icon && <Icon className="sidebarOption__icon" />}
          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
      
  </div>;
}

export default SidebarOption;
