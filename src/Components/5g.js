import "./5gStyles.css";
function Fiveg() {
  return (
    <div className="box">
      <div className="text-section">
        <h1 className="fiveg-title">Intro To 5G</h1>
        <br></br>
        <p className="fiveg-content">
          5G wireless technology is meant to deliver higher multi-Gbps peak data
          speeds, ultra low latency, more reliability, massive network capacity,
          increased availability, and a more uniform user experience to more
          users. Higher performance and improved efficiency empower new user
          experiences and connects new industries Radio technologies have
          evidenced a rapid and multidirectional evolution with the launch of
          the analogue cellular systems in 1980s. Thereafter, digital wireless
          communication systems are consistently on a mission to fulfil the
          growing need of human beings (1G, …4G, or now 5G).
        </p>
      </div>
      <div className="video-section">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iQeaK0NGMnA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Fiveg;
