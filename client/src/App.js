import logo from './logo.svg';
import "./App.scss"
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Path from './components/Routes/Path';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Path/>
    </BrowserRouter>
    </div>
  );
}

export default App;
