import React from 'react';
import SectionTitle from './SectionTitle';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Accordion from './Accordion';

export default function Skills() {
  return (
    <div>
      <div className='container' id='skills'>
        <SectionTitle heading='Skills' subheading='Technical Skills' />
        <Accordion title='skills' content='skills1,' />
      </div>
    </div>
  );
}
