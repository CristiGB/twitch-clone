import React from 'react';
import './recoverChannel.css'

function index({link,title, channels}) {
  return (
    <section className='channels__section section'>
      <h2 className='sectionTitle'><a href='/'>{link}</a> {title}</h2>
      <div className="card-container container_channels">
        {channels.map(channel =>(
           <article className="channel-wrapper" style={{"--card-color": channel.color}}>
              <div className="cardBox">
                <div className="shadowRight"></div>
                <div className="shadowLeft"></div>
                <figure className='previewStream'>
                  <div className="envivo">EN VIVO</div>
                  <a href={channel.streamUrl}>
                    <img src={`./multimedia/imgs/${channel.miniatura}`} alt="" />
                  </a>
                  <p>{channel.viewver} espectadores</p>
                </figure>
              </div>

              <div className="card-detail">
                <img className='iconChannel' src={`./multimedia/imgs/profile/${channel.logo}`} alt="" />

                  <div className="info">
                    <p>{channel.NameStream}</p>
                    <p>{channel.Channel}</p>
                    <p>{channel.Category}</p>

                    <div className="tags">
                      {channel.tags.map( tag=>(
                        <p>{tag}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="options-channel">
                    <i className="ri-more-2-fill iconButton"></i>
                  </div>
                        
                </div>
         </article>
        ))}
       
      </div>

      <div className="watchMore-Wrapper">
        <div className="watchMore iconButton">
          <p>Ver más </p>
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>

    </section>
  )
}

export default index