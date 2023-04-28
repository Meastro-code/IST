import './App.css';
import Message from './components/message';
import Sample from './components/sample';
import Counter from './components/counter';
import API from './components/api';

function App() {
  return (
    <div className="App">
      <Message />
      <Sample name="Steve" />
      <Counter />
      <API />
    </div>
  );
}

export default App;


