import API from './API.js';
import setCommentsListeners from './comments.js';

const cardsWrapper = document.querySelector('.cards-wrapper');

const updateLikesCount = (countersArr) => {
  API.involvement.getLikes()
    .then((likesArr) => {
      likesArr.forEach((likeCount) => {
        const likeCounter = countersArr.find((counter) => counter.dataset.id === likeCount.item_id);
        if (likeCounter) {
          likeCounter.textContent = `${likeCount.likes} likes`;
        }
      });
    });
};

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
                <span data-id="${card.id}" class="like-count">0 likes</span>
              </span>
            </div>
            <button data-id="${card.id}" class="btn btn-comments">Comments</button>
            <button data-id="${card.id}" class="btn btn-reservations">Reservations</button>
          </div>
        `;
        cardsWrapper.innerHTML += newCard;
      });
      return cardsArr;
    })
    .then(() => {
      const counterElements = document.querySelectorAll('.like-count');
      const countersArr = [...counterElements];
      updateLikesCount(countersArr);
    })
    .then(() => {
      setCommentsListeners();
    });
};

export { renderCardsList as default };