import React from 'react'
import styled from 'styled-components';


const PItemStyles = styled.div`
.card{
    overflow:hidden;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;
    
    &image {
    height: 12rem;
    width: 100%;
    object-fit: cover;
  }

  &__title {
    padding: 1rem;
  }

  &__description {
    padding: 0 1rem;
  }

  &__btn {
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid var(--gray-1);
    background: transparent;
    color: var(--gray-1);
    border-radius: 8px;
    transition: background 200ms ease-in, color 200ms ease-in;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:hover &__btn {
    background-color: black;
    color: black;
  }
}


.button__wrapper{
    display:flex;
    justify-content: flex-end;
}



`



export default function PItem({ img = undefined,
    title = 'Project Name',
    desc = 'placeholder',
    link = 'link',
    idx = 0 }

) {
    return (
        <PItemStyles>
            <div className='card'>
                <a href={link}>
                    <div className="card__body">
                        <img src={img} alt="" />
                        <h2 className="card__title">{title}</h2>
                        <p className='card__description'>{desc}</p>
                        <div className='button__wrapper'>
                            <button className='card__btn'>View Project</button>
                            {/* <PButton
                            btnText='Link'
                            btnLink={link}
                            outline={true}
                            className='portfolio__button button__icon'
                        /> */}
                        </div>
                    </div>
                </a>
            </div>
        </PItemStyles>
    )
}
