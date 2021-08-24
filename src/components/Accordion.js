import { prop } from 'dom7';
import React from 'react';
import styled from 'styled-components';
import skills from '../assets/data/skills';

const AccordingStyles = styled.div`
  .container {
    width: 100%;
    max-width: 480px;
    margin: auto;
  }
  .accordion {
    width: 100%;
    max-width: 540px;
    margin: 18px auto;
    color: white;
  }
  .accordion__heading {
    background-color: var(--deep-blue);
    padding: 14px 0;
  }
  .accordion__heading p {
    letter-spacing: 1.2px;
    font-weight: 500px;
  }
  .accordion__heading span {
    cursor: pointer;
  }
`;

export default function Accordion(props) {
  return (
    <AccordingStyles>
      <div className='according'>
        <div className='accordion__heading'>
          <div className='container'>
            <p>props.title</p>
            <span>X</span>
          </div>
        </div>
        <div className='accordion__content'>
          <div className='container'>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </AccordingStyles>
  );
}
