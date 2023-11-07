import Fiveg from "../Components/5g";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import home_image from '../Assets/home.jpg';

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg= {home_image}
        title="Welcome To My Portfolio"
        ptext="Start Explore My Page"
      />
      <Destination />
      <Fiveg />
      <Trip />

      <Footer />
    </>
  );
}

export default Home;
