import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Hero from './components/layout/Hero'
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

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <div className='home-bg w-full min-h-screen bg-center bg-cover bg-no-repeat'>
              <Hero />
            </div>
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
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  
  return (
    <HelmetProvider>
      <div className="overflow-x-hidden">
        <Router>
          <ScrollToTop />
          <AnimatedRoutes />
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App
