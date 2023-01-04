import React from 'react';
import './recoverChannel.css'

function index({link,title, channels}) {
  return (
    <section className='channels__section'>
      <h2 className='sectionTitle'><a href='/'>{link}</a> {title}</h2>
      <div className="container_channels">
        {channels.map(channel =>(
           <article className="channel-wrapper" style={{"--channel-color": channel.color}}>
              <div className="previewBox">
                <div className="shadowRight"></div>
                <div className="shadowLeft"></div>
                <figure className='previewStream'>
                  <div className="envivo">EN VIVO</div>
                  <img src={channel.miniatura} alt="" />
                  <p>{channel.viewver} espectadores</p>
                </figure>
              </div>

              <div className="preview-detail">
                <img className='iconChannel' src={channel.logo} alt="" />

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
          <i class="ri-arrow-down-s-line"></i>
        </div>
      </div>

    </section>
  )
}

export default index