import { useEffect,useState } from 'react';
import Channel from '../Channel';
import followings from '../data/following.json'
import recommends from '../data/recommend.json'

import './SideBar.css';

function SideBar() {
  const [fullSizeBar, setfullSizeBar] = useState(true)

  const cambiodeTamaño =()=>{
    if(window.innerWidth <= 1062){
      setfullSizeBar(false)
    }else{
      setfullSizeBar(true)
    }
  }

  const minimizarSidebar =()=>{
    const sidebar = document.querySelector('.sideBar')
    const logosideBar = document.querySelector('.sidebar__logo')
    if (fullSizeBar) {
      sidebar.style.width = "5rem"
      logosideBar.classList.remove('logosideFull')
    }
    else {
      sidebar.style.width = "24rem"   
      logosideBar.classList.add('logosideFull')
      }
    setfullSizeBar(!fullSizeBar)
  }

  useEffect(() => {
    window.addEventListener('resize', cambiodeTamaño);
    return()=> {
      window.removeEventListener('resize', cambiodeTamaño)
    }
  },[])
  return (
    <aside className='sideBar'>
      <div className="sidebar__logo iconButton" onClick={minimizarSidebar}>
        <i className="ri-upload-line"></i>
      </div>
      
        {!fullSizeBar && <i class="ri-heart-line icon-sidebar"></i>}
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

      {!fullSizeBar ? <i class="ri-vidicon-line icon-sidebar"></i> : <h4 className='sidebar__title'>CANALES RECOMENDADOS</h4>}
      {recommends.map(recommend =>(
        <Channel avatar={recommend.logo} 
        name={recommend.Channel} viewvers={recommend.viewver} category={recommend.Category}/>
      ))}

      {fullSizeBar && <p className='sidebar__topShowmore'>Mostrar más</p>}
    </aside>
  )
}

export default SideBar;