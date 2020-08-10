import React from "react";

const DirectionPanel = ({ direction }) => {
  return (
    <div className="panel">
      <style>
      {`
        .panel {
          margin-top: 1%;
        }
        .h1 {
          margin-bottom: 5%;
        }

        p {
          padding: 5%;
          text-align: left;
        }
      `}
      </style>
      <h1>Что такое {direction.title}?</h1>
      <p>{direction.description}</p>
    </div>
  );
};

export default DirectionPanel;
