import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env;
const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-blue);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .Toastify__toast--warning {
    background: #ffe8bc !important;
  }
  .Toastify__toast--error {
    background: #fca7a9 !important;
  }
  .toastBody {
    color: #10171d; /* #10171D */
    font-size: 1rem !important;
  }
  .Toastify__toast-theme--light {
    background: #1d2d3c;
    color: var(--toastify-text-color-light);
    font-family: 'SF-Regular';
    font-size: 12px;
  }
  .toastProgress {
    background: #bebebe !important;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const notify = () =>
    toast('Thanks so much for reaching out! I will reply as soon as I can!');
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uxss4sg',
        'template_lf7jw0b',
        e.target,
        'user_YRYJeFMLCyP8S9TL22zHQ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    notify();
    e.target.reset();
  }
  return (
    <FormStyle onSubmit={sendEmail}>
      <ToastContainer
        progressClassName='toastProgress'
        bodyClassName='toastBody'
      />
      <div className='form-group'>
        <label htmlFor='name'>
          Name
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className='form-group'>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className='form-group'>
        <label htmlFor='subject'>
          Subject
          <input
            type='text'
            id='subject'
            name='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
      </div>
      <div className='form-group'>
        <label htmlFor='message'>
          Message
          <textarea
            type='text'
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type='submit' onSubmit={sendEmail}>
        Send
      </button>
    </FormStyle>
  );
}
