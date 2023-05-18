import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MovieContextProvider } from './context/movieProvider'

import Details from './pages/details'
import Home from './pages/home'
import NavbarComponent from './components/Navbar'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <MovieContextProvider value='soy un valor de contexto'>
      <div className="app">
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MovieContextProvider>
  )
}