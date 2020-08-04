import React from "react";

const DirectionPanel = ({ direction }) => {
  return (
    <div>
      <style>{``}</style>
      <h1>Что такое {direction.title}?</h1>
      <div>{direction.description}</div>
    </div>
  );
};

export default DirectionPanel;
