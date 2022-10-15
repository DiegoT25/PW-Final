import { LoginPage, Historia2Page, Historia3Page, Historia5Page, Historia7Page, Historia8Page, Historia10Page, Historia14Page, Historia15Page, Historia16Page, Historia17Page, Historia18Page, Historia20Page, Historia19Page, HistoriaExtraPage } from './components/pages'
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
            <Route path="/historia10" element={<Historia10Page />}/>
            <Route path="/historia14" element={<Historia14Page />}/>
            <Route path="/historia7" element={<Historia7Page />}/>
            <Route path="/historia8" element={<Historia8Page />}/>
            <Route path="/historia15" element={<Historia15Page />}/>
            <Route path="/historia16" element={<Historia16Page />}/>
            <Route path="/historia17" element={<Historia17Page />}/>
            <Route path="/historia18" element={<Historia18Page />}/>
            <Route path="/historia19" element={<Historia19Page />}/>
            <Route path="/historia20" element={<Historia20Page />}/>
            <Route path="/historiaExtra" element={<HistoriaExtraPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
