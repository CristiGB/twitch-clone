import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Carrusel from './Carrusel';
import RecoverChannels from './RecoverChannels';
import RecommenCategorys from './RecommendCategorys';
import RecoverCategorys from './RecoverCategorys';
import Footer from './Footer';
import channelsRecov from './data/channel.json';
import categorys from './data/categorys.json'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='layout'>
        <SideBar />
        <div className='layout-main'>
          <Carrusel /> 
            <RecoverChannels link={"Canales en vivo"} title={"que creemos que te gustarán"}
            channels={channelsRecov.slice(0,3)}/>

            <RecommenCategorys link={"Categorías"} title={"que podrían gustarte"}
            categorys={categorys}/>
            <RecoverCategorys />

            <RecoverChannels title={"Lo más visto"}
            channels={channelsRecov.slice(3,6)}/>

            <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
