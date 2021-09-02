import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ProjectItemsStyles = styled.div`
  .portfolio__container {
    overflow: initial;
    padding: 10px;
  }

  .portfolio__content {
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    margin: 35px 0;
  }
  .portfolio__img {
    width: 256px;
    border-radius: 0.5rem;
    justify-self: center;
    margin: 0 25px;
  }
  .portfolio__data {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: cent;
    width: 35%;
  }
  .portfolio__title {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
    /* margin-top: 1.2rem; */
  }
  .portfolio__description {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
  .portfolio__button:hover .button__icon {
    transform: translateX(2rem);
  }
  @media screen and (max-width: 375px) {
    .portfolio__img {
      width: 156px;
      border-radius: 0rem;
      justify-self: center;
      align-items: center;
      margin: 0 25px;
      top: 50%;
    }
    .portfolio__content.grid {
      display: flex;
      align-content: center;
      justify-content: center;
    }
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
      <div className='portfolio__container container '>
        <div className='portfolio__wraper'>
          <div className='portfolio__content grid '>
            <img src={img} className='portfolio__img' alt='portfoliop-ic' />
            <div className='portfolio__data'>
              <h3 className='portfolio__title'>{title}</h3>
              <p className='portfolio__description'>{desc}</p>
              <Button
                btnText='Demo'
                btnLink={link}
                outline={true}
                className='portfolio__button button__icon'
              />
            </div>
          </div>
        </div>
      </div>
    </ProjectItemsStyles>
  );
}
