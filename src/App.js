import HeroSection from './HeroSection';
import About from './About';
import Projects from './projects/Projects';
import Contact from './Contact';
import Footer from './Footer';

// Design: http://zoyothemes.com/queue/layout/index-parallax.html#resume
// https://www.thinkful.com/blog/how-to-get-a-job-as-a-front-end-developer/
const App = () => {
  return (
    <div id="home" className="App">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
