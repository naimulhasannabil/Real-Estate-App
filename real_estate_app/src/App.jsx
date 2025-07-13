import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import PropertyDetailsPage from './pages/PropertyDetailsPage'
import AgentsPage from './pages/AgentsPage'
import ContactPage from './pages/ContactPage'


function App() {
  

  return (
    <Router>
      <div className='min-h-screen bg-gray-50'>
         <Header />
         <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/properties' element={<PropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path='agents' element={<AgentsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
         </main>
         <Footer />
      </div>
    </Router>
  )
}

export default App;
