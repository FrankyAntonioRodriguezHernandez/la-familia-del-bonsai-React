import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import ServicesFull from './pages/services/ServicesFull';
import ScrollToTop from './hooks/ScrollToTop'; 
import Footer from './components/Footer';
import PrivacyPolicy from './pages/legalTerms/PrivacyPolicy';
import GalleryPlaces from './pages/gallery/GalleryPlaces';
import Tienda from './pages/Tienda/Tienda';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesFull />} />
          <Route path="/store" element={<Tienda />} />
          <Route path="/gallery" element={<GalleryPlaces />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}


export default App;
