import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Especialidades } from './pages/Especialidades/Especialidades'
import { Estudios } from './pages/Estudios/Estudios'
import { Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/especialidades' element={<Especialidades />} />
          <Route path='/estudios' element={<Estudios />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
