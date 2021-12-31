import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 1.2rem;
  .button {
    font-size: 1.2rem;
    background-color: ${(props) =>
        props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.5em 1.5em;
    border: 2px solid var(--gray-1);
    border-radius: 7px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.5rem;
    }
  }
`;

export default function PButton({
    btnText = 'test',
    btnLink = 'test',
    outline = false,
}) {
    return (
        <ButtonStyle outline={outline} className='button-wrapper'>
            <a href={btnLink} className='button' to={btnLink}>
                {btnText}
            </a>
        </ButtonStyle>
    );
}