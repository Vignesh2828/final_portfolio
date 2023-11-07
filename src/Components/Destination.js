import DestinationData from "./DestinationData";
import router1 from "../Assets/1.8.webp";
import router2 from "../Assets/1.9.jpg";
import router3 from "../Assets/1.3.png";
import router4 from "../Assets/1.4.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Internship </h1>
      <DestinationData
        className="first-des"
        heading="Netcraft Solutions Pvt Ltd (April - July)"
        text="During my 4-month internship at Netcraft Solutions Pvt. Ltd. from April to July, I had the opportunity to work as a full-stack developer on an exciting project. 
        My primary role was to contribute to the development of a marketplace for network products, connecting providers with customers."
        keys="Keys & Responsibilities : Frontend Development, Backend Development, Database Management, User Authentication and Security, Collaborative Work, Testing and Debugging,
        Performance Optimization, Documentation"
        img1={router1}
        img2={router2}
      />
      <br></br>
      <br></br>
      <DestinationData
        className="second-des"
        heading="Algowizz Trading (August - September)"
        text="During my 2-month internship at Algowizz Trading from August to September, I served as a full-stack developer with a specific focus on developing a trading dashboard. 
        This platform aimed to provide a comprehensive view of ongoing and completed trading activities."
        keys="Keys & Responsibilities : Frontend and UI Development, Backend Development, Data Integration, Linux Server Configuration, Cloud Infrastructure (AWS), Data Security, Testing and Debugging,
        Performance Optimization, Documentation"
        img1={router3}
        img2={router4}
      />
    </div>
  );
};

export default Destination;
