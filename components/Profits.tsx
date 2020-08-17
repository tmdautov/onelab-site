import React, { useState, useEffect } from 'react';
import {
  ExperimentOutlined,
  FileDoneOutlined,
  SettingOutlined,
  PoundOutlined,
  SmileOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import theme from '../styles/theme';
import SkeletonProfits from './Skeleton/Profits/SkeletonProfits';

const Profits = () => {
  const profits = [
    {
      header: 'Сертификаты от',
      label: 'one.kz',
      icon: (
        <FileDoneOutlined
          style={{
            width: '2.6vw',
            height: '5.3vh',
            fontSize: '234%',
            margin: '3.183vh 0',
            padding: '0 5% 0 2%',
            color: '#D10001',
          }}
        />
      ),
    },
    {
      header: 'Обучение на реальных кейсах',
      label: 'one.kz',
      icon: (
        <ExperimentOutlined
          style={{
            width: '2.6vw',
            height: '5.3vh',
            fontSize: '234%',
            margin: '3.183vh 0',
            padding: '0 5% 0 2%',
            color: '#D10001',
          }}
        />
      ),
    },
    {
      header: 'Живое общение',
      label: 'с ведущими разработчиками one.kz',
      icon: (
        <SmileOutlined
          style={{
            width: '2.6vw',
            height: '5.3vh',
            fontSize: '234%',
            margin: '3.183vh 0',
            padding: '0 5% 0 2%',
            color: '#D10001',
          }}
        />
      ),
    },
    {
      header: 'Трудоустройство',
      label: 'лучшим выпускникам',
      icon: (
        <PoundOutlined
          style={{
            width: '2.6vw',
            height: '5.3vh',
            fontSize: '234%',
            margin: '3.183vh 0',
            padding: '0 5% 0 2%',
            color: '#D10001',
          }}
        />
      ),
    },
    {
      header: 'Обучение Data Science',
      label: 'с 2014 года',
      icon: (
        <SettingOutlined
          style={{
            width: '2.6vw',
            height: '5.3vh',
            fontSize: '234%',
            margin: '3.183vh 0',
            padding: '0 5% 0 2%',
            color: '#D10001',
          }}
        />
      ),
    },
    {
      header: 'Работа в команде',
      label: 'one.kz',
      icon: (
        <TeamOutlined
          style={{
            width: '2.6vw',
            height: '5.3vh',
            fontSize: '234%',
            margin: '3.183vh 0',
            padding: '0 5% 0 2%',
            color: '#D10001',
          }}
        />
      ),
    },
  ];
  
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setBenefits(profits);
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div>
      <style jsx>
        {`
          .profits {
            padding-top: 9.55vh;
            padding-bottom: 9.55vh;
            text-align: center;
            color: #1a1a1a;
            background: ${theme.colors.white};
          }

          h1 {
            font-size: 2.3rem;
            margin-bottom: 9.55vh;
          }

          .header-profit {
            font-size: 1.25rem;
            margin-bottom: 3%;
          }

          .label-profit {
            font-size: 0.95rem;
          }

          .grid-container {
            justify-content: center;
            display: grid;
            grid-template-columns: 23vw 23vw 23vw;
            grid-template-rows: 21.22vh;
            column-gap: 3.183vh;
            row-gap: 1.5625vw;
          }

          @media only screen and (max-width: 1024px) {
            .grid-container {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
      {!loading ?
      <div className="profits">
        <h1>МЫ ПРЕДЛАГАЕМ</h1>
        <div className="grid-container">
          { 
          profits.map((e) => {
            return (
              <div key={e.header}>
                {e.icon}
                <h2 className="header-profit">{e.header}</h2>
                <label className="label-profit">{e.label}</label>
              </div>
            );
          })}
        </div>
      </div>
      :
      <SkeletonProfits length={profits.length} />
      }
    </div>
    
  );
};

export default Profits;
