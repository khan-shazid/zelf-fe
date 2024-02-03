import {Route, Routes} from 'react-router-dom';
import './App.css';
import ZelfApp from './ZelfApp';

function App() {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<ZelfApp/>}/>
            <Route path={'/login'} element={<p>login</p>}/>
        </Routes>
    </div>
    
  );
}

export default App;
