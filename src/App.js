import './App.css';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MarqueeContainer from './components/Marquee';
import Navbar from './components/Navbar';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section8 from './components/Section8';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeContainer />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Explore />
      <Section8 />
      <Footer />
    </>
  );
}

export default App;
