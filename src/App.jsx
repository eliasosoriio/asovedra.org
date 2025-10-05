import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import Hero from './components/layout/Hero'
import ScrollToTop from './components/ScrollToTop'
import Home from "./pages/Home"
import News from "./pages/News"
import About from "./pages/About"
import Services from "./pages/Services"

function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <div className='mx-auto my-0 py-8 px-3 max-w-lvw w-full min-h-lvh hero-bg bg-center bg-cover bg-no-repeat flex flex-col items-center justify-between'>
              <Header />
              <Hero />
            </div>
            <Home />
          </>
        } />
        <Route path="/noticias" element={
          <>
            <div className='py-4 px-3 bg-white shadow-sm'>
              <Header />
            </div>
            <News />
          </>
        } />
        <Route path="/sobre-nosotros" element={
          <>
            <div className='py-4 px-3 bg-white shadow-sm'>
              <Header />
            </div>
            <About />
          </>
        } />
        <Route path="/servicios" element={
          <>
            <div className='py-4 px-3 bg-white shadow-sm'>
              <Header />
            </div>
            <Services />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
