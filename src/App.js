import './App.css';
import ClassCatList from './components/ClassCatlist';
import FuncCatList from './components/FuncCatList';
import catsData from './data/catsData';

function App() {
  return (
    <div className="App">
        <FuncCatList cats={catsData}/>
        <ClassCatList cats={catsData}/>
    </div>
  );
}

export default App;
