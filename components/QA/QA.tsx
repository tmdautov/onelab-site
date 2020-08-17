import React, { useEffect, useState } from 'react';

import Wrapper from '../Wrapper';
import QuestionsContainer from './QuestionsContainer';
import QuestionsForm from './QuestionsForm';
import Skeleton from 'react-loading-skeleton';

const QAForm = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timing);
  }, []);
  return (
    <div className="qa-form">
      <style jsx>
        {`
          .qa-form {
            padding: 9.55vh 0;
            background: #fafafa;
            margin-bottom: 9.55vh;
          }

          .qa-form h1 {
            font-size: 2.375rem;
            margin-bottom: 5.35vh;
          }

          .flex-holder {
            display: flex;
            flex-direction: row;
          }

          @media (max-width: 1024px) {
            .qa-form h1 {
              text-align: center;
            }

            .flex-holder {
              flex-direction: column;
            }
          }
        `}
      </style>
      <Wrapper>
        {!loading ? 
          <h1> ВОПРОС - ОТВЕТ</h1>
          :
          <h1>
            <Skeleton width={'19.5vw'} />
          </h1>
        }
        <div className="flex-holder">
          <QuestionsContainer />
          <QuestionsForm />
        </div>
      </Wrapper>
    </div>
  );
};

export default QAForm;
