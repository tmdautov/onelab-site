import { useState, useEffect } from 'react';
import Link from 'next/link';

import Wrapper from '../Wrapper';
import theme from '../../styles/theme';

const Requirements = () => {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const reqs = [
      {
        title: 'Образование',
        description: 'Выпускники 3-4 курсов бакалавриата, а также магистранты IT-вузов',
      },
      {
        title: 'Знания',
        description: 'Базовые знания своего направления, понимание ООП, алгоритм, структуры данных',
      },
      {
        title: 'Мотивация',
        description:
          'Есть огромное желание развиваться в IT-сфере, работать в команде, инициативность, дисциплина, самоотдача и саморазвитие',
      },
      {
        title: 'Небольшой опыт',
        description: 'Портфолио на GitHub - будет преимуществом',
      },
    ];

    setRequirements(reqs);
  }, []);
  return (
    <div className="requirements" id="requirements">
      <style jsx>
        {`
                    .requirements {
                        margin-bottom: 9.255vh;
                    }

                    h1 {
                        color: black;
                        text-align: center;
                        font-size: 2.375rem;
                        font-weight: 600;
                        margin-bottom: 5%;
                    }

                    .flex-holder {
                        display: grid;
                        grid-template-columns: 50% 50%;
                        row-gap: 5%:
                        column-gap: 150px;
                    }

                    .requirement h1 {
                        text-align: left;
                        font-size: 1.525rem;
                        font-weight: 500;
                    }

                    .requirements p {
                        padding: 2% 0 5% 0;
                    }

                    .requirement {
                        background: #F9F9F9;
                        width: 88%;
                        padding: 5%;
                        margin: 0 3% 3% 0;
                    }

                    button {
                        background-color: ${theme.colors.black};
                        color: ${theme.colors.white};
                        padding: 3% 2%;
                        width: 50%;
                        border: none;
                        border-radius: 6px;
                        outline: none;
                        cursor: pointer;
                        font-weight: 500;
                        margin: 3% 0 0 74%;
                      }

                    @media (max-width: 1024px) {
                        .flex-holder {
                            display: flex;
                            flex-direction: column;
                        }

                        .requirement h1 {
                            text-align: center;
                        }

                        button {
                            margin: 3% 0 0 25%;
                        }
                    }
                `}
      </style>
      <Wrapper>
        <h1>ТРЕБОВАНИЯ К ИДЕАЛЬНОМУ КАНДИДАТУ</h1>
        <div className="flex-holder">
          {requirements.map((requirement) => {
            return (
              <div className="requirement">
                <h1>{requirement.title}</h1>
                <p>{requirement.description}</p>
              </div>
            );
          })}
          <Link href="/#request">
            <button>Подать заявку</button>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Requirements;
