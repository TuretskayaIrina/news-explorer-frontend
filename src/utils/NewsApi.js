import {apiKey} from './utils';
import {newsUrl} from './utils';

// запрос — то, что ввёл пользователь в поиск;
// from — 7 дней назад от текущей даты;
// to — текущая дата;
// pageSize — максимально допустимый массив 100 статей — это ограничение бесплатной версии.


// формат даты для запроса к api
let now = new Date();

const startDate = now.toISOString().slice(0, 10);
now.setDate(now.getDate() - 7);
const finishDate = now.toISOString().slice(0, 10);

console.log(startDate);
console.log(finishDate);

export const getNews = (keyword) =>{
  return fetch(`${newsUrl}q=${keyword}&apiKey=${apiKey}&from=${finishDate}&to=${startDate}&sortBy=publishedAt&pageSize=100`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      // обрабатывать другие статусы на фронте? например 400?
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
};
