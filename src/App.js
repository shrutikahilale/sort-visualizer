import './App.css';
import HomePage from './components/HomePage';
import Visualizer from './components/Visualizer';

function App() {
  const array = [23, 14, 45, 67, 28, 18]
  const heading = 'BUBBLE SORT'

  return (
    <div className="App bg-blue-black">
      {/* <Visualizer heading={heading} array={array} /> */}
      <HomePage />
    </div>
  );
}

export default App;
