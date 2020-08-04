import React from "react";
import Wrapper from "./Wrapper";
import DirectionPanel from "./DirectionPanel";

function Direction({ direction }) {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    direction.name !== undefined ? setName(direction.name) : setName("null");
  }, [name]);

  const [code, setCode] = React.useState(0);

  React.useEffect(() => {
    direction.code !== undefined ? setCode(direction.code) : setName("Null");
  }, [code]);

  return (
    <div className="direction">
      <style jsx>
        {`
          .direction {
            padding: 3%;
          }

          .direction-container {
            text-align: center;
            justify-content: middle;
          }

          h1 {
            font-weight: 800;
            font-size: 2.3rem;
            margin-bottom: 1.55vh;
          }
        `}
      </style>
      <Wrapper>
        <div className="direction-container">
          <h1>{name}</h1>
          <label>Код направления: {code}</label>
          <DirectionPanel direction={direction} />
        </div>
      </Wrapper>
    </div>
  );
}

export default Direction;
