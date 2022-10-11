import { LoginPage, Historia2Page, Historia3Page, Historia5Page, Historia10Page, Historia14Page } from './components/pages'
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
