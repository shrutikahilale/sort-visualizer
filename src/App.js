import './App.css';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import Visualizer from './components/Visualizer';

import { Route, Routes } from 'react-router-dom'

function App() {
  const array = [23, 14, 45, 67, 28, 18]
  const heading = 'BUBBLE SORT'

  return (
    // <div className="App bg-blue-black">
    //   <Visualizer heading={heading} array={array} />
    //   {/* <HomePage /> */}
    // </div>

    <div className="App bg-blue-black">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Visualizer' element={<Visualizer heading={heading} array={array} />} />
      </Routes>
    </div>
  );
}

export default App;
