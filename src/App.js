import { LoginPage, Historia2Page, Historia3Page, Historia5Page, Historia15Page, HistoriaExtraPage } from './components/pages'
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
            <Route path="/historiaExtra" element={<HistoriaExtraPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
