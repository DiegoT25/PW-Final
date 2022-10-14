import { LoginPage, Historia2Page, Historia3Page, Historia5Page,Historia15Page,Historia13Page,Historia12Page } from './components/pages'
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
            <Route path="/historia13" element={<Historia13Page />}/>
            <Route path="/historia12" element={<Historia12Page />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
