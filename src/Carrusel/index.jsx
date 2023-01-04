import {useState, useEffect} from 'react';
import "./carrusel.css";
import carrousel from '../data/carrousel.json';


function Carrousel() {
    const [myCarrousel, setMyCarrousel] = useState([...carrousel]);
    const totalStreams = carrousel.length

    const siguienteStream = () =>{
        let temp=[...myCarrousel]
        temp.shift()
        temp.push(myCarrousel[0])
        setMyCarrousel([...temp])
    }

    const anteriorStream = () =>{
        let temp = [...myCarrousel]
        temp.pop()
        temp.unshift(myCarrousel[totalStreams-1])
        setMyCarrousel(temp)
    }

    useEffect(() => {
       
    },[])

  return (
    <div className='carrusel'>
        <div className="carrusel_wrapper">
            <div className="carrousel-previous arrow iconButton" onClick={anteriorStream}>
                <i className="ri-arrow-left-s-line"></i>
            </div>

            <div className="carrousel_container">
                {carrousel.map(stream =>(
                    <div className={`carrousel__item carrousel__item-${myCarrousel.indexOf(stream)}
                                    ${myCarrousel.indexOf(stream) !== 2 ? 'streamCarrousel_noshow': 'showStream'}`}>
                        
                        <div className="video_container">
                            <div className="shadowTop"></div>
                            <div className="shadowBttom"></div>
                            <div className="envivo">EN VIVO</div>
                            <a href={stream.streamUrl}>
                               {myCarrousel.indexOf(stream) !==2 ?
                                <img src={`./multimedia/imgs/${stream.miniatura}`} alt='minuatura carrousel'/> :
                                <video controls loop className='videoStream'>
                                    <source src={`./multimedia/videos/${stream.stream}`} type='video/mp4'/>
                                </video>
                                }
                            </a>
                        </div>
                        
                        <div className="stream__detail">
                            <div className="metadata">
                                <img src={stream.logo} alt="" className="iconChannel" />
                                <div className="info">
                                    <p className="channel_name">{stream.Channel}</p>
                                    <p className="channel_category">{stream.Category}</p>
                                    <p>{stream.viewver} espectadores</p>
                                </div>
                            </div>
                            <div className="tags">
                                {stream.tags.map(tag =>(
                                    <p>{tag}</p>
                                ))}
                            </div>
                            <p className="description">{stream.description}</p>
                        </div>
                    </div>
                
                ))}
            </div>
            <div className="carrousel-next arrow iconButton" onClick={siguienteStream}>
                <i className="ri-arrow-right-s-line"></i>
            </div>
        </div>
    </div>
  )
}

export default Carrousel