import API from './API.js';

const cardsWrapper = document.querySelector('.cards-wrapper');

const renderCardsList = () => {
  API.pokemon.getAllCards()
    .then((data) => {
      const cardsArr = data.data.slice(0, 12);
      cardsArr.forEach((card) => {
        const newCard = `
        <div class="card">
          <img src="${card.images.large}" alt="${card.name}" class="card-image">
          <div>
            <span class="card-name">${card.name}</span>
            <span class="like-wrapper">
              <span class="btn-like material-icons">favorite_border</span>
              <span class="like-count">3 likes</span>
            </span>
          </div>
          <button data-id="${card.id}" class="btn btn-comments">Comments</button>
          <button data-id="${card.id}" class="btn btn-reservations">Reservations</button>
        </div>
      `;
        cardsWrapper.innerHTML += newCard;
      });
    });
};

export { renderCardsList as default };