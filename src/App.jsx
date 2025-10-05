import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './components/layout/Header'
import Hero from './components/layout/Hero'
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
          </PageTransition>
        } />
        <Route path="/noticias" element={
          <PageTransition>
            <div className='py-6 px-3 nav-bg'>
              <Header />
            </div>
            <News />
          </PageTransition>
        } />
        <Route path="/sobre-nosotros" element={
          <PageTransition>
            <div className='py-6 px-3 nav-bg'>
              <Header />
            </div>
            <About />
          </PageTransition>
        } />
        <Route path="/servicios" element={
          <PageTransition>
            <div className='py-6 px-3 nav-bg'>
              <Header />
            </div>
            <Services />
          </PageTransition>
        } />
        <Route path="/contacto" element={
          <PageTransition>
            <div className='py-6 px-3 nav-bg'>
              <Header />
            </div>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
