import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import AboutImg from '../assets/images/AboutMePic.png';
import AboutMeTitle from '../components/AboutMeTitle';
import ktResume from '../assets/data/ktResume.pdf';
import DownloadButton from './DownloadButton';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  .aboutSection__left {
    justify-content: flex-start;
    align-self: flex-start;
    flex: 0.4;
    margin-right: 25px;
  }
  .aboutSection__right {
    flex: 0.3;
    border-radius: 3px;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  img {
    border-radius: 30px;
    border: 1px solid var(--gray-1);
  }
  img ::-moz-drag-over {
    border-radius: 55px;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 0.7;
      margin-right: 15px;
    }
    .aboutSection__right {
      flex: 0.7;
    }
    img {
      border-radius: 30px;
      border: 1px solid var(--gray-1);
      width: 80%;
      height: auto;
    }
    img ::-moz-drag-over {
      border-radius: 55px;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    img {
      width: 50%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className='container' id='about'>
        <div className='aboutSection__left'>
          <AboutMeTitle subheading='A little' heading='About Me' />
          <PText>
            Prior to my journey into the realm of software development, I was a
            combat medic attached to the Marine Corps. <br className='tab'></br>
            I quickly came to realize that the problems being solved within the
            Medical Field weren’t ones that excited me.<br></br> This led me to
            explore my other passion, which was Technology.<br></br> I became
            enamored with coding and enrolled myself into FullStack Academy’s
            BootCamp where I was taught the PERN stack. <br></br>I am currently
            in search for an opportunity to start my new career within this
            industry.
          </PText>
          <div className='aboutSection__buttons'>
            <DownloadButton
              btnText='Download Resume'
              btnLink={ktResume}
              download='KT-RESUME'
            />
          </div>
        </div>
        <div className='aboutSection__right'>
          <img className='aboutImg' src={AboutImg} alt='Img' />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
