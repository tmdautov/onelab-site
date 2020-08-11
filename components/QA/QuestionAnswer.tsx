import React from 'react';
import theme from '../../styles/theme';
import { RightOutlined, DownOutlined } from '@ant-design/icons';

const QuestionAnswer = ({ question, answer }) => {
  const [hidden, setHidden] = React.useState(true);
  return (
    <>
      <style jsx>
        {`
          .collapsible {
            width: 35.127vw;
            height: 9.55vh;
            text-align: left;
            padding-left: 3%;
            border: 0.5px solid #b2b2b2;
            border-left: none;
            border-right: none;
            background: transparent;
            font-size: 0.95rem;
            font-weight: 700;
          }
          .collapsible:focus {
            border-left: none;
            border-right: none;
          }
          .content {
            padding: 0 1.17vw;
            width: 32.727vw;
            transition: max-height 0.2s ease;
            background-color: ${theme.colors.white};
            max-height: 0;
            overflow: hidden;
          }
          .content p {
            padding: 5px;
          }
          .hidden {
            max-height: 0;
            overflow: hidden;
          }
          .active {
            max-height: 100%;
          }
          @media (max-width: 1024px) {
            .collapsible {
              width: 100%;
            }
            .content {
              width: 96%;
            }
          }
        `}
      </style>
      <button className="collapsible" onClick={() => setHidden(!hidden)}>
        {question}
        {!hidden ? <DownOutlined style={{ float: 'right' }} /> : <RightOutlined style={{ float: 'right' }} />}
      </button>
      <div className={!hidden ? 'content active' : 'content'}>
        <p style={{ padding: '5% 0' }}>Ответ: {answer}</p>
      </div>
    </>
  );
};

export default QuestionAnswer;
