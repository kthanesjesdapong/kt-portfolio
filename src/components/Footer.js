import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import { GoMarkGithub } from 'react-icons/go';
import { FiLinkedin, FiLinkedin as LinkedinIcon } from 'react-icons/fi';

const FooterStyles = styled.div`
  padding-top: 5rem;
  background: var(--deep-blue);
  .container {
    display: flex;
    gap: 3rem;
    padding-bottom: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className='container'>
        <div className='footer__col1'>
          <h1 className='footer__col1__title'>Kavin Thanesjesdapong</h1>
          <PText></PText>
        </div>
        <div className='footer__col3'>
          <FooterCol
            heading='Contact Info'
            links={[
              {
                title: 'kavinthanesjesdapong@gmail.com',
                path: 'mailto:kavinthanesjesdapong@gmail.com',
              },
              {
                title: 'Las Vegas, NV',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className='footer__col4'>
          <FooterCol
            heading='Socials'
            links={[
              {
                title: <GoMarkGithub size={1} x />,
                path: 'https://github.com/kthanesjesdapong',
              },
              {
                title: <FiLinkedin />,
                path: 'http://linkedin.com/in/kthanesjesdapong',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyles>
  );
}
