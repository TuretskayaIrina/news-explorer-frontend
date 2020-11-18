import first from '../images/cards/image_08.jpg';
import second from '../images/cards/image_04.jpg';
import third from '../images/cards/image_07.jpg';

const articles = [
  {
    sourse: 'https://lenta.ru/',
    urlToImage: `${first}`,
    category: 'Природа',
    publishedAt: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    sourseName: 'Лента.ру',
  },
  {
    sourse: 'https://meduza.io/',
    urlToImage: `${second}`,
    category: 'Природа',
    publishedAt: '2 августа, 2019',
    title: 'Лесные огоньки: история одной фотографии',
    description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики,чтобы запечатлеть ускользающую красоту одного из местных чудес природы',
    sourseName: 'Медуза',
  },
  {
    sourse: 'https://ria.ru/',
    urlToImage: `${third}`,
    category: 'Природа',
    publishedAt: '2 августа, 2019',
    title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
    description: 'Знаменитый фотограф снимает первозданные леса России,чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где очень очень очень много текста',
    sourseName: 'РИА',
  }
]

export default articles;
