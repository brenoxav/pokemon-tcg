import API from './API.js';

const reservationPopup = document.querySelector('.reservations-popup');

const generatePopupWindow = () => {
  reservationPopup.innerHTML = `
  <div class="reservation-content">
    <img src="" alt="" class="poke-image">
    <div class="card-info">
      <button class="btn btn-close">Close</button>
      <div class="name-class">
        <h2></h2>
        <p class="card-supertype"></p>
        <p class="card-subtype"></p>
      </div>
      <div class="set-info">
        <p class="card-number"></p>
        <p class="card-rarity"></p>
      </div>
      <ul class="prices-list">
      </ul>
    </div>
    <div class="reservations-container">
      <div class="reservation-data-container">
        <p class="reservations-count">Reservations: X</p>
        <ul class="reservations-data"></ul>
      </div>
      <div class="reservation-form-container>

      </div>          
    </div>
  </div>
  `;
}

const populateCardInfo = (pokeCard) => {
  const pokemonPrices = pokeCard.tcgplayer.prices;
  document.querySelector('.poke-image').src = pokeCard.images.large;
  document.querySelector('.poke-image').alt = pokeCard.name;
  document.querySelector('.name-class h2').textContent = pokeCard.name;
  document.querySelector('.card-supertype').textContent = pokeCard.supertype;
  document.querySelector('.card-subtype').textContent = pokeCard.subtypes[0];
  document.querySelector('.card-number').textContent = pokeCard.number;
  document.querySelector('.card-rarity').textContent = pokeCard.rarity;
  const pricesList = document.querySelector('.prices-list');
  pricesList.innerHTML = `
    <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].low}</li>
    <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].mid}</li>
    <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].high}</li>
    <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].market}</li>
  `;
};

const populateCardReservations = (reservations) => {
  const reservationsList = document.querySelector('.reservations-data');
  reservations.forEach(reservation => {
    reservationsList.innerHTML += `
      <li>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>
    `;
  });
}

const setCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    reservationPopup.classList.add('hidden');
    reservationPopup.innerHTML = '';
  });
};

const openPopup = (cardID) => {
  Promise.allSettled([
    API.pokemon.getCardbyId(cardID),
    API.involvement.getReservations(cardID)
  ]).then(values => {
    const pokemonCard = values[0].value.data[0]
    generatePopupWindow();
    populateCardInfo(pokemonCard);
    reservationPopup.classList.remove('hidden');
    setCloseBtnListener(document.querySelector('.btn-close'));
    const reservations = values[1].value;
    if (!("error" in reservations)){
      populateCardReservations(reservations);
    }
  });
};

const setReservationListeners = () => {
  const reservationButtons = document.querySelectorAll('.btn-reservations');
  reservationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openPopup(button.dataset.id);
    });
  });
};

export { setReservationListeners as default };