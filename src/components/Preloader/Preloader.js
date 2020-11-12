import './Preloader.css';
import React from 'react';

function Preloader() {
    return(
      <section className="preloader">
          <i class="preloader__circle"></i>
          <p  class="preloader__message">Идет поиск новостей...</p>
      </section>
    );
}

export default Preloader;
