import './App.css';
import Message from './components/message';
import Sample from './components/sample';
import Counter from './components/counter';
import API from './components/api';
import ConsMsg from './components/consmsg.js';
import MyMsg from './components/mymsg.js';
// import Server from './components/server.js';
import FunctionalComponent from './components/functioncounter.js';
import ConditionalRendering from './components/conditionalrendering.js';
import Maps from './components/maps.js';


function App() {
  return (
    <div className="App">
      <Message />
      <Sample name="Steve" />
      <Counter />
      <API />
      {/* <Server/> */}
      <ConsMsg />
      <MyMsg />
      <FunctionalComponent />
      <ConditionalRendering />
      <Maps />
    </div>
  );
}

export default App;


