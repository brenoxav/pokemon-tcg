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
  `;
};

const countReservations = () => {
  const reservationNumber = document.querySelectorAll('.reservations-data li').length;
  document.querySelector('.reservations-count').textContent = `Reservations: ${reservationNumber}`;
  return reservationNumber;
};

const populateCardInfo = (pokeCard) => {
  const pokemonPrices = pokeCard.tcgplayer.prices;
  document.querySelector('.poke-image').src = pokeCard.images.large;
  document.querySelector('.poke-image').alt = pokeCard.name;
  document.querySelector('.name-class h2').textContent = pokeCard.name;
  document.querySelector('.card-supertype').textContent = pokeCard.supertype;
  document.querySelector('.card-subtype').textContent = `${pokeCard.subtypes[0]}`;
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