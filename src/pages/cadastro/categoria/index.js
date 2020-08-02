import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(event) {
    // const { getAttribute, value } = event.target
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }
  return (
    <PageDefault>
      <h1>
        {' '}
        Página de Cadastro de Categorias:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias, values,
        ]);
        setValue(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
                    <label>
                        Descrição:
                     <input
                            type="textarea"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

        <FormField
          label="Cor "
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
                    <label>
                        Cor:
                     <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}

                        />
                    </label>
                </div> */}
        <button>
          Cadastrar
        </button>
        <br />
        <ul>
          {categorias.map((categoria, index) => (
            <li key={index}>
              {categoria.nome}
            </li>
          ))}
        </ul>

      </form>
      <Link to="cadastro/categoria">
        Cadastro de Categorias
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
