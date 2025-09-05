import { Header } from './components/layout/Header'
import Hero from './components/layout/Hero'
import Home from "./pages/Home"


function App() {
  
  return (
    <>
      <div className='mx-auto my-0 py-8 px-3 max-w-lvw w-full min-h-lvh hero-bg bg-center bg-cover bg-no-repeat flex flex-col items-center justify-between'>
        <Header />
        <Hero />
      </div>
      <Home />
    </>
  )
}

export default App
