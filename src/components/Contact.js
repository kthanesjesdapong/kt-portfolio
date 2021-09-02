import React from 'react';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import { MdPlace, MdEmail } from 'react-icons/md';
import ContactForm from './ContactForm';
import emailjs from 'emailjs-com';
const ContactStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    align-content: center;
    position: relative;
    width: 85%;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }

  @media only screen and (max-width: 1046px) {
    .contactSection__wrapper::after {
      position: absolute;
      content: '';
      width: 2px;
      height: 50%;
      background-color: var(--gray-1);
      left: 52%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
  }

  @media only screen and (max-width: 992px) {
    .contactSection__wrapper::after {
      position: absolute;
      content: '';
      width: 2px;
      height: 50%;
      background-color: var(--gray-1);
      left: 53%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
  }

  @media only screen and (max-width: 972px) {
    .contactSection__wrapper::after {
      position: absolute;
      content: '';
      width: 2px;
      height: 50%;
      background-color: var(--gray-1);
      left: 55%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
  }
  @media only screen and (max-width: 945px) {
    .contactSection__wrapper::after {
      position: absolute;
      content: '';
      width: 2px;
      height: 50%;
      background-color: var(--gray-1);
      left: 55%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
  }

  @media only screen and (max-width: 945px) {
    .contactSection__wrapper::after {
      position: absolute;
      content: '';
      width: 0px;
      height: 50%;
      background-color: var(--gray-1);
      left: 55%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }

  @media only screen and (max-width: 375px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      width: 120%;
      max-width: 100%;
    }
    p {
      font-size: 12px;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function Contact() {
  return (
    <ContactStyles>
      <SectionTitle heading='Contact' subheading='Reach out to me' />
      <div className='container' id='contact'>
        <div className='contactSection__wrapper'>
          <div className='left'>
            <ContactInfoItem
              icon={<MdEmail />}
              text='kavinthanesjesdapong@gmail.com'
            />
            <ContactInfoItem icon={<MdPlace />} text='Las Vegas, Nevada' />
          </div>
          <div className='right'>
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}
