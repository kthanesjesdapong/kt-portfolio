import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { Swiper } from 'swiper/react';
import GraceRocker from '../assets/images/GraceRocker.png';
import PocketInstructor from '../assets/images/PocketInstructor.png';

const ProjectStyle = styled.div`
  .work__container {
    row-gap: 2rem;
  }
  .work__img {
    box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .work__img img {
    transition: 1s;
    cursor: pointer;
  }
  .work__img img:hover {
    transform: scale(1.1);
  }
`;

export default function Projects() {
  return (
    <div className='container' id='projects'>
      <SectionTitle heading='Projects' subheading='Recent works' />
    </div>
  );
}
