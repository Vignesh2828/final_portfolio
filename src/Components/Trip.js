import "./TripStyles.css";
import TripData from "./TripData";
import router5 from "../Assets/1.10.png";
import router6 from "../Assets/1.10.png";
import router7 from "../Assets/1.10.png";
function Trip() {
  return (
    <div className="trip">
      <h1>Popular Startups</h1>
      <p>
        Nature is the ultimate source of our living. Both living and non-living
        things include nature, and everyone is interdependent, which helps
        maintain the ecosystem.
      </p>
      <div className="tripcard">
        <TripData
          image={router5}
          heading="Nature"
          text="The Earth we live in abounds with wonders, mysteries and miracles. Out of these, the most spectacular, spontaneous and splendid is what we call “Nature”. Mother Nature with unending powers to protect life when it should or uproot life if it must. The given paragraphs will give us a better idea of the diverse elements and forms found in nature."
        />
        <TripData
          image={router6}
          heading="Nature"
          text="The Earth we live in abounds with wonders, mysteries and miracles. Out of these, the most spectacular, spontaneous and splendid is what we call “Nature”. Mother Nature with unending powers to protect life when it should or uproot life if it must. The given paragraphs will give us a better idea of the diverse elements and forms found in nature."
        />
        <TripData
          image={router7}
          heading="Nature"
          text="The Earth we live in abounds with wonders, mysteries and miracles. Out of these, the most spectacular, spontaneous and splendid is what we call “Nature”. Mother Nature with unending powers to protect life when it should or uproot life if it must. The given paragraphs will give us a better idea of the diverse elements and forms found in nature."
        />
      </div>
    </div>
  );
}

export default Trip;
