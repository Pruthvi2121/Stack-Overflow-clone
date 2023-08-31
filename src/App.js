
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Question from './Components/Question';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Sidebar><Question/></Sidebar>}/> 
      </Routes>
    </div>
  );
}

export default App;
