import './About.css';
import React from 'react';

function About() {
    return(
      <section className="about">
        <div className="about__avatar" />
        <div className="about__author">
          <h2 className="about__author-title">Info</h2>
          <p className="about__author-description">
            Меня зовут Ирина, и перед вами мой проект News&nbsp;Explorer.
            News&nbsp;Explorer - это сервис, где вы можете найти новости по ключевому слову и сохранить их в личном кабинете.
          </p>
          <p className="about__author-description">
            Другие мои проекты вы можете посмотреть на github.
            По вопросам сотрудничества, пишите в telegram.
          </p>
        </div>
      </section>
    );
}

export default About;
