import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { Swiper } from 'swiper/react';

export default function Projects() {
  return (
    <div className='container' id='projects'>
      <SectionTitle heading='Projects' subheading='Recent works' />
    </div>
  );
}
