import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import AboutImg from '../assets/images/AboutMePic.png';
import AboutMeTitle from '../components/AboutMeTitle';
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
  const ktResume =
    'https://drive.google.com/file/d/1XqC7bEc_HySY133UkVipNt_Ocki83nTy/view?usp=share_link';

  return (
    <AboutSectionStyles>
      <div className='container' id='about'>
        <div className='aboutSection__left'>
          <AboutMeTitle subheading='' heading='About Me' />
          <PText>
            Navy Combat Medic Vertan turned Software Developer . I am passionate about bringing digital products to life through code! User experience, delivering aesthetically pleasing products, and writing clean accessible code matters to me.
            I have a Certificate of Web Development from FullStack Academy's Immersive Program where I was taught the PERN stack in a highly collaborative setting.
            <br />
            <br />
            <br /> When I'm not coding you can find me lifting iron plates or walking my dog Almond!
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
