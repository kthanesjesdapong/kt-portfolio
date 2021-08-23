import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: left;
  p {
    font-family: 'SF-Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'SF-Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export default function ArticleTitle({
  heading = 'Main Header',
  subheading = 'Sub Header',
}) {
  return (
    <SectionTitleStyle>
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </SectionTitleStyle>
  );
}
