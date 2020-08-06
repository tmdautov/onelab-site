import React, { useState, useEffect } from "react";
import DirectionsTape from "./DirectionsTape";
import getDirections from "../../services/directions.service";

const DirectionsContainer = () => {
  const [directions, setDirections] = useState([]);
  useEffect(() => {
    async function fetchDirections() {
      setDirections(await getDirections());
    }
    fetchDirections();
  }, []);
  return (
    <div className="directions-holder" id="directions">
      <style jsx>
        {`
          .directions-holder {
            padding-bottom: 9.55vh;
            width: 100%;
          }
        `}
      </style>
      <DirectionsTape directions={directions} />
    </div>
  );
};

export default DirectionsContainer;
