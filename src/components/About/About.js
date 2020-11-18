import './About.css';
import React from 'react';
import avatar from '../../images/avatar.jpg';

function About() {
    return(
      <section className="about">
        <img className="about__avatar" alt="avatar" src={avatar}></img>
        <div className="about__author">
          <h2 className="about__author-title">Об авторе</h2>
          <p className="about__author-description">
            Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь,
            какими технологиями разработки владеете.
          </p>
          <p className="about__author-description">
            Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились,
            и чем можете помочь потенциальным заказчикам.
          </p>
        </div>
      </section>
    );
}

export default About;
