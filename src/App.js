import './App.css';
import Visualizer from './components/Visualizer';

function App() {
  const array = [23,14, 45, 67,  28, 18]
  return (
    <div className="App App-header">
      <Visualizer heading={'BUBBLE SORT'} array={array} />
    </div>
  );
}

export default App;
