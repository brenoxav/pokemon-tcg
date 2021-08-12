import API from './API.js';

const commentsPopup = document.querySelector('.comments-popup');

const setCommentsCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    commentsPopup.classList.add('hidden');
    commentsPopup.innerHTML = '';
  });
};

const openCommentsPopup = (cardID) => {
  API.pokemon.getCardbyId(cardID)
    .then((card) => {
      const pokemonCard = card.data[0];
      commentsPopup.innerHTML = `
          <div class="comments-content">
          <img src="${pokemonCard.images.large}" alt="${pokemonCard.name}">  
          <div class="comments-card-info">
          <button class="btn btn-close">Close</button>
          <div class="name-class">
            <h2>${pokemonCard.name}</h2>
            <p class="card-supertype">${pokemonCard.supertype}</p>
            <p class="card-subtype">${pokemonCard.subtypes[0]}</p>
          </div>
          <div class="set-info">
            <p class="card-number">Number: ${pokemonCard.number}</p>
            <p class="card-rarity">Rarity: ${pokemonCard.rarity} </p>
          </div>
          <ul>
            <li>${pokemonCard.tcgplayer.prices.holofoil.low}</li>
            <li>${pokemonCard.tcgplayer.prices.holofoil.mid}</li>
            <li>${pokemonCard.tcgplayer.prices.holofoil.high}</li>
            <li>${pokemonCard.tcgplayer.prices.holofoil.market}</li>
          </ul>
          </div>
          </div>
          `;
      commentsPopup.classList.remove('hidden');
      setCommentsCloseBtnListener(document.querySelector('.btn-close'));
    });
};

const setCommentsListeners = () => {
  const commentsButtons = document.querySelectorAll('.btn-comments');
  commentsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openCommentsPopup(button.dataset.id);
    });
  });
};

export { setCommentsListeners as default };