import "./TripStyles.css";
import TripData from "./TripData";
import router5 from "../Assets/certificates/certificate1.jpeg";
import router6 from "../Assets/certificates/certificate2.jpg";
import router7 from "../Assets/certificates/certificate3.png";
function Trip() {
  return (
    <div className="trip">
      <h1>Certificates</h1>
      <p>
      Certificates are not merely pieces of paper; they are the tangible proof of one's dedication, persistence, and commitment to continuous learning and self-improvement.
      </p>
      <div className="tripcard">
        <TripData
          image={router5}
          heading="Courcera - Google"
          text="I am pleased to announce the successful completion of a Python certification program offered by Google. This certification has equipped me with comprehensive knowledge and practical skills in Python programming, a versatile and widely-used language. I am excited to apply this expertise to tackle real-world challenges and contribute to innovative projects. This achievement reflects my commitment to continuous learning and staying current in the dynamic field of programming. I look forward to leveraging my Python skills to make a meaningful impact"
        />
        <TripData
          image={router6}
          heading="Udemy"
          text="I'm delighted to share that I've successfully completed a Python certification program on Udemy. This certification has equipped me with a strong foundation in Python programming, enabling me to tackle a wide range of coding tasks. I'm eager to put my newfound Python skills to work in real-world scenarios and contribute to innovative projects. This accomplishment underscores my dedication to ongoing learning and staying up-to-date in the dynamic programming field. I look forward to leveraging my Python expertise to make a meaningful impact."
        />
        <TripData
          image={router7}
          heading="HackerRank"
          text="I'm thrilled to announce my successful completion of a Python certification on HackerRank. This certification has sharpened my Python programming abilities, making me proficient in this versatile language. I'm enthusiastic about utilizing my Python knowledge to address practical challenges and contribute to groundbreaking projects. This achievement reflects my unwavering commitment to continuous learning and staying current in the ever-evolving programming landscape. I'm excited to leverage my Python expertise to drive meaningful solutions and innovations."
        />
        
      </div>
    </div>
  );
}

export default Trip;
