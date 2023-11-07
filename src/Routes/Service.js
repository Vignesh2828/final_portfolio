import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Skills from '../Components/skill_page';
import skill_page from '../Assets/skills_page.jpg';
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="service"
        heroImg={skill_page}
        title="I Listed My Some Skills"
        ptext="Scroll the page down"
        stext={
          <>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i> {/* Add the new icon here */}
          </>
        }
      />
      <Skills />
      <Footer />
    </>
  );
}

export default Service;
