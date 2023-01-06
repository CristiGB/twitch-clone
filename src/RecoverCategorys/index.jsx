import React from 'react';
import tags from '../data/Tags.json';
import './recoverCategory.css'

function index() {
  return (
    <section className="recoveryCategorys_section section">
        {tags.map(tag =>(
            <div className="cardCategory-button">
                <p className="cardCategory-name">{tag.name}</p>
                <figure className="CardCategory-img">
                    <img src={tag.logo} alt="logo section" />
                </figure>
            </div>
        ))}
    </section>
  )
}

export default index