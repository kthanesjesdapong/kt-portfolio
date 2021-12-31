import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

import { Link, animateScroll as scroll } from 'react-scroll';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  box-shadow: 0 -1px 4px rgb(0 0 0 / 15%);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-blue);
      }
    }
    a {
      display: inline-block;
      font-family: 'SF-Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
      cursor: pointer;
    }
    a:hover {
      color: var(--white);
    }

    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-blue);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;
export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavStyles>
      <div
        className='mobile-menu-icon'
        onClick={() => setShowNav(!showNav)}
        role='button'
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className='closeNavIcon'
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>

        <li>
          <Link
            to='home'
            spy={true}
            smooth={true}
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to='about'
            spy={true}
            smooth={true}
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='skills'
            spy={true}
            smooth={true}
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
