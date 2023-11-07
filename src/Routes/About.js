import Fiveg from "../Components/5g";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import ProfileInfo from '../Components/Portfolio_info';
import home_image from '../Assets/about_home.jpg';

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={home_image}
        title="Lets know about me"
        ptext="Scroll the page down"
        stext={
          <>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i> {/* Add the new icon here */}
          </>
        }
      />
      <ProfileInfo />
      <Footer />
    </>
  );
}

export default About;
