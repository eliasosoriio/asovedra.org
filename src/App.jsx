import { Header } from './components/layout/Header'
import Home from "./pages/Home"

function App() {
  
  return (
    <>
      <div className='mx-auto my-0 py-8 px-3 w-lvw min-h-lvh bg-[url("https://asovedra.org/assets/asovedra_hero.jpg")] bg-center bg-cover bg-no-repeat'>
        <Header />
      </div>
      <Home />
    </>
  )
}

export default App
