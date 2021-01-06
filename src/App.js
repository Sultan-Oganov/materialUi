import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Tabs from './component/Tabs/Tabs'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Tabs />
      </div>
    </BrowserRouter>

  );
}

export default App;
