import React from 'react';
import './recomCateg.css'

function index({link,title, categorys}) {
  return (
    <section className='recommendCategory__section section'>
      <h2 className='sectionTitle'><a href='/'>{link}</a> {title}</h2>
      <div className="card-container container_categorys">
      {categorys.map(category =>(
           <article className="category-wrapper" style={{"--card-color": "#9147ff"}}>
              <div className="cardBox">
                  <div className="shadowRight"></div>
                  <div className="shadowLeft"></div>
                  <figure className='Category-card-image'>
                    <img src={category.image} alt="" />
                  </figure>
                </div>
                <div className="card-detail">

                  <div className="info-wrapper">
                    <div className="info">
                      <p>{category.name}</p>
                      <p className='card-viewers'>{category.viewers} espectadores</p>
                    </div>
                    <div className="tags">
                        {category.tags.map( tag=>(
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
    </section>
  )
}

export default index