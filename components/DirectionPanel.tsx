import React from "react";

const DirectionPanel = ({ product }) => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    product.name !== undefined ? setName(product.name) : setName("Null");
  }, [name]);

  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    product.code !== undefined ? setCode(product.code) : setName("Null");
  }, [code]);

  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    product.price !== undefined ? setPrice(product.price) : setPrice(null);
  }, [price]);

  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    product.briefDescription !== undefined
      ? setDescription(product.briefDescription)
      : setDescription("Null");
  }, [description]);

  return (
    <div>
      <style>
        {`

                `}
      </style>
      <h1>Что такое {name}?</h1>
      <div>{description}</div>
    </div>
  );
};

export default DirectionPanel;
