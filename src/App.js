import { LoginPage, Historia2Page, Historia3Page, Historia5Page, Historia15Page, Historia21Page, Historia22Page,Historia23Page
  ,Historia24Page,HistoriaExtraPage } from './components/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/historia2" element={<Historia2Page />}/>
            <Route path="/historia3" element={<Historia3Page />}/>
            <Route path="/historia5" element={<Historia5Page />}/>
            <Route path="/historia15" element={<Historia15Page />}/>
            <Route path="/historia21" element={<Historia21Page />}/>
            <Route path="/historia22" element={<Historia22Page />}/>
            <Route path="/historia23" element={<Historia23Page />}/>
            <Route path="/historia24" element={<Historia24Page />}/>
            <Route path="/historiaExtra" element={<HistoriaExtraPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
