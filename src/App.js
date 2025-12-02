import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageBanner from './components/ImageBanner';
import Hero from './components/Hero';
import MostLoved from './components/MostLoved';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

function App() {
  return (

    <Router>
      <ScrollToTop />
      <Header />
      <ImageBanner />
      <main className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MostLoved />
                <Service />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/" element={<Hero />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
