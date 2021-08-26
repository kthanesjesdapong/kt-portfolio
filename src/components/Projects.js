import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import ProjectItems from './ProjectItems';
SwiperCore.use([Navigation], [Pagination]);

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

export default function Projects() {
  return (
    <div className='container' id='projects'>
      <SectionTitle heading='Projects' subheading='Recent works' />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <ProjectItemsStyles>
          <div className='portfolio__container container'>
            {projects.map((project, idx) => {
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItems
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </ProjectItemsStyles>
      </Swiper>
    </div>
  );
}
