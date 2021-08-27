import React from 'react';
import SectionTitle from './SectionTitle';
import Accordion from './Accordion';
import styled from 'styled-components';

const SkillsStyles = styled.div`
  /* .accordion__container {
    display: flex;
    justify-content: center;
    flex-direction: row;
  } */
  .container {
    margin-bottom: 100px;
  }
`;

export default function Skills() {
  return (
    <SkillsStyles id='skills'>
      <div className='container'>
        <SectionTitle
          heading='Skills'
          subheading='Technical Skills'
          id='skills'
        />
        <Accordion />
      </div>
    </SkillsStyles>
  );
}
