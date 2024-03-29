import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Card from './components/Card';

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Card />
    </div>
  )
}

export default App;