import API from './API.js';
import setReservationListeners from './reservations.js';
import setCommentsListeners from './comments.js';

const cardsWrapper = document.querySelector('.cards-wrapper');

const updateLikesCount = () => {
  const counterElements = document.querySelectorAll('.like-count');
  const countersArr = [...counterElements];
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

const AddLikeNumber = (likesText) => {
  const indexEnd = likesText.indexOf(' ') + 1;
  const numText = likesText.substring(0, indexEnd);
  const likesNum = Number.parseInt(numText, 10);
  return likesNum + 1;
};

const setLikeListener = () => {
  document.addEventListener('click', (e) => {
    const likeBtn = e.target;
    const likeCounter = likeBtn.nextElementSibling;
    if (likeBtn.classList.contains('btn-like')) {
      likeCounter.textContent = `${AddLikeNumber(likeCounter.textContent)} likes`;
      API.involvement.postLike(likeCounter.dataset.id);
    }
  });
};

const countCards = () => {
  const numOfCards = document.querySelectorAll('.card').length;
  document.querySelector('.card-counter').textContent = `(${numOfCards})`;
  return numOfCards;
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
      countCards();
      setLikeListener();
      updateLikesCount();
    })
    .then(() => {
      setCommentsListeners();
    })
    .then(() => {
      setReservationListeners();
    });
};

export { renderCardsList as default };