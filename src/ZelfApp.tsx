import {Route, Routes} from 'react-router-dom';
import { AppContextProvider } from './contexts/AppContext';
import { Topbar } from './components/Topbar';
import './App.css';
import { HomePage } from './pages/HomePage';

function ZelfApp() {
  return (
    <AppContextProvider>
        <div>
            <Topbar/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
            </Routes>
        </div>  
    </AppContextProvider>
  );
}

export default ZelfApp;
