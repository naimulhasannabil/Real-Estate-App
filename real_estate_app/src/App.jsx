import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'



function App() {
  

  return (
    <Router>
      <div className='min-h-screen bg-gray-50'>
         <Header />
         <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
         </main>
         <Footer />
      </div>
    </Router>
  )
}

export default App
