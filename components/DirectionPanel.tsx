import React from "react";

const DirectionPanel = ({ direction }) => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    direction.name !== undefined ? setName(direction.name) : setName("Null");
  }, [name]);

  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    direction.code !== undefined ? setCode(direction.code) : setName("Null");
  }, [code]);

  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    direction.price !== undefined ? setPrice(direction.price) : setPrice(null);
  }, [price]);

  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    direction.briefDescription !== undefined
      ? setDescription(direction.briefDescription)
      : setDescription("Null");
  }, [description]);

  return (
    <div>
      <style>{``}</style>
      <h1>Что такое {name}?</h1>
      <div>{description}</div>
    </div>
  );
};

export default DirectionPanel;
