import React from 'react';
import './Channel.css';

function Channel({avatar, name, viewvers, category}) {
  return (
    <div className='channel'>
        <img className="iconChannel" src={avatar} alt="avatar" />  
        <div className="channel__details info">         
            <h4>{name}</h4>
            <p className='subTitle'>{category}</p>
        </div>
        <div className="channel__pointred"></div>
        <p>{viewvers}</p>
        
    </div>
  )
}

export default Channel