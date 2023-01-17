import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Details from './components/Details'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
      
    </div>
  );
}

export default App;
