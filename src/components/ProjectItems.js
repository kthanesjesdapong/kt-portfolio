import React from 'react';
import styled from 'styled-components';

const ProjectItemsStyles = styled.div`
  .portfolio__container {
    overflow: initial;
  }
  .portfolio__content {
    padding: 0 1.5rem;
  }
  .portfolio__img {
    width: 256px;
    border-radius: 0.5rem;
    justify-self: center;
  }
  .portfolio__title {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    margin-top: 1.2rem;
  }
  .portfolio__description {
    margin-bottom: 1.2rem;
  }
  .portfolio__button:hover .button__icon {
    transform: translateX(2rem);
  }
`;

export default function ProjectItems({
  img = undefined,
  title = 'Project Name',
  desc = 'placeholder',
  link = 'link',
}) {
  return (
    <ProjectItemsStyles>
      <div className='portfolio__container container swiper-container'>
        <div className='swiper-wrapper'>
          <div className='portfolio__content grid swiper-slide'>
            <img src={img} className='portfolio__img' alt='portfoliop-ic' />
            <div className='portfolio__data'>
              <h3 className='portfolio__title'>{title}</h3>
              <p className='portfolio__description'>{desc}</p>
              <a href={link} className='portfolio__button button__icon'>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectItemsStyles>
  );
}
