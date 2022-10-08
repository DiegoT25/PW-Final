import { LoginPage, Historia2Page } from './components/pages'
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
