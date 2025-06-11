import './App.css';
import home from './pages/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={ home }/>
      </Routes>
    </div>
  );
}

export default App;
