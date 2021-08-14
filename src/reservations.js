import API from './API.js';

const reservationPopup = document.querySelector('.reservations-popup');

const generatePopupWindow = () => {
  reservationPopup.innerHTML = `
    <div class="popup-content">
    <button class="btn-close material-icons">close</button>
  
      <div class="popup-image-wrapper">
        <img class="popup-image" src="" alt="">  
      </div>

      <div class="popup-info">
        <h2 class="popup-name"></h2>
        <h3 class="popup-type">
          <span class="popup-supertype"></span> - 
          <span class="popup-subtype"></span>
        </h3>
        <div class="info-wrapper">
          <span class="popup-number">Number: </span> - 
          <span class="popup-rarity">Rarity: </span>
        </div>
        <h3>Prices from TCG Player</h3>
        <ul class="prices-list">
        </ul>

        <div class="reservations-container">
          <div class="reservation-data-container">
            <h3 class="popup-counter reservations-count">Reservations: X</h3>
            <ul class="reservations-data"></ul>
          </div>
          <div class="reservation-form-container">
            <h2>Add a reservation</h2>
            <form class="reservations-fill">
              <input type="text" id="username" class="username" placeholder="Type your name" required><br>
              <label for="date-start">Start date:</label><br>
              <input type="date" id="date-start" name="date-start" min="2021-8-13 placeholder="Start date" required><br>
              <label for="date-end">Date end:</label><br>
              <input type="date" id="date-end" name="date-end" min="2021-8-14" placeholder="End date" required>
              <button class="btn btn-reservation">Submit</button>
            </form>
          </div>          
        </div>
      </div>
    </div>
  `;
};

const countReservations = () => {
  const reservationNumber = document.querySelectorAll('.reservations-data li').length;
  document.querySelector('.reservations-count').textContent = `Reservations: ${reservationNumber}`;
  return reservationNumber;
};

const populateCardInfo = (pokeCard) => {
  const pokemonPrices = pokeCard.tcgplayer.prices;
  document.querySelector('.popup-image-wrapper img').src = pokeCard.images.large;
  document.querySelector('.popup-image-wrapper img').alt = pokeCard.name;
  document.querySelector('.popup-name').textContent = pokeCard.name;
  document.querySelector('.popup-supertype').textContent = pokeCard.supertype;
  document.querySelector('.popup-subtype').textContent = `${pokeCard.subtypes[0]}`;
  document.querySelector('.popup-number').textContent = pokeCard.number;
  document.querySelector('.popup-rarity').textContent = pokeCard.rarity;
  const pricesList = document.querySelector('.prices-list');
  pricesList.innerHTML = `
    <li class="popup-price">Low: ${pokemonPrices[Object.keys(pokemonPrices)[0]].low}</li>
    <li class="popup-price">Mid: ${pokemonPrices[Object.keys(pokemonPrices)[0]].mid}</li>
    <li class="popup-price">High ${pokemonPrices[Object.keys(pokemonPrices)[0]].high}</li>
    <li class="popup-price">Market: ${pokemonPrices[Object.keys(pokemonPrices)[0]].market}</li>
  `;
};

const populateCardReservations = (reservations) => {
  const reservationsList = document.querySelector('.reservations-data');
  reservationsList.innerHTML = '';
  reservations.forEach((reservation) => {
    reservationsList.innerHTML += `
      <li>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>
    `;
  });
  countReservations();
};

const setCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    reservationPopup.classList.add('hidden');
    reservationPopup.innerHTML = '';
  });
};

const postReservation = async (submitBtn, cardID) => {
  const newReservation = {
    item_id: cardID,
    username: document.querySelector('#username').value,
    date_start: document.querySelector('#date-start').value,
    date_end: document.querySelector('#date-end').value,
  };
  await API.involvement.postReservation(newReservation);
  submitBtn.parentNode.reset();
  const reservations = await API.involvement.getReservations(cardID);
  populateCardReservations(reservations);
};

const setSubmitListener = (submitBtn, cardID) => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postReservation(submitBtn, cardID);
  });
};

const openPopup = (cardID) => {
  Promise.allSettled([
    API.pokemon.getCardbyId(cardID),
    API.involvement.getReservations(cardID),
  ]).then((values) => {
    const pokemonCard = values[0].value.data[0];
    generatePopupWindow();
    populateCardInfo(pokemonCard);
    reservationPopup.classList.remove('hidden');
    setCloseBtnListener(document.querySelector('.btn-close'));
    setSubmitListener(document.querySelector('.btn-reservation'), cardID);
    const reservations = values[1].value;
    if (!('error' in reservations)) {
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

export { countReservations, setReservationListeners as default };