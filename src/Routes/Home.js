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
        resume="Download Resume"
        stext={
          <>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i> {/* Add the new icon here */}
          </>
        }
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
