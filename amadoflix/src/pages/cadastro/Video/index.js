import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
      <PageDefault>
        <div>
    
          <h1>Cadastro de video</h1>

          <Link to='categoria'>
            Cadastrar Categoria
          </Link>

        </div>
      </PageDefault>
    )
  }

  export default CadastroVideo;