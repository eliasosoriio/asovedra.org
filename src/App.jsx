import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './components/layout/Header'
import Hero from './components/layout/Hero'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import Home from "./pages/Home"
import News from "./pages/News"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <div className='home-bg py-6 px-3 w-full min-h-screen bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center relative'>
              <Header />
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
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  
  return (
    <div className="overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App
