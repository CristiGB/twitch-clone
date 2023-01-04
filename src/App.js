import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Carrusel from './Carrusel';
import RecoverChannels from './RecoverChannels';
import channelsRecov from './data/channel.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='layout'>
        <SideBar />
        <main className='layout-main'>
          <Carrusel /> 
          <RecoverChannels link={"Canales en vivo"} title={"que creemos que te gustarán"}
            channels={channelsRecov.slice(0,3)}/>
        </main>
      </div>
    </div>
  );
}

export default App;
