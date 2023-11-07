import "./TripStyles.css";
import Trip from "./Trip";
import google from "../Assets/certificates/certificate1.jpeg";
// import udemy from "../Assets/certificates/certificate2.jpeg";
// import hr from "../Assets/certificates/certificate3.jpeg";


function TripData(props) {
  return (
    <>
    <div className="t-card">
      <div className="t-image">
        <a href={google}><img src={props.image} alt="image" /></a>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
    </>
  );
}

export default TripData;
