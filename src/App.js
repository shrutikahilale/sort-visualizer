import './App.css';
import HomePage from './components/HomePage';
import SortPage from './components/SortPage';

import { Route, Routes } from 'react-router-dom'
import Algorithm from './components/Algorithm';

function App() {
  return (
    <div className="App bg-blue-black">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SortPage' element={<SortPage />} />
        <Route path='/Algorithm' element={<Algorithm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
