import React from 'react';
import Channel from '../Channel';
import followings from '../data/following.json'
import recommends from '../data/recommend.json'

import './SideBar.css';

function SideBar() {
  return (
    <aside className='sideBar'>
      <div className="sidebar__logo iconButton">
        <i className="ri-upload-line"></i>
      </div>

      <h2>Para ti</h2>
      <div className="sideBar__following">
        <h4 className='sidebar__title'>CANALES QUE SIGUES</h4>
        <i className="ri-arrow-up-down-line change_order"></i>
      </div>
      {followings.map(follow=>(
        <Channel avatar={follow.logo} 
        name={follow.Channel} viewvers={follow.viewver} category={follow.Category}/>
      ))}
      <p className='sidebar__topShowmore'>Mostrar más</p>

      <h4 className='sidebar__title'>CANALES RECOMENDADOS</h4>
      {recommends.map(recommend =>(
        <Channel avatar={recommend.logo} 
        name={recommend.Channel} viewvers={recommend.viewver} category={recommend.Category}/>
      ))}

      <p className='sidebar__topShowmore'>Mostrar más</p>
    </aside>
  )
}

export default SideBar;