import About from '../components/About';
import ActionBanner from '../components/ActionBanner';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Results from '../components/Results';

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Features />
      <About />
      <Projects />
      <Banner />
      <Results />
      <ActionBanner />
    </div>
  );
};

export default Home;
