import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import { Header } from './components/layout/Header'
import Preloader from './components/layout/Preloader'
import SocialDock from './components/layout/SocialDock'
import CustomCursor from './components/layout/CustomCursor'
import CookieManager from './components/consent/CookieManager'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import Home from "./pages/Home"
import News from "./pages/News"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import AvisoLegal from "./pages/AvisoLegal"
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad"
import PoliticaCookies from "./pages/PoliticaCookies"
import Accesibilidad from "./pages/Accesibilidad"
import PlanIgualdad from "./pages/PlanIgualdad"
import Estatutos from "./pages/Estatutos"
import DeclaracionValores from "./pages/DeclaracionValores"
import PortalLogin from "./pages/PortalLogin"
import Portal from "./pages/Portal"
import EmergenciaVenezuela from "./pages/EmergenciaVenezuela"
import Colabora from "./pages/Colabora"
import Residencia2027 from "./pages/Residencia2027"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
            <Footer />
          </PageTransition>
        } />
        <Route path="/noticias" element={
          <PageTransition>
            <News />
            <Footer />
          </PageTransition>
        } />
        <Route path="/emergencia-terremoto-venezuela" element={
          <PageTransition>
            <EmergenciaVenezuela />
            <Footer />
          </PageTransition>
        } />
        <Route path="/colabora" element={
          <PageTransition>
            <Colabora />
            <Footer />
          </PageTransition>
        } />
        <Route path="/residencia-2027" element={
          <PageTransition>
            <Residencia2027 />
            <Footer />
          </PageTransition>
        } />
        <Route path="/sobre-nosotros" element={
          <PageTransition>
            <About />
            <Footer />
          </PageTransition>
        } />
        <Route path="/servicios" element={
          <PageTransition>
            <Services />
            <Footer />
          </PageTransition>
        } />
        <Route path="/contacto" element={
          <PageTransition>
            <Contact />
            <Footer />
          </PageTransition>
        } />
        <Route path="/aviso-legal" element={
          <PageTransition>
            <AvisoLegal />
            <Footer />
          </PageTransition>
        } />
        <Route path="/politica-privacidad" element={
          <PageTransition>
            <PoliticaPrivacidad />
            <Footer />
          </PageTransition>
        } />
        <Route path="/politica-cookies" element={
          <PageTransition>
            <PoliticaCookies />
            <Footer />
          </PageTransition>
        } />
        <Route path="/accesibilidad" element={
          <PageTransition>
            <Accesibilidad />
            <Footer />
          </PageTransition>
        } />
        <Route path="/plan-de-igualdad" element={
          <PageTransition>
            <PlanIgualdad />
            <Footer />
          </PageTransition>
        } />
        <Route path="/estatutos" element={
          <PageTransition>
            <Estatutos />
            <Footer />
          </PageTransition>
        } />
        <Route path="/declaracion-valores" element={
          <PageTransition>
            <DeclaracionValores />
            <Footer />
          </PageTransition>
        } />
        <Route path="/portal/login" element={
          <PageTransition>
            <PortalLogin />
            <Footer />
          </PageTransition>
        } />
        <Route path="/portal" element={
          <PageTransition>
            <Portal />
            <Footer />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {

  return (
    <AuthProvider>
      <div className="overflow-x-clip">
        <Router>
          <Preloader />
          <Header />
          <SocialDock />
          <CustomCursor />
          <CookieManager />
          <ScrollToTop />
          <AnimatedRoutes />
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
