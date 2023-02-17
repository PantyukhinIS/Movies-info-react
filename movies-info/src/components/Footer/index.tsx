import React from 'react';

import Moviesinfo from 'assets/img/moviesinfo.svg';

import './styles.scss';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="mainFooter">
      <div className='contentFooter'>
        <div className='logo'>
          <img src={Moviesinfo} alt={Moviesinfo} /> 
        </div>
        <div>My project</div>
        <div className='author'>
          <div className='small'>Made by</div>Pantyukhin Ivan
        </div>
      </div>
    </footer>
  );
}

export default Footer;