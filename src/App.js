import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/common/heading/Header';
import Home from './components/home/Home'
// import Social from './components/common/social/Social';
import About from './components/about/About';
import Services from './components/services/Services';
import Portofolio from './components/portofolio/Portofolio';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <>  
      <Router>
        <Header/>
        {/* <Social/> */}
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/portofolio" element={<Portofolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
