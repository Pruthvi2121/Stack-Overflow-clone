
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Question from './Components/Question';
import Layout from './Components/Layout/layout';


function App() {
  
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout><Question/></Layout>}/> 
        <Route path='/jobs' element={<Layout></Layout>}/> 
        <Route path='/docs' element={<Layout></Layout>}/> 
        <Route path='/tags' element={<Layout></Layout>}/> 
        <Route path='/users' element={<Layout></Layout>}/> 
        <Route path='/badges' element={<Layout></Layout>}/> 
        <Route path='/ask' element={<Layout></Layout>}/> 
        <Route path='/inbox' element={<Layout></Layout>}/> 
      </Routes>
    </div>
  );
}

export default App;
