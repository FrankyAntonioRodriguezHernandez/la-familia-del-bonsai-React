import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import ServicesFull from './pages/services/ServicesFull';
import ScrollToTop from './hooks/ScrollToTop'; 
import EventsFull from './pages/events/EventsFull';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/legalTerms/PrivacyPolicy';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesFull />} />
          <Route path="/events" element={<EventsFull />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}


export default App;