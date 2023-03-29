
import './App.css';
import { Route ,Routes , BrowserRouter } from 'react-router-dom';
import Pageone from './gesifan/Pageone';
import PageoneDetail from './gesifan/PageoneDetail';

function App() {
  return (
    <div className="App">
      <PageoneDetail></PageoneDetail>
    </div>
  );
}

export default App;
