import { LoginPage, Historia2 } from './components/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/historia2" element={<Historia2 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
