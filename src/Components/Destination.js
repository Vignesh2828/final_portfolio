import DestinationData from "./DestinationData";
import router1 from "../Assets/1.8.webp";
import router2 from "../Assets/1.9.webp";
import router3 from "../Assets/1.3.jpg";
import router4 from "../Assets/1.4.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Why Choose Us? </h1>
      <p>Choose your correct product with us</p>
      <DestinationData
        className="first-des"
        heading="Enterprise routing for small and home offices"
        text="Cisco 900 Series Integrated Services Routers (ISRs) combine WAN,
      switching, security, and advanced connectivity options in a compact,
      fanless platform. Create a highly secure, enterprise-class network
      with a router fit for small and medium-sized businesses."
        img1={router1}
        img2={router2}
      />

      <DestinationData
        className="second-des"
        heading="Enterprise routing for small and home offices"
        text="Cisco 900 Series Integrated Services Routers (ISRs) combine WAN,
      switching, security, and advanced connectivity options in a compact,
      fanless platform. Create a highly secure, enterprise-class network
      with a router fit for small and medium-sized businesses."
        img1={router3}
        img2={router4}
      />
    </div>
  );
};

export default Destination;
