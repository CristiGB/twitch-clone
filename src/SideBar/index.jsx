import { useEffect,useState, useRef } from 'react';
import Channel from '../Channel';
import followings from '../data/following.json'
import recommends from '../data/recommend.json'

import './SideBar.css';


function SideBar() {
  const [fullSizeBar, setfullSizeBar] = useState(true)
  const minimice = useRef(false)
  
  const verificarSize =(size)=>{
    const sidebar = document.querySelector('.sideBar')
    const logosideBar = document.querySelector('.sidebar__logo')
    if (size) {
      sidebar.style.width = "5rem"
      logosideBar.classList.remove('logosideFull')
    }
    else {
      sidebar.style.width = "24rem"   
      logosideBar.classList.add('logosideFull')
    }
    setfullSizeBar(!size)
  }

  const minimizarSidebar =()=>{
    verificarSize(fullSizeBar)    
    minimice.current =  !minimice.current
    console.log("minimice", minimice.current )
  }

  const cambiodeTamaño =()=>{ 
    if(!minimice.current){
      window.innerWidth <= 1062 ?
        verificarSize(true)
      :
        verificarSize(false)
        
      console.log("minimice", minimice.current )
    }
  }

  useEffect(() => {
    cambiodeTamaño()
    window.addEventListener('resize', cambiodeTamaño);
    return()=> {
      window.removeEventListener('resize', cambiodeTamaño)
    }
  },[])
  return (
    <aside className='sideBar'>
      <div className="sidebar__logo logosideFull iconButton" onClick={minimizarSidebar}>
        <i className="ri-upload-line"></i>
      </div>
      
        {!fullSizeBar && <i className="ri-heart-line icon-sidebar"></i>}
        {fullSizeBar && <h2>Para ti</h2>}
        {fullSizeBar && 
        <div className="sideBar__following">
            <h4 className='sidebar__title'>CANALES QUE SIGUES</h4>
            <i className="ri-arrow-up-down-line change_order"></i>
        </div>
        }
      
      {followings.map(follow=>(
        <Channel avatar={follow.logo} 
        name={follow.Channel} viewvers={follow.viewver} category={follow.Category}/>
      ))}
      {fullSizeBar && <p className='sidebar__topShowmore'>Mostrar más</p>}

      {!fullSizeBar ? <i className="ri-vidicon-line icon-sidebar"></i> : <h4 className='sidebar__title'>CANALES RECOMENDADOS</h4>}
      {recommends.map(recommend =>(
        <Channel avatar={recommend.logo} 
        name={recommend.Channel} viewvers={recommend.viewver} category={recommend.Category}/>
      ))}

      {fullSizeBar && <p className='sidebar__topShowmore'>Mostrar más</p>}
    </aside>
  )
}

export default SideBar;