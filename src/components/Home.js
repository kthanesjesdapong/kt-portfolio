import React, { useState } from 'react';
import Kavin from '../assets/images/home__img.png';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import ArticleTitle from './ArticleTitle';
import { Link, animateScroll as scroll } from 'react-scroll';

const HomeStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .home__right {
    flex: 0.3;
  }
  .home__left {
    flex: 0.27;
    margin: 3rem;
    margin-right: 5rem;
  }

  .para {
    text-align: left;
    margin-top: 2rem;
    margin-left: 0;
  }
  .home__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .home__right {
      flex: 4;
    }
    .home__left {
      flex: 2.5;
    }
  }
  @media only screen and (max-width: 700px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .home__left,
    .home__right {
      width: 100%;
    }
    .home__left {
      flex: 0.3;
    }
    .ahome_left {
      margin-top: 3rem;
    }
    .article-title {
      text-align: center;
    }
    img {
      width: 50%;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .home__buttons {
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

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  return (
    <HomeStyles id='home'>
      <div className='container'>
        <div className='home__left'>
          <img className='homeImg' src={Kavin} alt='Img' />
        </div>
        <div className='home__right'>
          <ArticleTitle
            heading={`Hi, I'm Kavin`}
            subheading='Software Developer'
          ></ArticleTitle>
          <PText className='para'>
            I am a recent graduate of FullStack Academy's immersive program. I
            am highly motivated and I have a passion for learning and solving
            complex dynamic problems!
          </PText>
          <div className='home__buttons'>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              onClick={() => setShowNav(!showNav)}
              role='button'
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <Button btnText='Contact Me' btnLink='#' outline />
            </Link>
          </div>
        </div>
      </div>
    </HomeStyles>
  );
}
