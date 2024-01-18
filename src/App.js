import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ProductPage } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
