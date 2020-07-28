import React from 'react';
import { FooterBase } from './styles';

const divLogo = {

  width:'160px',
  height: 'auto'

}

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/lucas-amado-335056167/">
        <img style={divLogo} src="https://fontmeme.com/permalink/200728/aef60db7d917265569842919ce44dd6a.png" alt="Logo Amado" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
