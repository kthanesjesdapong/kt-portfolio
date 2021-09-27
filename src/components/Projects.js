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
  .container {
    width: 100%;
    height: auto;
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
        <SectionTitle heading='Projects' subheading='Recent works' />
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          <div className='portfolio__container container'>
            {projects.map((project, idx) => {
              return (
                <SwiperSlide key={project.id} className='swiper-arrows'>
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
        </Swiper>
      </div>
    </ProjectItemsStyles>
  );
}
