import { CreateAccountPage, LoginPage, MenuPrincipalPage, ProfileInfoPage, ProductoBusquedaPage, CarritoComprasPage,
  ArmadoPrincipiantesPage,ArmadoConocedoresPage, PaginaCompraPage, ComponentesCompradosPage, HistoriaExtraPage,OurMissionPage,SupportPage, 
  SupportGuiaPage, CommonQuestionsPage,
  ReviewsPage, SubmitRequestPage,GamePage, Historia23Page, InfluencersPage, Historia24Page,} from './components/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<CreateAccountPage />}/>
            <Route path="/historia2" element={<LoginPage />}/>
            <Route path="/historia3" element={<MenuPrincipalPage />}/>
            <Route path="/historia5" element={<ProfileInfoPage />}/>
            <Route path="/historia10" element={<ArmadoPrincipiantesPage />}/>
            <Route path="/historia14" element={<ComponentesCompradosPage />}/>
            <Route path="/historia7" element={<ProductoBusquedaPage />}/>
            <Route path="/historia8" element={<CarritoComprasPage />}/>
            <Route path="/historia15" element={<OurMissionPage />}/>
            <Route path="/historia16" element={<SupportPage />}/>
            <Route path="/historia17" element={<SupportGuiaPage />}/>
            <Route path="/historia18" element={<CommonQuestionsPage />}/>
            <Route path="/historia19" element={<SubmitRequestPage />}/>
            <Route path="/historia20" element={<ReviewsPage />}/>
            <Route path="/historiaExtra" element={<HistoriaExtraPage />}/>
            <Route path="/historia11" element={<GamePage />}/>
            <Route path="/historia13" element={<PaginaCompraPage />}/>
            <Route path="/historia12" element={<ArmadoConocedoresPage />}/>        
            <Route path="/historia24" element={<Historia24Page />}/>
            <Route path="/historia21" element={<InfluencersPage />}/>
            <Route path="/historia23" element={<Historia23Page />}/>


        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
