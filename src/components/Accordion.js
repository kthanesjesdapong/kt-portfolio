import React, { useState } from 'react';
import styled from 'styled-components';
import skills from '../assets/data/skills';

const AccordingStyles = styled.div`
  .container {
    display: flex;
    justify-content: center;
  }
  body {
    font-family: 'SF-Regular';
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }

  ul {
    display: flex;
    min-height: 30vh;
    max-height: 30vh;
    max-width: 200vh;
    margin: 10px 100px;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
    border-radius: 2px solid white;
  }

  li {
    flex: 1;
    display: flex;
    align-items: stretch;
    padding: 20px;
    background: #1d2d3c;
    cursor: pointer;
    transition: all 0.5s ease;
    border: 2px solid #15202b;

    &:hover {
      background: #15202b;
    }

    &.active {
      flex: 5;
      background: #253a4d;
      cursor: default;
      font-size: 16px;

      h2 {
        color: white;
        font-size: 24px;
      }

      .section-content {
        flex: 5;
        opacity: 1;
        transform: scaleX(1);
        color: var(--gray-1);
      }
    }

    .section-title {
      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 0;
      text-align: center;
      color: white;

      h2 {
        margin: 0;
        transform: rotate(-90deg);
        white-space: nowrap;
      }
    }

    .section-content {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0;
      padding: 0;
      opacity: 0;
      transition: all 0.25s 0.1s ease-out;
    }
  }

  @media only screen and (max-width: 945px) {
    ul {
      flex-shrink: 0.5;
    }
  }
  @media only screen and (max-width: 772px) {
    ul {
      flex-shrink: 0.2;
    }
  }
`;

export default function Accordion() {
  const [cur_skill, setCurSkill] = useState('');
  return (
    <AccordingStyles>
      <div className='container'>
        <ul>
          {skills.map((skill, idx) => {
            return (
              <li
                onClick={() => setCurSkill(skill.level)}
                className={skill.level === cur_skill ? 'active' : ''}
                key={idx}
              >
                <div className='section-title'>
                  <h2>{skill.level}</h2>
                </div>
                <div className='section-content'>
                  {skill.name.map((n) => {
                    return (
                      <p>
                        {n}
                        <br></br>
                      </p>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </AccordingStyles>
  );
}
