import Navbar from './navbar/Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';

// http://zoyothemes.com/queue/layout/index-parallax.html#resume
// https://www.thinkful.com/blog/how-to-get-a-job-as-a-front-end-developer/
const App = () => {
  return (
    <div id="home" className="bg-slate-50 ">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};

export default App;
