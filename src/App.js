import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUsPage from './pages/AboutUs'
import ContactPage from './pages/ContactPage'
import ResourcesPage from './pages/ResourcesPage'
import HomePage from './pages/HomePage'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='about' element={<AboutUsPage />} />
              <Route path='resources' element={<ResourcesPage />} />
              <Route path='contact' element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App