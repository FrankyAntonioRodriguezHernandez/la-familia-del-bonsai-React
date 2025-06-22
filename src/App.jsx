import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import ServicesFull from './components/ServicesFull';
import ScrollToTop from './hooks/ScrollToTop'; 
import EventsFull from './components/EventsFull';

import Home from './components/Home';

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
        </Routes>
        
      </div>
    </Router>
  );
}


export default App;