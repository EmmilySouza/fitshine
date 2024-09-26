import React, { useState } from 'react';
import logotipo from './img/logotipo.png';  // Importe a imagem corretamente
import image1 from './img/image1.png';  // Importe as imagens do carrossel
import image2 from './img/image2.png';
import image3 from './img/image3.png';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [image1, image2, image3];  // Use as variáveis corretas
  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #5C1374, #2b0837)' }}>
      <header>
        <img src={logotipo} alt="Logotipo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li className="dropdown">
              <a href="#">Dicas</a>
              <ul className="dropdown-content">
                <li><a href="#receitas">Receitas</a></li>
                <li><a href="#suplementacoes">Suplementações</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Profissionais</a>
              <ul className="dropdown-content">
                <li><a href="#personal">Personal</a></li>
                <li><a href="#nutricionista">Nutricionista</a></li>
              </ul>
            </li>
            <li><a href="#sos">SOS</a></li>
            <li><a href="#descontos">Descontos</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <img key={index} src={slide} alt={`Imagem ${index + 1}`} />
            ))}
          </div>
          <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
          <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
        </div>

      
      </main>
      <footer style={{ 
          position: 'relative', 
          backgroundColor: '#9d36a6d4', 
          color: '#fff', 
          textAlign: 'center', 
          padding: '10px 0',
          marginTop: '20px' 
        }}>
        <p>© 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
