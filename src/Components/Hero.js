import "./HeroStyles.css";
import resumePDF from '../Assets/Resume.jpg';

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.ptext}</p>
          <button><a className="resume" href={resumePDF} download="Vigneshwaran.jpg">{props.resume}</a></button>
          <br></br>
          <br></br>
          <p>{props.stext}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
