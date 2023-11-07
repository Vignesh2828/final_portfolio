import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ContactForm from '../Components/contact_form';
import contact_home from '../Assets/contact_home.jpg';

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="contact"
        heroImg={contact_home}
        title="Lets Contact Me"
        ptext="Scroll the page down"
        stext={
          <>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i>
            <i className="fa-solid fa-angles-down fa-bounce"></i> {/* Add the new icon here */}
          </>
        }
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
