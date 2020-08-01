import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria () {
    return (
        <PageDefault>
           <h1> Página de Cadastro de Categorias  </h1>
            <Link to="cadastro/categoria">
                Cadastro de Categorias
            </Link>
        </PageDefault>
    )
}
export default CadastroCategoria;