
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage/Landingpage';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Sidebar><Landingpage/></Sidebar>}/> 
      </Routes>
    </div>
  );
}

export default App;
