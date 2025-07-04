import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'



function App() {
  

  return (
    <Router>
      <div className='min-h-screen bg-gray-50'>
         <Header />
         <Footer />
      </div>
    </Router>
  )
}

export default App
