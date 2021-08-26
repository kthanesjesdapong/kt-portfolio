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
`;

export default function Skills() {
  return (
    <SkillsStyles>
      <div className='container' id='skills'>
        <SectionTitle heading='Skills' subheading='Technical Skills' />
        <Accordion />
      </div>
    </SkillsStyles>
  );
}
