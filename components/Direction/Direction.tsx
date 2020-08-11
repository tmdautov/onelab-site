import React from 'react';
import Wrapper from '../Wrapper';
import DirectionPanel from './DirectionPanel';

function Direction({ direction }) {
  return (
    <div className="direction">
      <style jsx>
        {`
          .direction {
            padding: 3%;
            min-height: 49.5vh;
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
          @media (max-width: 1024px) {
            .direction {
              margin-top: 15vh;
            }
          }
        `}
      </style>
      <Wrapper>
        <div className="direction-container">
          <h1>{direction.title}</h1>
          <DirectionPanel direction={direction} />
        </div>
      </Wrapper>
    </div>
  );
}

export default Direction;
