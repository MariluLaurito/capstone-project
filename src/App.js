
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
import Highlights from './Components/Highlights';
import Main from './Components/Main';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
     <>
      <Header />
      <Main />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
     </>
    </div>
  );
}

export default App;
