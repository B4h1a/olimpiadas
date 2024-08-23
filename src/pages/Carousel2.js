// src/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel2.css'; // Importa o arquivo de estilos CSS
import Foto1 from '../assets/banner2.jpg'; // Importe a imagem local
import Foto2 from '../assets/banner3.png';
import Foto3 from '../assets/banner4.webp';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skipTransition, setSkipTransition] = useState(false); // Novo estado para controlar a transição

  // Array de URLs de imagens
  const items = [
    Foto1, // Imagem local
    Foto2,
    Foto3
  ];

  // Função para ir para a próxima imagem
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 2 && !skipTransition) {
        // Se estiver na terceira imagem e não estiver pulando a transição, vai para a segunda imagem
        setSkipTransition(true); // Define o estado para pular a transição
        return 1; // Vai para a segunda imagem
      } else if (prevIndex === 1 && skipTransition) {
        // Se estiver na segunda imagem e o estado de pular a transição está ativado, vai para a primeira
        setSkipTransition(false); // Reseta o estado para continuar com a transição normal
        return 0; // Vai para a primeira imagem
      } else if (prevIndex === 0) {
        return 1; // Vai para a segunda imagem
      } else if (prevIndex === 1) {
        return 2; // Vai para a terceira imagem
      }
      return prevIndex; // Mantém o índice atual se não corresponder a nenhum dos casos
    });
  };

  // Função para ir para a imagem anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 2; // Vai para a terceira imagem se estiver na primeira
      }
      return prevIndex - 1;
    });
  };

  // Efeito para configurar o intervalo de rotação automática
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Muda a imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [skipTransition]); // Adiciona skipTransition ao array de dependências

  return (
    <div className='container2'>
      <div className="carousel2">
        <div
          className="carousel-items2"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item2">
              <img src={item} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
