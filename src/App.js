import About from "./components/About/About";
import Feature from "./components/Features/Feature";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  AOS.init();
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
