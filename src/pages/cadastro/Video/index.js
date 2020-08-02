import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo () {
    return (
        <PageDefault>
           <h1> Página de Cadastro de Vídeos</h1>
            <form>
                <label>
                Nome da Categoria:
                <input
                type="text"
                 />
                 </label>

                <button>
                 Cadastrar
                </button>
            </form>

            <Link to="cadastro/categoria">
                    Cadastro de Video 
            </Link>
        </PageDefault>
    )
}
export default CadastroVideo;