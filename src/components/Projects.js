import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import PItem from './PItem';
import 'swiper/swiper-bundle.min.css';

const ProjectItemsStyles = styled.div`
  .container {
    width: 80%;
    height: auto;
    
  
  }

  .portfolio__wrapper{
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem, 35rem));
    gap:3rem;
    justify-content: center;
  
    
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--gray-1);
    height: 50px;
    width: 350px;
    font-size: 2rem;
  }
  .swiper-container {
    display: flex;
  }
  @media screen and (max-width: 1050px) {
    .swiper-button-next,
    .swiper-button-prev {
      height: 50px;
      width: 200px;
    }
  }

  @media screen and (max-width: 840px) {
    .swiper-button-next,
    .swiper-button-prev {
      height: 50px;
      width: 100px;
    }
  }
  @media screen and (max-width: 375px) {
    .swiper-button-next,
    .swiper-button-prev {
      height: 490px;
      width: 7px;
    }
  }
`;

export default function Projects() {
  return (
    <ProjectItemsStyles>
      <div className='container' id='projects'>
        <SectionTitle heading='Projects' subheading='Recent works' className='sectionTitle' />

        <div className='portfolio__container container'>
          <div className='portfolio__wrapper'>
            {projects.map((project, idx) => (
              <PItem
                title={project.name}
                img={project.img}
                desc={project.desc}
                link={project.link} />
            ))}
          </div>

          {/* {projects.map((project, idx) => {
            return (
              <ProjectItems
                title={project.name}
                img={project.img}
                desc={project.desc}
                link={project.link}
              />

            );
          })} */}
        </div>

      </div>
    </ProjectItemsStyles>
  );
}
