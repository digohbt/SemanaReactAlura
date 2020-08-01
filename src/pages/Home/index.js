import React from 'react';
import Menu from '../../components/menu/index'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import dadosIniciais from '../../data/dados_iniciais.json'


function Home () {
  return (
    <div >
      <Menu/>
      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      videoDescription={"Escreva aqui a sua descrição"}
      url={dadosIniciais.categorias[0].videos[0].url}/>
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      category={dadosIniciais.categorias[1]}
      />
      <Footer/>
    </div>
  );
}

export default Home;
