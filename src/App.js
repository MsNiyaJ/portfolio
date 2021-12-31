import HeroSection from './HeroSection';
import About from './About';
import Projects from './projects/Projects';

// http://zoyothemes.com/queue/layout/index-parallax.html#resume
// https://www.thinkful.com/blog/how-to-get-a-job-as-a-front-end-developer/
const App = () => {
  return (
    <div id="home" className="App">
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
};

export default App;
